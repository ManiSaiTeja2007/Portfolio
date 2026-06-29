// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from '@/components/common/Error/ErrorBoundary';
import { Header } from '@/components/common/Header/Header';
import { Footer } from '@/components/common/Footer/Footer';
import { ScrollToTop } from '@/components/common/ScrollToTop';
import { ThemeProvider } from '@/contexts/ThemeProvider';
import { PerformanceProvider } from '@/components/providers/PerformanceProvider';
import '@/styles/globals.css';
import 'aos/dist/aos.css';
import { useEffect, Suspense, lazy } from 'react';
import AOS from 'aos';

// Lazy load pages with default export
const HomePage = lazy(() => import('@/components/pages/HomePage').then(m => ({ default: m.HomePage })));
const AllProjectsPage = lazy(() => import('@/components/pages/AllProjectsPage').then(m => ({ default: m.AllProjectsPage })));
const ProjectDetailPage = lazy(() => import('@/components/pages/ProjectDetailPage').then(m => ({ default: m.ProjectDetailPage })));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
      <p className="text-slate-600 dark:text-slate-400">Loading portfolio...</p>
    </div>
  </div>
);

function AppContent() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
      disable: window.innerWidth < 768,
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <Header />
        <main className="">
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<AllProjectsPage />} />
                <Route path="/projects/:category/:id" element={<ProjectDetailPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

function App() {
  return (
    <PerformanceProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </PerformanceProvider>
  );
}

export default App;
