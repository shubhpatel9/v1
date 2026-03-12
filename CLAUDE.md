# CLAUDE.md — AI Assistant Guide for v1 Portfolio

## Project Overview

This is **Shubh Patel's personal portfolio website** — a static single-page React application built with Create React App (CRA). It showcases experience, projects, and a resume via an animated, responsive sidebar layout.

- **Type**: Static frontend SPA (no backend, no database, no API calls)
- **Framework**: React 17 with React Router v5
- **UI Library**: Material-UI v4 (`@material-ui/core`)
- **Bootstrapped with**: Create React App 4

---

## Repository Structure

```
v1/
├── public/               # Static assets served as-is
│   ├── index.html        # HTML shell (DO NOT add scripts here; use CRA conventions)
│   ├── manifest.json     # PWA manifest
│   └── favicon.ico
├── src/
│   ├── index.js          # React root mount point
│   ├── App.js            # Top-level router with <Route> definitions
│   ├── App.css           # Global CSS variables and base styles
│   ├── index.css         # Body/reset styles
│   ├── data.js           # *** SINGLE SOURCE OF TRUTH for all site content ***
│   ├── res/              # Image assets (photos, logos)
│   └── Components/       # Feature components, each in its own folder
│       ├── Home/         # Layout shell: renders Left + Right sidebars
│       ├── Left/         # Animated sidebar: nav, social links, profile pic
│       ├── Right/        # Scrollable main content area
│       ├── Welcome/      # Hero section with CTA buttons
│       ├── About/        # Bio with collapsible "See More"
│       ├── Timeline/     # Work history (react-vertical-timeline-component)
│       ├── Projects/     # Project cards grid
│       ├── Resume/       # Resume section (links to Google Drive PDF)
│       ├── Footer/       # Site footer
│       ├── SectionTitle/ # Reusable section header component
│       └── 404/          # Placeholder 404 page (currently unused)
├── package.json
└── README.md             # Standard CRA README
```

---

## The Central Data File: `src/data.js`

> **Most content changes should be made exclusively in `src/data.js`.**

This file is the single configuration hub. It exports one large object with these keys:

| Key | Purpose |
|-----|---------|
| `navToggle` | Hamburger button styles |
| `nav` | Sidebar navigation config |
| `navLinks` | Array of nav link labels and scroll targets |
| `welcome` | Hero section text, button config, particle settings |
| `about` | Bio text (supports HTML via `dangerouslySetInnerHTML`) |
| `timeline` | Array of work experience entries with dates, titles, descriptions |
| `projects` | Array of project cards (title, description JSX, links, tags, colors) |
| `resume` | Google Drive URL for the resume PDF |
| `footer` | Footer text |

**When adding/editing content** (new job, new project, updated bio):
1. Edit only `src/data.js` — do not touch component files for content changes.
2. HTML in `about` text is rendered with `dangerouslySetInnerHTML` — keep it safe, no user-supplied input ever reaches this.
3. Project descriptions use JSX (`<li>` elements) defined inline in the data array.

---

## Development Workflow

### Prerequisites
- Node.js (v14+ recommended)
- npm

### Common Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm start

# Run tests
npm test

# Build for production (output to /build)
npm run build
```

> **Do not run `npm run eject`** — this is a one-way, irreversible operation that exposes all CRA internals.

### Development Server
- Hot reload is enabled by default via CRA.
- The app runs on `http://localhost:3000` in development.
- Changes to `src/` are reflected immediately.

---

## Architecture & Key Conventions

### Component Conventions
- All components are **functional components** using React hooks.
- Components are organized in `src/Components/<Name>/` with co-located CSS.
- File naming: `.jsx` for components with significant JSX, `.js` for simpler ones.
- Component names use **PascalCase**; CSS class names use **camelCase** or **kebab-case**.

### Routing
- Uses React Router v5 (`react-router-dom`).
- Single route `/` renders the `<Home>` layout, which contains all sections.
- Smooth scrolling between sections is handled by `react-scroll`.
- The 404 component exists but is **commented out** in `App.js`.

