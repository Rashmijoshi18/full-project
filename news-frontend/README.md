# News App Frontend

React + Vite frontend for browsing, searching, and saving news articles.

## Quick Start

```bash
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

## Features

- 📰 Browse headlines by country & category
- 🔍 Real-time search across articles
- 💾 Save articles to personal collection
- 🏷️ Filter by news category
- 📱 Fully responsive design
- ⚡ Lightning-fast with Vite

## Project Structure

```
news-frontend/
├── src/
│   ├── pages/
│   │   ├── Home.jsx        # Browse & search articles
│   │   └── Saved.jsx       # View & filter saved collection
│   ├── App.jsx             # Router & navbar component
│   ├── api.js              # Axios config (backend URL)
│   ├── index.css           # Global styles & responsive design
│   ├── main.jsx            # React entry point
│   └── assets/             # Static assets
│   └── App.css             # (Unused - styles in index.css)
├── index.html              # HTML template
└── vite.config.js          # Vite configuration
```

## Available Scripts

### Development

```bash
npm run dev
```

Starts Vite dev server with hot module replacement on `http://localhost:5173`

### Build

```bash
npm run build
```

Creates optimized production build in `dist/` folder.

### Preview

```bash
npm run preview
```

Preview production build locally after building.

### Lint

```bash
npm run lint
```

Check code quality with ESLint.

## Backend Connection

Frontend connects to backend via `src/api.js`:

```javascript
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});
```

**To change backend URL:**

1. Edit `src/api.js`
2. Update `baseURL` to your backend URL
3. Restart dev server

Example for production:

```javascript
baseURL: "https://api.mynewsapp.com/api";
```

## Component Overview

### App.jsx

Main router component with sticky navigation bar:

- Brand logo ("NewsApp")
- Mobile hamburger menu (responsive toggle)
- Home & Saved navigation links
- Active link highlighting
- Smooth transitions

### pages/Home.jsx

Browse and search news:

- **Country selector** - Choose from 11+ countries
- **Category/topic selector** - Filter by news type
- **Search input** - Real-time keyword search
- **Loading spinner** - Visual feedback during fetch
- **Article grid** - Responsive card layout
- **Save button** - Add to collection (💾 emoji)
- **Empty state** - Message when no results
- **Toast notification** - Feedback on save

State management:

```javascript
articles; // [] - News from GNews API
country; // "in" - Selected country
topic; // "general" - Selected category
loading; // false - Fetch state
searchTerm; // "" - Search filter text
savedMessage; // "" - Toast notification
```

### pages/Saved.jsx

View and filter saved articles:

- **Category filter** - Dropdown to filter by topic
- **Search bar** - Find in saved collection
- **Loading spinner** - Fetch indicator
- **Article grid** - Same layout as Home
- **Empty state** - No saved articles message
- **Click to open** - Cards open in new tab

State management:

```javascript
articles; // [] - Saved articles from MongoDB
topicFilter; // "" - Category filter
loading; // false - Fetch state
searchTerm; // "" - Search filter text
```

## Styling

Global styles in `src/index.css` with:

- **CSS variables** for theme colors and easy customization
- **Responsive mobile-first design**
- **Media queries** for all screen sizes
- **Smooth animations** & transitions
- **Card hover effects** with lift & shadow
- **Sticky header** that stays at top while scrolling

Key CSS classes:

```css
.navbar              /* Navigation header */
.brand               /* App title/logo */
.nav-links           /* Navigation links container */
.hamburger           /* Mobile menu toggle icon */
.container           /* Page content wrapper */
.selectors-row       /* Filter & search controls row */
.select-country      /* Country/category selector */
.search-bar          /* Search input wrapper */
.news-grid           /* Article grid layout */
.news-card           /* Individual article card */
.btn                 /* Action buttons */
.spinner             /* Loading spinner animation */
.empty-state         /* No results message */
.message-banner      /* Toast notification */
.category-label      /* Category badge on cards */
```

## API Integration

### Fetch News

```javascript
GET /api/news?country=in&topic=technology&max=10
```

Response structure:

