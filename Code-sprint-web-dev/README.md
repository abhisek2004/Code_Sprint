# CodeSprint-WebDev-Challenge

A premium open-source project showcase and contributor management platform for SSoC'26. Master web development through real projects, build your portfolio, and join our developer community.

## Features

- **Landing Page**: Eye-catching hero section with smooth animations and typing effects
- **Project Showcase**: Dynamic project cards with search, filtering, and sorting capabilities
- **Mentors Directory**: Dedicated mentors page with profiles and social links
- **Content Pages**: 
  - About SSoC'26
  - Contribution Guidelines
  - About Admin
  - Disclaimer
- **Admin Dashboard**: Complete project and analytics management system
  - Dashboard with real-time metrics
  - Project management (CRUD operations)
  - Advanced analytics with charts
  - Settings and configuration
- **Design Features**:
  - Glassmorphism and neumorphic effects
  - Aurora and mesh gradients
  - Smooth animations with Framer Motion
  - Dark/Light mode toggle
  - Responsive design for all devices
  - Accessibility improvements (WCAG compliance)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: shadcn/ui
- **State Management**: React Hooks + Framer Motion

## Pages & Routes

### Public Pages
- `/` - Landing page with hero, features, and CTA
- `/showcase` - Project showcase with search and filters
- `/about-ssoc` - About SSoC'26 information
- `/mentors` - Mentors directory
- `/contribute` - Contribution guidelines
- `/about` - About page with admin info
- `/disclaimer` - Platform disclaimer

### Admin Pages
- `/admin` - Main dashboard with statistics
- `/admin/projects` - Project management
- `/admin/analytics` - Analytics and insights
- `/admin/settings` - Configuration and settings

## Design System

### Color Palette
- **Primary**: Purple-based (oklch(0.55 0.24 280))
- **Secondary**: Pink-based (oklch(0.6 0.2 275))
- **Background**: Dark blue-tinted (oklch(0.12 0.01 250))
- **Text**: Light foreground (oklch(0.95 0.01 250))

### Typography
- **Headings**: Geist Sans
- **Body**: Geist Sans
- **Code**: Geist Mono

### Visual Effects
- Glassmorphism with backdrop blur
- Smooth scroll behavior
- Float and glow animations
- Gradient text effects
- Responsive hover states

## Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open in browser
http://localhost:3000
```

## Development

### File Structure
```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── admin/
│   ├── showcase/
│   ├── mentors/
│   └── [other pages]
├── components/
│   ├── navigation.tsx
│   ├── hero.tsx
│   ├── footer.tsx
│   ├── admin-sidebar.tsx
│   ├── theme-provider.tsx
│   └── [other components]
└── public/
    └── robots.txt
```

### Key Components

- **Navigation**: Fixed header with theme switcher
- **Hero**: Animated landing section with typing effect
- **Project Card**: Showcase cards with hover effects
- **Admin Sidebar**: Navigation for admin panel
- **Theme Provider**: Dark mode support

## SEO & Performance

- Sitemap generation (`/sitemap.ts`)
- Robots.txt for search engines
- Meta tags and Open Graph
- Responsive viewport settings
- Accessibility features (WCAG)
- Smooth scrolling behavior

## Dark Mode

Theme preferences are automatically saved to localStorage. Users can toggle between light and dark modes using the theme switcher in the navigation. The system respects OS-level color scheme preferences as default.

## Responsive Design

All pages are fully responsive:
- Mobile: 375px and up
- Tablet: 768px (md breakpoint)
- Desktop: 1024px and up (lg breakpoint)

## Accessibility

- Focus states for all interactive elements
- Color contrast ratios meeting WCAG AA standards
- Semantic HTML structure
- ARIA labels where appropriate
- Reduced motion support
- Screen reader friendly

## Future Enhancements

- User authentication system
- Real database integration (MongoDB/PostgreSQL)
- GitHub API integration for live project stats
- Email notifications
- Comments and reviews system
- Advanced filtering options
- PWA capabilities

## License

Open Source - SSoC'26 Project

## Contributing

See `/contribute` page for contribution guidelines.

## Support

For issues or questions, see `/about` and `/disclaimer` pages.
