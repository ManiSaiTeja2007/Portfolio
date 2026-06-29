// src/components/sections/Stats/Stats.tsx
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { 
  Star, 
  Code, 
  Users,
  GitFork, 
  Calendar, 
  Award, 
  Zap,
  ExternalLink 
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useEffect, useReducer, useCallback, memo } from 'react';
import { statsService } from '@/services/statsService';

// Types
interface GitHubStats {
  publicRepos: number;
  totalStars: number;
  followers: number;
  accountAge: number;
  updatedAt: string;
  _note?: string;
}

interface Language {
  name: string;
  percentage: number;
}

interface Streak {
  currentStreak: number;
  longestStreak: number;
  totalContributionsThisYear: number;
  updatedAt: string;
  _note?: string;
}

interface StatsState {
  stats: GitHubStats | null;
  languages: Language[];
  streak: Streak | null;
  loading: boolean;
  error: string | null;
}

type StatsAction =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: { stats: GitHubStats; languages: Language[]; streak: Streak } }
  | { type: 'FETCH_ERROR'; payload: string };

const initialState: StatsState = {
  stats: null,
  languages: [],
  streak: null,
  loading: true,
  error: null
};

function statsReducer(state: StatsState, action: StatsAction): StatsState {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        stats: action.payload.stats,
        languages: action.payload.languages,
        streak: action.payload.streak,
        loading: false,
        error: null
      };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

// Digital Stat Card (styled as a hardware monitor)
interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  subValue?: string;
  glowColor: string; // e.g. "bg-emerald-500", "bg-indigo-500"
  loading: boolean;
}

const StatCard = memo(({ icon, label, value, subValue, glowColor, loading }: StatCardProps) => (
  <m.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative bg-white dark:bg-slate-950/60 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-lg hover:border-primary-500/30 dark:hover:border-slate-700 hover:shadow-xl transition-all duration-300 group overflow-hidden"
  >
    {/* Pulsing Active LED Indicator */}
    <div className="absolute top-4 right-4 flex items-center gap-1.5">
      <span className={`w-2.5 h-2.5 rounded-full ${glowColor} opacity-75 animate-pulse`} />
      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">LIVE</span>
    </div>

    <div className="flex items-center gap-3.5 mb-4">
      <div className="p-3 bg-slate-100 dark:bg-slate-800/80 rounded-xl text-slate-500 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </h3>
    </div>
    
    {loading ? (
      <div className="space-y-2">
        <div className="h-9 w-24 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
        <div className="h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
      </div>
    ) : (
      <div className="space-y-1">
        <div className="text-3xl font-poppins font-black text-slate-900 dark:text-white tracking-tight">
          {value}
        </div>
        {subValue && (
          <div className="text-xs font-mono text-slate-500">
            {subValue}
          </div>
        )}
      </div>
    )}
  </m.div>
));

StatCard.displayName = 'StatCard';

// Cockpit Progress Bar (styled as a LED bar graph)
interface LanguageBarProps {
  language: Language;
  index: number;
}

const LanguageBar = memo(({ language, index }: LanguageBarProps) => {
  // Cycle gradients based on index
  const barColors = [
    'from-indigo-500 to-blue-500 shadow-glow-primary/20',
    'from-teal-500 to-emerald-500 shadow-glow-secondary/20',
    'from-purple-500 to-pink-500 shadow-glow-accent/20',
    'from-amber-500 to-orange-500 shadow-glow-accent/10',
    'from-blue-500 to-cyan-500 shadow-glow-primary/10'
  ];
  
  const barGradient = barColors[index % barColors.length];

  return (
    <div className="space-y-2 p-3 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-slate-800/60">
      <div className="flex justify-between items-center text-xs font-mono">
        <span className="font-bold text-slate-700 dark:text-slate-300">
          [{language.name.toUpperCase()}]
        </span>
        <span className="text-slate-400 font-semibold">
          {language.percentage}%
        </span>
      </div>
      <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-900 p-[1px]">
        <m.div
          initial={{ width: 0 }}
          whileInView={{ width: `${language.percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${barGradient} rounded-full`}
        />
      </div>
    </div>
  );
});

LanguageBar.displayName = 'LanguageBar';

// Platform Link
interface PlatformLinkProps {
  name: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  url: string;
}

const PlatformLink = memo(({ name, value, icon, color, url }: PlatformLinkProps) => (
  <m.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3 }}
    className={`flex items-center gap-3.5 px-6 py-4 rounded-2xl ${color} transition-all duration-300 border border-transparent shadow-sm hover:shadow-md font-mono text-sm`}
  >
    <div className="text-current">
      {icon}
    </div>
    <div>
      <div className="font-bold text-slate-900 dark:text-white">{name}</div>
      <div className="text-xs opacity-85 mt-0.5">{value}</div>
    </div>
    <ExternalLink size={14} className="ml-auto opacity-70" />
  </m.a>
));

PlatformLink.displayName = 'PlatformLink';