```json
{
  "articles": [
    {
      "title": "Article Title",
      "description": "Short description",
      "url": "https://example.com/article",
      "image": "https://example.com/image.jpg",
      "topic": "technology"
    }
  ]
}
```

### Get Saved Articles

```javascript
GET /api/articles              # All saved articles
GET /api/articles?topic=tech   # Filtered by topic
```

### Save Article

```javascript
POST /api/articles
Content-Type: application/json

{
  "title": "Article Title",
  "description": "Description",
  "url": "https://...",
  "image": "https://...",
  "topic": "technology"
}
```

## Dependencies

### Production

- **react** (^19.1) - UI library
- **react-dom** (^19.1) - React DOM rendering
- **react-router-dom** (^7.9) - Client-side routing
- **axios** (^1.12) - HTTP client

### Development

- **vite** (^7.1) - Build tool & dev server
- **@vitejs/plugin-react** (^5.0) - React support for Vite
- **eslint** (^9.35) - Code linting
- **@eslint/js** - ESLint config
- Type definitions for React & React DOM

## Responsive Design

### Mobile (<600px)

- Single column article grid
- Hamburger menu navigation (hidden desktop nav)
- Full-width search and filter inputs
- Stacked selectors (vertical)

### Tablet (600px-768px)

- Two column grid
- Horizontal selector/search row
- Optimized touch targets
- Flexible padding

### Desktop (>768px)

- Three column grid
- Flexbox navigation bar
- Full-width layout optimization
- Larger comfortable spacing

## Configuration

### Environment Setup

No `.env` file needed for frontend - configuration is in `src/api.js`.

### Vite Config

`vite.config.js` includes:

- React Fast Refresh plugin
- Port 5173 default
- ESLint integration

## Performance Optimizations

- **Code splitting** - Automatic with Vite
- **CSS minification** - Production builds are optimized
- **Asset caching** - Efficient browser caching
- **Client-side filtering** - Instant search/filter results
- **Minimal re-renders** - Optimized React state
- **Hot Module Replacement** - Zero-config HMR in dev

## Troubleshooting

**"Cannot reach backend"**

- Ensure backend is running: `npm run dev` in `news-backend`
- Backend should be on `http://localhost:5000`
- Check `src/api.js` baseURL
- Open DevTools (F12) → Network tab → verify API calls

**"Articles not loading"**

- Check browser console (F12) for errors
- Verify backend is responding
- Confirm GNews API key is valid in backend

**"Search/filter not working"**

- Ensure articles have loaded first
- Verify article objects have title and description
- Try refreshing page

**"Saved articles not appearing"**

- Confirm backend (Express + MongoDB) is running
- Check MongoDB is accessible
- Look at backend console for database errors
- Verify API calls in Network tab

**"Mobile menu not toggling"**

- Hamburger icon should appear on screens <600px
- Click outside menu to close
- Check browser zoom level

## Browser Support

Tested & supported on:

- Chrome/Edge (v90+)
- Firefox (v88+)
- Safari (v14+)
- Mobile: iOS Safari, Chrome Mobile

## Building for Production

1. **Build the app:**

```bash
npm run build
```

Creates optimized bundles in `dist/` folder

2. **Test build locally:**

```bash
npm run preview
```

Simulate production environment locally

3. **Deploy to hosting:**
   - Vercel (recommended, auto-deploys from Git)
   - Netlify
   - GitHub Pages
   - AWS S3 + CloudFront
   - Any static hosting

**Important:** Before building for production, update `src/api.js` with your production backend URL.

## Development Tips

### Hot Module Replacement (HMR)

- Code changes auto-refresh without losing component state
- Perfect for rapid development iteration

### React DevTools

- Install browser extension for Chrome/Firefox
- Debug component tree, props, and state
- Convenient for troubleshooting

### Network Debugging

- Open DevTools (F12)
- Network tab shows all API calls
- Check response status, headers, and payload
- Useful for debugging backend issues

### Performance Profiling

- React DevTools → Profiler tab
- Identifies unnecessary re-renders
- Optimize performance bottlenecks

---

For full project documentation, see [root README.md](../README.md)
Backend documentation: [Backend README.md](../news-backend/README.md)
