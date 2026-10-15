// src/components/common/Icon/CustomIcons.tsx
import React from 'react';

export type IconComponent = React.ComponentType<{ size?: number | string; className?: string; style?: React.CSSProperties }>;

// Custom Vector SVG for Gazebo Sim (Official physics simulator logo)
export const GazeboIcon: IconComponent = ({ size = 24, className = '' }) => (
  <svg
    viewBox="0 0 128 128"
    fill="currentColor"
    width={size}
    height={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m20.906 35.197 43.091 26.757 43.095-26.835-43.09-26.682-43.096 26.76M63.993.64a3.561 3.561 0 0 0-1.883.533L12.216 32.146a3.605 3.605 0 0 0-1.693 3.058v57.592c0 1.242.64 2.403 1.693 3.058l49.893 30.973c.024.013.044.027.068.041.027.016.055.038.082.055.058.03.12.041.178.068.059.03.118.072.177.096.093.04.192.065.287.096.056.018.107.039.164.054.107.03.218.049.327.068.047.006.09.02.137.027.156.022.307.028.464.028a3.481 3.481 0 0 0 .97-.137h.013a3.018 3.018 0 0 0 .355-.122c.035-.013.072-.026.109-.041.098-.044.19-.097.287-.15.052-.03.112-.053.163-.083l.096-.068 49.798-30.905a3.585 3.585 0 0 0 1.693-3.058l-.096-28.871a3.58 3.58 0 0 0-1.843-3.126 3.583 3.583 0 0 0-3.631.095l-21.24 13.228-16.368-10.143 41.485-25.827a3.58 3.58 0 0 0 1.693-3.044 3.596 3.596 0 0 0-1.707-3.044L65.89 1.173A3.607 3.607 0 0 0 63.993.64ZM17.568 41.565 53.7 64.007 17.567 86.435Zm49.934 26.646 16.38 10.143-21.868 13.61a3.556 3.556 0 0 0-1.68 3.044l.055 22.318-39.477-24.53 39.587-24.571 1.61.996a3.558 3.558 0 0 0 1.884.533 3.57 3.57 0 0 0 1.898-.533zm42.74 2.17.054 20.436-42.727 26.537-.068-20.366z" />
  </svg>
);

// Custom Vector SVG for FreeRTOS & Embedded C (Official Embedded C chip icon)
export const EmbeddedCIcon: IconComponent = ({ size = 24, className = '' }) => (
  <svg
    viewBox="0 0 128 128"
    fill="currentColor"
    width={size}
    height={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M25.6 0c-.9 0-1.6.9-1.6 2v11.2h-6.2c-2.1 0-3.7 1.3-3.7 3V24h-12c-1.1 0-2 .7-2 1.6v4.8c0 .9.9 1.6 2 1.6h12v10h-12c-1.1 0-2 .7-2 1.6v4.8c0 .9.9 1.6 2 1.6h12v10h-12c-1.1 0-2 .7-2 1.6v4.8c0 .9.9 1.6 2 1.6h12v10h-12c-1.1 0-2 .7-2 1.6v4.8c0 .9.9 1.6 2 1.6h12v10h-12c-1.1 0-2 .7-2 1.6v4.8c0 .9.9 1.6 2 1.6h12v10h-12c-1.1 0-2 .7-2 1.6v4.8c0 .9.9 1.6 2 1.6h12v7c0 1.7 1.7 3 3.8 3h6.3v12c0 1.1.7 2 1.6 2h4.8c.9 0 1.6-.9 1.6-2v-12h10v12c0 1.1.7 2 1.6 2h4.8c.9 0 1.6-.9 1.6-2v-12h10v12c0 1.1.7 2 1.6 2h4.8c.9 0 1.6-.9 1.6-2v-12h10v12c0 1.1.7 2 1.6 2h4.8c.9 0 1.6-.9 1.6-2v-12h10v12c0 1.1.7 2 1.6 2h4.8c.9 0 1.6-.9 1.6-2v-12h6.3c2.1 0 3.8-1.3 3.8-3v-7h12c1.1 0 2-.7 2-1.6v-4.8c0-.9-.9-1.6-2-1.6h-12V86h12c1.1 0 2-.7 2-1.6v-4.8c0-.9-.9-1.6-2-1.6h-12V68h12c1.1 0 2-.7 2-1.6v-4.8c0-.9-.9-1.6-2-1.6h-12V50h12c1.1 0 2-.7 2-1.6v-4.8c0-.9-.9-1.6-2-1.6h-12V32h12c1.1 0 2-.7 2-1.6v-4.8c0-.9-.9-1.6-2-1.6h-12v-7.8c0-1.7-1.7-3-3.7-3h-6.2V2c0-1.1-.7-2-1.6-2H98c-.9 0-1.6.9-1.6 2v11.2h-10V2c0-1.1-.7-2-1.6-2H80c-.9 0-1.6.9-1.6 2v11.2h-10V2c0-1.1-.7-2-1.6-2H62c-.9 0-1.6.9-1.6 2v11.2h-10V2c0-1.1-.7-2-1.6-2H44c-.9 0-1.6.9-1.6 2v11.2h-10V2c0-1.1-.7-2-1.6-2zM23 20a3 3 0 013 3 3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 013-3zm41 4.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5z" />
  </svg>
);

// Custom Vector SVG for STM32 Microcontroller
export const STM32Icon: IconComponent = ({ size = 24, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width={size}
    height={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3" y="3" width="18" height="18" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="6" cy="6" r="1" fill="currentColor" />
    <line x1="6" y1="1" x2="6" y2="3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="9" y1="1" x2="9" y2="3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="15" y1="1" x2="15" y2="3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="18" y1="1" x2="18" y2="3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="6" y1="21" x2="6" y2="23" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="9" y1="21" x2="9" y2="23" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="15" y1="21" x2="15" y2="23" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="18" y1="21" x2="18" y2="23" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="1" y1="6" x2="3" y2="6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="1" y1="9" x2="3" y2="9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="1" y1="15" x2="3" y2="15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="1" y1="18" x2="3" y2="18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="21" y1="6" x2="23" y2="6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="21" y1="9" x2="23" y2="9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="21" y1="15" x2="23" y2="15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="21" y1="18" x2="23" y2="18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <text x="12" y="14" fontSize="5.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle" fill="currentColor">
      STM32
    </text>
  </svg>
);

// Custom Vector SVG for Kinematics & Control (Articulated Robotic Arm)
export const KinematicsIcon: IconComponent = ({ size = 24, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={size}
    height={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="5" cy="19" r="2.5" />
    <circle cx="12" cy="11" r="2.5" />
    <circle cx="19" cy="5" r="2.5" />
    <line x1="7" y1="17.2" x2="10.2" y2="12.8" />
    <line x1="13.8" y1="9.2" x2="17.2" y2="6.8" />
    <path d="M18 2h4v4" />
    <path d="M2 22h6" />
  </svg>
);

// Custom Vector SVG for SLAM & Navigation (LiDAR/Radar Scanner)
export const SLAMIcon: IconComponent = ({ size = 24, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={size}
    height={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21 12h-8a1 1 0 1 0 -1 1v8a9 9 0 0 0 9 -9" />
    <path d="M16 9a5 5 0 1 0 -7 7" />
    <path d="M20.486 9a9 9 0 1 0 -11.482 11.495" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

// Custom Vector SVG for Playwright
export const PlaywrightIcon: IconComponent = ({ size = 24, className = '' }) => (
  <svg
    viewBox="0 0 128 128"
    fill="currentColor"
    width={size}
    height={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M43.662 70.898c-4.124 1.17-6.829 3.222-8.611 5.272 1.707-1.494 3.993-2.865 7.077-3.739 3.155-.894 5.846-.888 8.069-.459v-1.739c-1.897-.173-4.072-.035-6.536.664ZM34.863 56.28l-15.314 4.035s.279.394.796.92l12.984-3.421s-.184 2.371-1.782 4.492c3.022-2.287 3.316-6.025 3.316-6.025ZM109.372 41.336c-3.981.698-13.532 1.567-25.336-1.596-11.807-3.162-19.64-8.692-22.744-11.292-4.4-3.685-6.335-6.246-8.24-2.372-1.684 3.417-3.837 8.977-5.921 16.762-4.516 16.857-7.892 52.429 20.027 59.914 27.912 7.479 42.772-25.017 47.289-41.875 2.084-7.783 2.998-13.676 3.25-17.476.287-4.305-2.67-3.055-8.324-2.064Z" />
  </svg>
);
