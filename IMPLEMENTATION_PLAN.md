# Implementation Plan: Personal Portfolio Website

Based on PRD v1.1 - Portfolio Website for Jonathan "Yoni" Schneider

## Overview

Build a modern, premium portfolio website using Next.js (App Router) hosted on Vercel that showcases deployed projects with a focus on speed, clarity, and professionalism.

---

## Phase 1: Project Setup & Foundation

### 1.1 Initialize Next.js Project
- **Actions:**
  - Create Next.js 14+ project with App Router
  - Configure TypeScript
  - Set up ESLint and Prettier
  - Initialize Git repository
  - Configure Vercel deployment settings

### 1.2 Core Configuration
- **Actions:**
  - Set up project structure (`/app`, `/components`, `/lib`, `/public`)
  - Configure `next.config.js` for image optimization
  - Set up environment variables (if needed)
  - Configure `tailwind.config.js` for styling
  - Set up dark mode configuration (Next.js theme provider)

### 1.3 Design System Setup
- **Actions:**
  - Install Tailwind CSS
  - Configure color palette (light/dark modes)
  - Set up typography system (large, clean, modern)
  - Define spacing system
  - Create base component styles
  - Set up motion library (Framer Motion or similar)

**Deliverables:**
- ✅ Next.js project initialized
- ✅ TypeScript configured
- ✅ Tailwind CSS set up with dark mode
- ✅ Basic project structure

---

## Phase 2: Data Layer

### 2.1 Project Data Model
- **Actions:**
  - Create `/data/projects.ts` or `/data/projects.json`
  - Define TypeScript interface for Project:
    ```typescript
    interface Project {
      title: string
      description: string
      tags: string[]
      links: {
        live?: string
        github?: string
        deck?: string
        writeup?: string
      }
      featured: boolean
      image: string
    }
    ```
  - Add initial 3 featured projects:
    - AI Journaling App
    - Task / Productivity App
    - Fixed Income Portfolio / Analytics Site
  - Add additional projects to "All Projects" section

### 2.2 Data Utilities
- **Actions:**
  - Create `/lib/projects.ts` utility functions:
    - `getFeaturedProjects()` - returns featured projects
    - `getAllProjects()` - returns all projects
    - `getProjectBySlug()` - for detail views

**Deliverables:**
- ✅ Project data structure defined
- ✅ Projects data file with all initial projects
- ✅ Utility functions for data access

---

## Phase 3: Core Components

### 3.1 Layout Components
- **Actions:**
  - Create `Header` component (minimal, if needed)
  - Create `Footer` component (LinkedIn, GitHub, Email, Resume links)
  - Create `Layout` wrapper component
  - Create theme toggle component (dark mode)

### 3.2 Hero Section
- **Actions:**
  - Build `Hero` component with:
    - Name display
    - 1-line positioning statement
    - CTA buttons: "View Projects", "Resume"
    - Subtle animations (fade-in)
  - Style with large typography, clean spacing

### 3.3 Project Card Component
- **Actions:**
  - Create `ProjectCard` component (reusable):
    - Screenshot/thumbnail image
    - Project title
    - 1-sentence description
    - Tech stack tags
    - Action buttons (Live Demo, GitHub, etc.)
    - "Featured" badge (conditional)
    - Hover states with subtle motion
  - Create two variants:
    - Large card (for featured projects)
    - Small card (for all projects grid)

### 3.4 Project Sections
- **Actions:**
  - Create `FeaturedProjects` section component
  - Create `AllProjectsGrid` section component
  - Create `FocusAreas` section component

### 3.5 Project Detail View
- **Actions:**
  - Create `ProjectModal` component OR
  - Create `/projects/[slug]` page
  - Include:
    - Overview
    - Problem statement
    - Features/built items
    - Tech stack
    - Outcome/learnings
    - Links
  - Style with clear bullets, no long essays

**Deliverables:**
- ✅ All core components built
- ✅ Components are reusable and styled
- ✅ Dark mode support integrated

---

## Phase 4: Page Implementation

### 4.1 Homepage (`/app/page.tsx`)
- **Actions:**
  - Implement homepage layout
  - Add Hero section
  - Add Featured Projects section (3 large cards)
  - Add All Projects Grid section
  - Add Focus Areas / Capabilities section
  - Integrate Footer
  - Ensure proper spacing and hierarchy

### 4.2 About Page (Optional)
- **Actions:**
  - Create `/app/about/page.tsx` if needed
  - Keep it short and focused
  - Link from navigation or footer

### 4.3 Projects Page (Optional - if >5 projects)
- **Actions:**
  - Create `/app/projects/page.tsx` if needed
  - Show all projects in grid layout
  - Add filtering/sorting if beneficial

**Deliverables:**
- ✅ Homepage fully implemented
- ✅ All sections integrated
- ✅ Navigation working

---

## Phase 5: Styling & Design Polish

### 5.1 Visual Design
- **Actions:**
  - Apply design system consistently
  - Ensure large, clean typography
  - Implement proper spacing hierarchy
  - Style cards with premium feel
  - Test color contrast (accessibility)