export const Stats = () => {
  const [state, dispatch] = useReducer(statsReducer, initialState);

  const fetchGitHubData = useCallback(async () => {
    try {
      dispatch({ type: 'FETCH_START' });
      
      const [statsData, langsData, streakData] = await Promise.all([
        statsService.getStats(),
        statsService.getLanguages(),
        statsService.getStreak()
      ]);

      dispatch({
        type: 'FETCH_SUCCESS',
        payload: {
          stats: statsData,
          languages: langsData.languages || [],
          streak: streakData
        }
      });
    } catch {
      dispatch({ type: 'FETCH_ERROR', payload: 'Failed to load GitHub statistics' });
    }
  }, []);

  useEffect(() => {
    fetchGitHubData();
  }, [fetchGitHubData]);

  const mainStats = [
    {
      id: 'repos',
      icon: <FaGithub size={18} />,
      label: 'Repositories',
      value: state.stats?.publicRepos || 25,
      subValue: 'Indexed public repos',
      glowColor: 'bg-indigo-500'
    },
    {
      id: 'stars',
      icon: <Star size={18} />,
      label: 'GitHub Stars',
      value: state.stats?.totalStars || 20,
      subValue: 'Across public repos',
      glowColor: 'bg-amber-500'
    },
    {
      id: 'followers',
      icon: <Users size={18} />,
      label: 'Followers',
      value: state.stats?.followers || 10,
      subValue: 'Developer network',
      glowColor: 'bg-blue-500'
    },
    {
      id: 'streak',
      icon: <Zap size={18} />,
      label: 'Active Streak',
      value: state.streak?.currentStreak ? `${state.streak.currentStreak} Days` : 'Active',
      subValue: state.streak?.longestStreak ? `Max record: ${state.streak.longestStreak} days` : 'Daily updates',
      glowColor: 'bg-red-500'
    },
    {
      id: 'contributions',
      icon: <Calendar size={18} />,
      label: 'Contributions',
      value: state.streak?.totalContributionsThisYear || 150,
      subValue: 'Aggregated commits',
      glowColor: 'bg-emerald-500'
    },
    {
      id: 'languages_count',
      icon: <GitFork size={18} />,
      label: 'Tech Stack Count',
      value: state.languages.length || 5,
      subValue: 'Primary technologies',
      glowColor: 'bg-purple-500'
    }
  ];

  const platforms = [
    {
      id: 'leetcode',
      name: 'LeetCode',
      value: '150+ problems solved',
      icon: <Code size={18} />,
      color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 hover:bg-orange-500/20 border-orange-500/20',
      url: 'https://leetcode.com/u/manisaiteja2007/'
    },
    {
      id: 'codechef',
      name: 'CodeChef',
      value: '25+ contests',
      icon: <Award size={18} />,
      color: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 hover:bg-rose-500/20 border-rose-500/20',
      url: 'https://www.codechef.com/users/manisaiteja2007'
    }
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section id="stats" className="py-24 bg-white dark:bg-slate-900/60 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <m.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
              GitHub Live Console
            </span>
            <h2 className="text-4xl font-poppins font-bold text-slate-900 dark:text-white">
              System Telemetry
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4 font-sans">
              Real-time hardware & software activity dashboard logs from my public endpoints.
            </p>
          </m.div>

          {state.error && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-center text-amber-600 dark:text-amber-400 text-sm font-mono"
            >
              ⚠️ {state.error}. Displaying system default profile cache.
            </m.div>
          )}

          {/* Cockpit Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {mainStats.map((stat) => (
              <StatCard
                key={stat.id}
                icon={stat.icon}
                label={stat.label}
                value={stat.value}
                subValue={stat.subValue}
                glowColor={stat.glowColor}
                loading={state.loading}
              />
            ))}
          </div>

          {/* Languages Dashboard Display */}
          {state.languages.length > 0 && (
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 p-8 bg-white dark:bg-slate-950/60 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden"
            >
              {/* Header decoration */}
              <div className="flex items-center gap-2 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
                <Code size={18} className="text-primary-brand" />
                <h3 className="text-sm font-mono font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest">
                  LANGUAGE_BYTES_INDEX
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {state.languages.slice(0, 4).map((lang, index) => (
                  <LanguageBar key={lang.name} language={lang} index={index} />
                ))}
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/60">
                <span>TELEMETRY_REFRESH: SUCCESS</span>
                <span>SYNC_TIME: {new Date(state.stats?.updatedAt || '').toLocaleTimeString()}</span>
              </div>
            </m.div>
          )}

          {/* Coding Practice Platforms */}
          <m.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-12 border-t border-slate-200 dark:border-slate-800/80"
          >
            <h3 className="text-xl font-poppins font-bold text-slate-900 dark:text-white mb-8 text-center">
              Algorithmic Core Exercises
            </h3>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
              {platforms.map((platform) => (
                <PlatformLink
                  key={platform.id}
                  name={platform.name}
                  value={platform.value}
                  icon={platform.icon}
                  color={platform.color}
                  url={platform.url}
                />
              ))}
            </div>

            {/* GitHub Profile CTA */}
            <div className="mt-10 text-center">
              <m.a
                href="https://github.com/manisaiteja2007"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-2xl font-semibold shadow-lg transition-all duration-300 border border-slate-700/60"
              >
                <FaGithub size={20} />
                View Full GitHub Profile
                <ExternalLink size={14} className="opacity-60" />
              </m.a>
            </div>
          </m.div>

        </div>
      </section>
    </LazyMotion>
  );
};