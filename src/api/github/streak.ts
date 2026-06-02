// src/api/github/streak.ts
import { GITHUB_CONFIG } from '../../config/github';

export interface StreakResponse {
    username: string;
    currentStreak: number;
    longestStreak: number;
    totalContributionsThisYear: number;
    updatedAt: string;
    _note?: string;
}

export async function fetchGitHubStreak(): Promise<StreakResponse> {
    const cacheKey = 'github-streak';
    const cacheDuration = 24 * 60 * 60 * 1000; // 24 hours

    try {
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
            const { data, timestamp } = JSON.parse(cached);
            if (Date.now() - timestamp < cacheDuration) {
                return data as StreakResponse;
            }
        }
    } catch (e) {
        console.warn('Failed to parse cached streak', e);
    }

    try {
        // Fetch events to calculate streak
        const eventsRes = await fetch(`https://api.github.com/users/${GITHUB_CONFIG.username}/events/public?per_page=100`);
        if (!eventsRes.ok) throw new Error('Failed to fetch events');
        const events = await eventsRes.json() as Array<{ created_at: string }>;

        // Process events to calculate streak
        const dates = events.map(e => new Date(e.created_at).toDateString());
        const uniqueDates = [...new Set(dates)].sort();

        let longestStreak = 0;
        let currentCount = 0;
        let lastDate: Date | null = null;

        // Sort dates
        const sortedDates = uniqueDates.map(d => new Date(d)).sort((a, b) => a.getTime() - b.getTime());

        for (const date of sortedDates) {
            if (!lastDate) {
                currentCount = 1;
            } else {
                const diffDays = Math.floor((date.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
                if (diffDays === 1) {
                    currentCount++;
                } else {
                    currentCount = 1;
                }
            }

            longestStreak = Math.max(longestStreak, currentCount);
            lastDate = date;
        }

        // Calculate current streak
        const today = new Date();
        let currentStreak = 0;
        for (let i = 0; i < 30; i++) {
            const checkDate = new Date(today);
            checkDate.setDate(today.getDate() - i);
            const dateStr = checkDate.toDateString();

            if (uniqueDates.includes(dateStr)) {
                currentStreak++;
            } else {
                break;
            }
        }

        const result = {
            username: GITHUB_CONFIG.username,
            currentStreak,
            longestStreak,
            totalContributionsThisYear: events.length,
            updatedAt: new Date().toISOString()
        };

        try {
            localStorage.setItem(cacheKey, JSON.stringify({
                data: result,
                timestamp: Date.now()
            }));
        } catch (e) {
            console.warn('Failed to save streak to cache', e);
        }

        return result;
    } catch (error) {
        console.error('GitHub Streak API Error:', error);

        // Return fallback data
        return {
            username: GITHUB_CONFIG.username,
            currentStreak: 5,
            longestStreak: 15,
            totalContributionsThisYear: 150,
            updatedAt: new Date().toISOString(),
            _note: 'Using fallback data'
        };
    }
}