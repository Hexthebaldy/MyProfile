# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DoJournal is a minimalist personal blog and portfolio built with React, TypeScript, and Vite. The project features a unique horizontal scroll navigation system with a "Gentle Cream" aesthetic focusing on typography, whitespace, and smooth interactions using Framer Motion.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production (runs TypeScript compiler then Vite build)
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Routing Structure

The app uses React Router with two main routes:
- `/` - MainLayout component containing the three horizontal sections
- `/post/:id` - Individual post detail page

### Horizontal Scroll Layout

The core navigation pattern is implemented in `src/components/MainLayout.tsx`. It creates a horizontal scrolling container with three snap-aligned sections:

1. **Section 1 (Home)**: Contains hero, recent posts grid, and a nested vertical scroll with two viewports (hero + library)
2. **Section 2 (About)**: Vertical scrolling section
3. **Section 3 (Projects)**: Vertical scrolling section

The MainLayout uses an IntersectionObserver to track which section is visible and update the active navbar state accordingly.

### Navigation Flow

- Navbar (`src/components/Navbar.tsx`) sits fixed at the top and reflects the active section
- Clicking a navbar link scrolls to the corresponding section using smooth scroll behavior
- Posts can link back to sections using `location.state.target` for cross-page navigation
- The Post page (`src/pages/Post.tsx`) can navigate back to specific sections with smooth scrolling

### Home Page Architecture

`src/pages/Home.tsx` implements a nested scroll:
- Outer container: Vertical scroll with snap points
- Viewport 1: Hero with avatar + 3 recent posts
- Viewport 2: Library section with sidebar filters and post grid

The Library section uses:
- Horizontal scrolling tag filter on mobile (chip style)
- Vertical sidebar on desktop (200px fixed width)
- Responsive grid: 1 column fluid on mobile, 2 fixed 300px columns on desktop

### Modal System

Card-to-modal transitions use Framer Motion's `layoutId` for shared element transitions:
- Cards in both "recent posts" and "library grid" can expand into modals
- Each card has a unique `layoutId` (e.g., `recent-${post.id}` or `library-${post.id}`)
- The Modal component wraps content with motion.div using the same layoutId

### Data Structure

Blog posts are defined in `src/data/posts.ts` with the interface:
```typescript
interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML string rendered with dangerouslySetInnerHTML
  date: string;
  readTime: string;
  tags: string[];
}
```

### Styling System

The project uses CSS variables defined in `src/styles/variables.css`:
- Color system: Gentle cream theme (`--color-bg-primary`, `--color-text-primary`, etc.)
- Typography: Playfair Display for headings, Inter for body, Dancing Script for signature
- Spacing scale: `--space-1` through `--space-24`
- Animation: Custom transitions and shadows

Global styles in `src/index.css` include:
- Mobile-first responsive breakpoint at 768px
- `.glass-panel` utility class for glassmorphism effects
- Custom scrollbar styling (auto-hiding on hover)
- Responsive `.library-container`, `.library-grid`, and `.sidebar` classes

## Key Patterns

- **Scroll Snap**: Used extensively for horizontal main sections and vertical Home viewports
- **Framer Motion**: All animations use framer-motion for consistency (fade-ins, hover effects, layout transitions)
- **Responsive Design**: Mobile-first approach with 768px breakpoint for desktop layouts
- **CSS Variables**: All design tokens centralized in variables.css for easy theming

## Mobile vs Desktop Differences

| Feature | Mobile | Desktop |
|---------|--------|---------|
| Navbar | Stacked vertically | Horizontal row |
| Library sidebar | Horizontal scroll chips | Vertical list with border |
| Library grid | 1 column, full width | 2 columns, 300px fixed width |
| Typography | Smaller (text-xl → text-3xl) | Larger (text-3xl → text-4xl) |

## Important Notes

- The root html/body has `overflow: hidden` - MainLayout controls all scrolling
- Post content is rendered as HTML (security consideration if making editable)
- Scroll behavior relies on CSS scroll-snap-type and smooth scroll-behavior
- IntersectionObserver threshold is 0.5 (50% visibility) for section activation
