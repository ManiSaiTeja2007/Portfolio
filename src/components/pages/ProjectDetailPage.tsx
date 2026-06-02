// src/components/pages/ProjectDetailPage.tsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, Code, AlertCircle, Clock, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { getProjectById, getCategoryById } from '@/utils/projectsData';
import { ProjectCard } from '../common/Cards/ProjectCard';
import { useEffect, useState } from 'react';
import type { Project } from '@/types/project';
import { TechIcon } from '../common/Icon/Icon';

export const ProjectDetailPage = () => {
  const { id, category } = useParams<{ id: string; category: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | undefined>(undefined); // Changed from null to undefined
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        setError(null);

        // Try to get project by ID first
        let foundProject = getProjectById(id || '');

        // If not found by ID and we have category, try to find in category
        if (!foundProject && category) {
          const categoryData = getCategoryById(category);
          if (categoryData) {
            foundProject = categoryData.projects.find((p: Project) => p.id === id);
          }
        }

        if (!foundProject) {
          setError('Project not found');
          setProject(undefined); // Set to undefined instead of null
          return;
        }

        setProject(foundProject);
      } catch (err) {
        console.error('Error fetching project:', err);
        setError('Failed to load project details');
        setProject(undefined); // Set to undefined instead of null
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id, category]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-brand border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-600 dark:text-slate-400">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Project Not Found
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            {error || 'The project you\'re looking for doesn\'t exist or has been moved.'}
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-brand text-white rounded-lg font-semibold hover:bg-primary-brand/90 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to All Projects
          </Link>
        </div>
      </div>
    );
  }

  const projectCategory = getCategoryById(project.category);

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-primary-brand hover:text-primary-brand/80 transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
        </motion.div>

        {/* Project Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-primary-brand to-secondary-brand text-white rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div className="mb-6 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
                  {project.title}
                </h1>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-primary-brand px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
                  >
                    <FaGithub size={20} />
                    <span>GitHub</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-300 flex items-center gap-2"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            <p className="text-xl opacity-90 max-w-3xl">
              {project.description}
            </p>
          </div>
        </motion.header>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative aspect-video">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    if (project.fallbackImage) {
                      e.currentTarget.src = project.fallbackImage;
                    }
                    e.currentTarget.classList.add('bg-gradient-to-br', 'from-slate-200', 'to-slate-300', 'dark:from-slate-700', 'dark:to-slate-800');
                  }}
                />
              </div>
            </motion.div>

            {/* Project Details Sections */}
            <div className="space-y-8">
              {/* Problem & Solution */}
              {project.problem && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-card rounded-2xl p-8 shadow-lg"
                >
                  <h2 className="text-2xl font-bold text-primary-brand mb-6 flex items-center gap-2">
                    <AlertCircle size={24} />
                    Problem & Solution
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        The Challenge
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        My Solution
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {project.solution}
                      </p>
                    </div>

                    {project.impact && (
                      <div>
                        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
                          Impact & Results
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          {project.impact}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Technologies Used */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-card rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-primary-brand mb-6 flex items-center gap-2">
                  <Code size={24} />
                  Technologies Used
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {project.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-md transition-shadow"
                    >
                      <TechIcon
                        name={tech}
                        size={24}
                        color="primary"
                      />
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Challenges & Learnings */}
              {(project.challenges || project.learnings) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-card rounded-2xl p-8 shadow-lg"
                >
                  <h2 className="text-2xl font-bold text-primary-brand mb-6">
                    Key Insights
                  </h2>

                  <div className="grid md:grid-cols-2 gap-8">
                    {project.challenges && project.challenges.length > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                          <AlertCircle size={20} />
                          Challenges Faced
                        </h3>
                        <ul className="space-y-3">
                          {project.challenges.map((challenge, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                            >
                              <span className="text-primary-brand mt-1">•</span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.learnings && project.learnings.length > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                          <Star size={20} />
                          Key Learnings
                        </h3>
                        <ul className="space-y-3">
                          {project.learnings.map((learning, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                            >
                              <span className="text-primary-brand mt-1">•</span>
                              {learning}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-card rounded-2xl p-8 shadow-lg"
                >
                  <h2 className="text-2xl font-bold text-primary-brand mb-6">
                    Project Metrics
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {project.metrics.map((metric, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl text-center"
                      >
                        <div className="text-3xl font-bold text-primary-brand mb-2">
                          {metric.value}
                        </div>
                        <div className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
                          {metric.label}
                        </div>
                        {metric.improvement && (
                          <div className="text-sm text-green-600 dark:text-green-400">
                            {metric.improvement}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Project Info Card */}
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-primary-brand mb-4">
                Project Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-brand/10 rounded-lg">
                    <Calendar className="text-primary-brand" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Category</div>
                    <div className="font-semibold text-slate-800 dark:text-slate-200">
                      {projectCategory?.name || project.category}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-brand/10 rounded-lg">
                    <Code className="text-primary-brand" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Tech Stack</div>
                    <div className="font-semibold text-slate-800 dark:text-slate-200">
                      {project.technologies.length} technologies
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-brand/10 rounded-lg">
                    <Clock className="text-primary-brand" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Complexity</div>
                    <div className="font-semibold text-slate-800 dark:text-slate-200">
                      {project.complexity?.toUpperCase() || 'INTERMEDIATE'}
                    </div>
                  </div>
                </div>

                {project.featured && (
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-500/10 rounded-lg">
                      <Star className="text-yellow-500" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">Status</div>
                      <div className="font-semibold text-yellow-600 dark:text-yellow-400">
                        Featured Project
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Related Projects */}
            {projectCategory && projectCategory.projects.length > 1 && (
              <div className="bg-card rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-primary-brand mb-4">
                  More {projectCategory.name} Projects
                </h3>
                <div className="space-y-4">
                  {projectCategory.projects
                    .filter((p: Project) => p.id !== project.id)
                    .slice(0, 3)
                    .map((relatedProject: Project) => (
                      <ProjectCard
                        key={relatedProject.id}
                        project={relatedProject}
                        showDescription={false}
                        variant="compact"
                      />
                    ))}
                </div>
              </div>
            )}

            {/* Quick Links */}
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-primary-brand mb-4">
                Quick Links
              </h3>
              <div className="space-y-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <FaGithub size={20} className="text-slate-700 dark:text-slate-300" />
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      View Source Code
                    </span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <ExternalLink size={20} className="text-slate-700 dark:text-slate-300" />
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      Open Live Demo
                    </span>
                  </a>
                )}
                <Link
                  to="/projects"
                  className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <ArrowLeft size={20} className="text-slate-700 dark:text-slate-300" />
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    Browse All Projects
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
