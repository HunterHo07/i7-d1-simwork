# 🛠 SimWork - Development Specification

## 📋 Technical Architecture

### Core Technology Stack

#### Frontend Framework
- **Next.js**: v14.2.29 (App Router, React 18)
- **React**: v18.2.0 (Concurrent features, Suspense)
- **TypeScript**: Not used (per requirements)
- **ESLint**: Disabled (per requirements)

#### Styling & UI
- **Tailwind CSS**: v3.4.0 (Utility-first CSS framework)
- **PostCSS**: v8.4.0 (CSS processing)
- **Autoprefixer**: v10.4.0 (Browser compatibility)

#### 3D & Animation
- **Three.js**: v0.160.0 (3D graphics library)
- **@types/three**: v0.160.0 (TypeScript definitions)
- **GSAP**: v3.12.0 (Animation library)
- **@gsap/react**: v2.1.0 (React integration)
- **Framer Motion**: v10.16.0 (React animation library)

#### Icons & Assets
- **Lucide React**: v0.263.0 (Icon library)
- **Custom SVG**: Logo and brand elements

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   ├── page.js            # Homepage
│   ├── demo/              # Demo page
│   ├── pitch/             # Pitch deck page
│   ├── why-us/            # Why us page
│   ├── roadmap/           # Roadmap page
│   └── signup/            # Sign-up page
├── components/            # Reusable components
│   ├── ui/               # Basic UI components
│   ├── sections/         # Page sections
│   ├── 3d/              # Three.js components
│   └── animations/       # GSAP/Framer components
├── lib/                  # Utilities and helpers
│   ├── utils.js         # General utilities
│   ├── three-utils.js   # Three.js helpers
│   └── gsap-utils.js    # GSAP helpers
├── data/                # Static data and content
│   ├── quests.json      # Quest definitions
│   ├── users.json       # Sample user data
│   └── workstations.json # Workstation configs
└── public/              # Static assets
    ├── models/          # 3D models
    ├── textures/        # 3D textures
    ├── images/          # Images and graphics
    └── favicon.ico      # Custom favicon
```

## 🎨 Design System

### Color Palette (Futuristic AI Theme)
```css
/* Primary Colors */
--primary-900: #0a0a0f      /* Deep space black */
--primary-800: #1a1a2e      /* Dark navy */
--primary-700: #16213e      /* Midnight blue */
--primary-600: #0f3460      /* Deep blue */

/* Accent Colors */
--accent-cyan: #00f5ff      /* Electric cyan */
--accent-purple: #8b5cf6    /* Vibrant purple */
--accent-green: #10b981     /* Success green */
--accent-orange: #f59e0b    /* Warning orange */
--accent-red: #ef4444       /* Error red */