### Styling Approach
- **CSS variables** are defined in `App.css`:
  - `--right-background`, `--left-background`, `--nav-links`, `--nav-head`
- **Co-located CSS** files alongside each component.
- **Inline styles** are used extensively, especially for values sourced from `data.js`.
- **No CSS Modules** — class names are global; avoid collisions by using descriptive, component-scoped names.
- **No Tailwind, Sass, or styled-components** — plain CSS only.

### State Management
- No global state (no Redux, Context API, Zustand, etc.).
- Local `useState` hooks for UI toggles:
  - `Home.jsx`: sidebar open/close toggle
  - `About.jsx`: collapsible "See More" toggle

### Animations & UI
- `react-animated-css` — fade-in animations on sidebar
- `react-vertical-timeline-component` — timeline visualization
- `react-collapse` — smooth height transitions for collapsible sections
- `@material-ui/core` — Button component and theming

---

## Dependencies Reference

### Key Runtime Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| `react` | 17.0.1 | Core UI framework |
| `react-router-dom` | 5.2.0 | Client-side routing |
| `@material-ui/core` | 4.11.3 | UI components |
| `react-vertical-timeline-component` | 3.3.3 | Timeline display |
| `react-scroll` | 1.8.1 | Smooth scroll navigation |
| `react-collapse` | 5.1.0 | Collapsible sections |
| `react-animated-css` | 1.2.1 | CSS animations |
| `classnames` | 2.2.6 | Conditional classNames |

> These are **pinned to older versions** intentionally. Do not upgrade without testing; Material-UI v5 and React Router v6 have breaking API changes.

---

## Testing

- Framework: **Jest** (via `react-scripts`)
- Libraries: `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`
- **There are currently no test files** in this repo. If adding tests, place them adjacent to the component as `<ComponentName>.test.jsx`.

```bash
npm test       # Runs in watch mode
npm test -- --watchAll=false   # Single run (CI mode)
```

---

## Important Caveats & Gotchas

1. **`dangerouslySetInnerHTML`** is used in `About.jsx` and `Projects.jsx` to render HTML from `data.js`. This is safe only because all content is hardcoded — never pass user-supplied strings through this path.

2. **Console.log** exists in `Left.jsx` — remove before any production deploy.

3. **404 Component** is imported but its `<Route>` is commented out in `App.js`. Leave it unless routing is being actively reworked.

4. **No environment variables** are used. No `.env` files needed.

5. **No backend** — all data is static. Do not add API calls without adding a proper backend.

6. **Image assets** live in `src/res/`. Reference them via `import` in JavaScript, not via public URL, to benefit from CRA's asset hashing.

---

## Making Changes Safely

| Change Type | Where to Edit |
|-------------|--------------|
| Update bio text | `src/data.js` → `about` key |
| Add/edit a project | `src/data.js` → `projects` array |
| Add work experience | `src/data.js` → `timeline` array |
| Update resume link | `src/data.js` → `resume` key |
| Change nav items | `src/data.js` → `navLinks` array |
| Change colors/theme | `src/App.css` CSS variables |
| Change layout/behavior | Component `.jsx` and `.css` files |
| Add a new page/route | `App.js` + new component in `Components/` |

---

## Branch & Git Workflow

- **Main branch**: `master`
- Feature/task branches follow the pattern: `claude/<description>-<id>`
- Commit messages are short and descriptive (e.g., "added TATA", "Resume and email update")
- No CI/CD pipeline is configured — deploys are manual

---

## External Integrations (No Credentials Needed)

- **Google Fonts**: IBM Plex Sans loaded via `<link>` in `public/index.html`
- **Font Awesome**: Icons loaded via CDN in `public/index.html`
- **GitHub / LinkedIn**: Links defined in `data.js`, open in new tab
- **Google Drive**: Resume PDF link in `data.js`