### 5.2 Dark Mode
- **Actions:**
  - Ensure dark mode works across all components
  - Test color contrast in both modes
  - Add smooth transitions between themes
  - Set default to dark (or add toggle)

### 5.3 Motion & Interactions
- **Actions:**
  - Add subtle hover states to cards
  - Implement fade-in animations (on scroll)
  - Add smooth transitions
  - Ensure motion supports clarity (no gimmicks)

### 5.4 Responsive Design
- **Actions:**
  - Test and adjust for mobile (< 640px)
  - Test and adjust for tablet (640px - 1024px)
  - Test and adjust for desktop (> 1024px)
  - Ensure all interactions work on touch devices

**Deliverables:**
- ✅ Design polished and consistent
- ✅ Dark mode fully functional
- ✅ Responsive across all devices
- ✅ Smooth animations and interactions

---

## Phase 6: Performance & Optimization

### 6.1 Static Generation
- **Actions:**
  - Configure static generation for all pages
  - Ensure images are optimized (Next.js Image component)
  - Implement proper image sizes and formats
  - Add loading="lazy" for below-fold images

### 6.2 Performance Optimization
- **Actions:**
  - Run Lighthouse audit
  - Optimize images (WebP format, proper sizing)
  - Minimize bundle size
  - Implement code splitting if needed
  - Add metadata for SEO basics

### 6.3 Testing
- **Actions:**
  - Test all links (live demos, GitHub, Resume, etc.)
  - Test navigation flows
  - Test in multiple browsers
  - Test Lighthouse score (target: 90+)

**Deliverables:**
- ✅ Site loads fast (< 2s initial load)
- ✅ Lighthouse score 90+
- ✅ All links functional
- ✅ Images optimized

---

## Phase 7: Content & Final Touches

### 7.1 Content Review
- **Actions:**
  - Review all project descriptions
  - Ensure positioning statement is clear
  - Verify all links are correct
  - Add project screenshots/images
  - Review focus areas text

### 7.2 External Links
- **Actions:**
  - Verify all Vercel demo links work
  - Add GitHub links (if applicable)
  - Add Resume link
  - Add LinkedIn, Email links
  - Ensure all external links open in new tabs

### 7.3 Final Polish
- **Actions:**
  - Proofread all text
  - Check for typos
  - Ensure consistent tone
  - Test user journey (≤30 seconds flow)

**Deliverables:**
- ✅ All content accurate and polished
- ✅ All links verified and working
- ✅ User journey tested

---

## Phase 8: Deployment

### 8.1 Vercel Setup
- **Actions:**
  - Connect GitHub repository to Vercel
  - Configure build settings
  - Set up environment variables (if needed)
  - Configure custom domain (if applicable)

### 8.2 Pre-Launch Checklist
- **Actions:**
  - Final Lighthouse audit on production
  - Test all functionality on production URL
  - Verify dark mode works
  - Test on multiple devices/browsers
  - Check console for errors

### 8.3 Launch
- **Actions:**
  - Deploy to production
  - Verify site is live
  - Share URL for review

**Deliverables:**
- ✅ Site deployed to Vercel
- ✅ Production URL verified
- ✅ All functionality working

---

## Technical Stack

### Core
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** Vercel

### Additional Libraries (Recommendations)
- **Motion:** Framer Motion or React Spring
- **Icons:** Lucide React or Heroicons
- **Dark Mode:** next-themes

### Project Structure
```
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (homepage)
│   ├── about/
│   │   └── page.tsx (optional)
│   └── projects/
│       └── page.tsx (optional)
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── AllProjectsGrid.tsx
│   │   └── FocusAreas.tsx
│   ├── ui/
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectModal.tsx (or detail page)
│   │   └── ThemeToggle.tsx
│   └── ...
├── lib/
│   ├── projects.ts (data utilities)
│   └── utils.ts
├── data/
│   └── projects.ts (or .json)
├── public/
│   ├── images/
│   │   └── (project screenshots)
│   └── ...
└── ...
```

---

## Success Criteria Checklist

- [ ] Recruiter can open a live app within 20 seconds
- [ ] Site feels "real" and not academic
- [ ] Projects feel cohesive, not random
- [ ] Site elevates resume rather than repeating it
- [ ] Lighthouse score 90+
- [ ] Dark mode functional
- [ ] All links work correctly
- [ ] Responsive on all devices
- [ ] Easy to add new projects (<5 minutes)

---

## Estimated Timeline

- **Phase 1-2:** 2-3 hours (Setup + Data)
- **Phase 3:** 4-6 hours (Components)
- **Phase 4:** 2-3 hours (Pages)
- **Phase 5:** 3-4 hours (Styling)
- **Phase 6:** 2-3 hours (Performance)
- **Phase 7:** 1-2 hours (Content)
- **Phase 8:** 1 hour (Deployment)

**Total Estimated Time:** 15-22 hours

---

## Next Steps

1. Review and approve this plan
2. Start with Phase 1: Project Setup
3. Iterate through phases sequentially
4. Test frequently throughout development
5. Deploy when all phases complete

---

## Notes

- Focus on quality over speed
- Keep it minimal and intentional
- Test the user journey frequently
- Make it easy to add projects later (important for maintainability)