/* Neutral Colors */
--neutral-100: #f8fafc     /* Light gray */
--neutral-200: #e2e8f0     /* Medium gray */
--neutral-700: #374151     /* Dark gray */
--neutral-800: #1f2937     /* Darker gray */
--neutral-900: #111827     /* Almost black */
```

### Typography
```css
/* Font Families */
--font-primary: 'Inter', sans-serif;
--font-mono: 'JetBrains Mono', monospace;
--font-display: 'Space Grotesk', sans-serif;

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */
```

### Animation Presets
```javascript
// GSAP Animation Presets
const animations = {
  fadeInUp: {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
  },
  slideInLeft: {
    from: { opacity: 0, x: -100 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
  },
  scaleIn: {
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
  },
  glowPulse: {
    to: { 
      boxShadow: "0 0 20px rgba(0, 245, 255, 0.5)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    }
  }
};
```

## 🏗 Page Architecture

### Homepage Structure
1. **Hero Section**
   - 3D animated background
   - Interactive demo preview
   - Call-to-action buttons
   - Typing animation for tagline

2. **Problem/Solution Section**
   - Split-screen layout
   - Animated statistics
   - Hover effects on problem cards

3. **Feature Highlights**
   - Carousel with 3D cards
   - Interactive previews
   - Parallax scrolling

4. **MVP Preview**
   - Multi-layer demonstration
   - Real tool embeddings
   - Live simulation preview

5. **Testimonials**
   - Animated user cards
   - Star ratings animation
   - Quote transitions

6. **Pricing Section**
   - Equal-height cards
   - Hover animations
   - Feature comparison

### Demo Page Structure
1. **2.5D Office Environment**
   - Isometric view
   - Clickable workstations
   - Character movement
   - Ambient animations

2. **Workstation Interfaces**
   - Developer Station: Code editor
   - Designer Station: Canvas tool
   - PM Station: Project board
   - Data Station: Form interface
   - AI Station: Prompt interface

3. **Quest System**
   - Dynamic quest generation
   - Progress tracking
   - Reward animations
   - Leaderboard updates

## 🎮 Interactive Features

### FX Pool Implementation
Each section randomly selects from these effects:

1. **Parallax Scroll**: Multi-layer depth scrolling
2. **Matrix Effect**: Falling code animation
3. **3D Tilt**: Mouse-following 3D rotation
4. **Particle System**: Floating geometric shapes
5. **Typing Effect**: Character-by-character text reveal
6. **Morphing Shapes**: SVG path animations
7. **Ghost Cursors**: Multiple cursor trails
8. **Audio Visualizer**: Responsive visual elements
9. **Infinite Zoom**: Kaleidoscope effect
10. **Floating Tooltips**: Interactive help system

### Performance Optimization
```javascript
// Lazy loading for heavy components
const ThreeScene = lazy(() => import('./components/3d/ThreeScene'));
const ParticleSystem = lazy(() => import('./components/animations/ParticleSystem'));

// Intersection Observer for animations
const useInView = (threshold = 0.1) => {
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
};
```

## 🔧 Development Workflow

### Build Process
1. **Development**: `npm run dev` (Hot reload, fast refresh)
2. **Build**: `npm run build` (Production optimization)
3. **Start**: `npm start` (Production server)
4. **Lint**: Disabled per requirements

### Code Standards
- **Component Structure**: Functional components with hooks
- **File Naming**: kebab-case for files, PascalCase for components
- **CSS Classes**: Tailwind utility classes, custom CSS minimal
- **State Management**: React hooks, localStorage for persistence

### Asset Management
- **Images**: WebP format for better compression
- **3D Models**: GLTF/GLB format for Three.js
- **Icons**: SVG format for scalability
- **Fonts**: Self-hosted for performance

## 📱 Responsive Design

### Breakpoints
```css
/* Tailwind CSS Breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

### Mobile Optimizations
- Touch-friendly interactions (44px minimum touch targets)
- Reduced animation complexity on mobile
- Optimized 3D scenes for mobile GPUs
- Progressive enhancement for advanced features

## 🚀 Performance Targets

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Optimization Strategies
- Code splitting with dynamic imports
- Image optimization with Next.js Image component
- Three.js scene optimization (LOD, frustum culling)
- GSAP performance monitoring
- Bundle size analysis

## 🔒 Security Considerations

### Client-Side Security
- Input sanitization for user-generated content
- XSS prevention in dynamic content
- CSRF protection for form submissions
- Content Security Policy headers

### Data Privacy
- No personal data collection without consent
- localStorage encryption for sensitive data
- GDPR compliance for EU users
- Clear privacy policy and terms

## 📊 Analytics & Monitoring

### User Analytics
- Page views and user flows
- Feature usage tracking
- Performance monitoring
- Error tracking and reporting

### Business Metrics
- User engagement rates
- Quest completion rates
- Time spent in simulation
- Conversion funnel analysis

---

**Development Standards**: ES6+, React 18, Next.js 14  
**Browser Support**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+  
**Performance Budget**: < 3MB initial bundle, < 5s load time  
**Accessibility**: WCAG 2.1 AA compliance
