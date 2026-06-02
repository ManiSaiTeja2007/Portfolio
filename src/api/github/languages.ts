// src/api/github/languages.ts
import { GITHUB_CONFIG } from '../../config/github';

export interface Language {
    name: string;
    bytes: number;
    percentage: number;
}

export interface LanguagesResponse {
    languages: Language[];
    totalBytes: number;
    updatedAt: string;
    _note?: string;
}

export async function fetchGitHubLanguages(): Promise<LanguagesResponse> {
    const cacheKey = 'github-languages';
    const cacheDuration = 24 * 60 * 60 * 1000; // 24 hours

    try {
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
            const { data, timestamp } = JSON.parse(cached);
            if (Date.now() - timestamp < cacheDuration) {
                return data as LanguagesResponse;
            }
        }
    } catch (e) {
        console.warn('Failed to parse cached languages', e);
    }

    try {
        // Fetch public repos
        const reposRes = await fetch(`https://api.github.com/users/${GITHUB_CONFIG.username}/repos?per_page=100&type=public`);
        if (!reposRes.ok) throw new Error('Failed to fetch repos for languages');
        const repos = await reposRes.json() as Array<{ language: string | null; size: number }>;

        // Aggregate by primary language
        const languagesMap: Record<string, number> = {};
        let totalReposWithLanguage = 0;

        repos.forEach(repo => {
            if (repo.language) {
                languagesMap[repo.language] = (languagesMap[repo.language] || 0) + 1;
                totalReposWithLanguage++;
            }
        });

        // Format languages and compute percentage
        const sortedLanguages = Object.entries(languagesMap)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 5)
            .map(([name, count]) => {
                const percentage = totalReposWithLanguage > 0 
                    ? Math.round((count / totalReposWithLanguage) * 100) 
                    : 0;
                return {
                    name,
                    bytes: count, // Count is used as a proxy for bytes
                    percentage
                };
            });

        const result: LanguagesResponse = {
            languages: sortedLanguages,
            totalBytes: totalReposWithLanguage,
            updatedAt: new Date().toISOString()
        };

        try {
            localStorage.setItem(cacheKey, JSON.stringify({
                data: result,
                timestamp: Date.now()
            }));
        } catch (e) {
            console.warn('Failed to save languages to cache', e);
        }

        return result;
    } catch (error) {
        console.error('GitHub Languages API Error:', error);

        // Return fallback data
        const fallback = {
            languages: [
                { name: 'TypeScript', bytes: 10, percentage: 40 },
                { name: 'JavaScript', bytes: 6, percentage: 24 },
                { name: 'Python', bytes: 4, percentage: 16 },
                { name: 'HTML', bytes: 3, percentage: 12 },
                { name: 'CSS', bytes: 2, percentage: 8 }
            ],
            totalBytes: 25,
            updatedAt: new Date().toISOString(),
            _note: 'Using fallback data'
        };

        return fallback;
    }
}