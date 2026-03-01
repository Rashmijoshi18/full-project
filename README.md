# News App

A full-stack news aggregator application built with React and Node.js. Browse top news headlines from around the world, filter by country and category, and save articles for later reading.

## Features

✨ **Core Features**

- 📰 Browse top news headlines from 11+ countries
- 🏷️ Filter news by category (General, World, Nation, Business, Technology, Sports, Entertainment, Science, Health)
- 🔍 Search articles by title or description
- 💾 Save articles to your personal collection
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Modern, clean UI with smooth animations
- 🌐 Real-time data from GNews API

✅ **Quality of Life**

- Loading spinners for better UX
- Toast notifications for save feedback
- Empty state messages
- Active navigation highlighting
- Mobile hamburger menu
- Category labels on saved articles

## Technology Stack

**Frontend**

- React 19
- React Router v7
- Axios (HTTP client)
- Vite (build tool)
- CSS3 (responsive design)

**Backend**

- Node.js with Express
- MongoDB (database)
- Axios (external API calls)
- Cors (cross-origin support)
- Dotenv (environment variables)

**External APIs**

- GNews API (news data)

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB instance (local or cloud)
- GNews API key (free tier available at [gnews.io](https://gnews.io))

## Installation

### Backend Setup

1. Navigate to the backend directory:

```bash
cd news-backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the `news-backend` directory:

```env
MONGO_URI=mongodb://localhost:27017/news_app
GNEWS_API_KEY=your_api_key_here
PORT=5000
```

4. (Optional) Set up MongoDB locally or use MongoDB Atlas:
   - Local: Make sure MongoDB is running on `localhost:27017`
   - Cloud: Update `MONGO_URI` with your MongoDB Atlas connection string

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd news-frontend
```

2. Install dependencies:

```bash
npm install
```

The frontend is configured to connect to `http://localhost:5000` by default.

## Running the Application

### Development Mode

**Terminal 1 - Backend:**

```bash
cd news-backend
npm run dev
```

The backend runs on `http://localhost:5000`

**Terminal 2 - Frontend:**

```bash
cd news-frontend
npm run dev
```

The frontend runs on `http://localhost:5173` (Vite default)

### Production Build

**Frontend:**

```bash
cd news-frontend
npm run build
npm run preview
```

## Usage Guide

### Browsing News

1. Start on the **Home** page
2. Select a **Country** from the first dropdown
3. Choose a **Category** (optional, defaults to "General")
4. Enter a search term to filter results (optional)
5. Click any article card to read the full story
6. Click **💾 Save** to add to your collection

### Saved Articles

1. Click **Saved** in the navigation menu
2. Filter by **Category** to view specific types
3. Search saved articles using the search bar
4. Click any card to open the article

## Project Structure

```
news-api/
├── news-backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   └── articleController.js # CRUD logic
│   ├── models/
│   │   └── Article.js         # MongoDB schema
│   ├── routes/
│   │   └── articleRoutes.js    # Express routes
│   ├── index.js               # Express server & GNews API endpoint
│   └── package.json
│
└── news-frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── Home.jsx       # Browse & save articles
    │   │   └── Saved.jsx      # View saved collection
    │   ├── App.jsx            # Router & navbar
    │   ├── index.css          # Global styles
    │   └── api.js             # Axios instance
    └── package.json
```

## API Endpoints

### Backend Endpoints

**Fetch News**

```
GET /api/news?country=<code>&topic=<topic>&q=<keyword>&max=<count>
```

Query parameters:

- `country` (required): Country code (e.g., `in`, `us`, `gb`, `au`, `ca`, `fr`, `de`, `jp`, `ru`, `cn`, `za`)
- `topic` (optional): Category (general, world, nation, business, technology, sports, entertainment, science, health)
- `q` (optional): Keyword search
- `max` (optional, default: 10): Number of articles

Example:

```
GET /api/news?country=in&topic=technology&max=15
```

**Saved Articles**

```
GET /api/articles?topic=<topic>         # Get all saved, optionally filtered by topic
POST /api/articles                      # Save an article
```

POST body:

```json
{
  "title": "Article Title",
  "description": "Article description",
  "url": "https://example.com/article",
  "image": "https://example.com/image.jpg",
  "topic": "technology"
}
```

## Supported Countries

- IN (India)
- US (USA)
- GB (United Kingdom)
- AU (Australia)
- CA (Canada)
- FR (France)
- DE (Germany)
- JP (Japan)
- RU (Russia)
- CN (China)
- ZA (South Africa)

## Categories

- General
- World
- Nation
- Business
- Technology
- Sports
- Entertainment
- Science
- Health

## Environment Variables

### Backend (.env)

```
MONGO_URI=mongodb://localhost:27017/news_app
GNEWS_API_KEY=your_gnews_api_key
PORT=5000
NODE_ENV=development
```

### Frontend

Frontend connects to backend at `http://localhost:5000/api` (hardcoded in `src/api.js`).
Update the `baseURL` if deploying to a different backend URL.

## Troubleshooting

### Backend won't start

- Ensure MongoDB is running
- Check that port 5000 is not in use
- Verify `GNEWS_API_KEY` is set correctly in `.env`

### Frontend shows "No articles"

- Verify backend is running on `http://localhost:5000`
- Check browser console (F12) for network errors
- Confirm API key has sufficient quota

### Search/filter not working

- Ensure both frontend and backend are running
- Try refreshing the page
- Check network requests in browser DevTools

## Performance Tips

- First load may be slow due to GNews API response time (~1-2s)
- Saved articles are cached in MongoDB (fast retrieval)
- Filters are applied client-side (instant feedback)
- Search is debounced server-side

## Future Enhancements

- [ ] Dark mode toggle
- [ ] User authentication & personal accounts
- [ ] Advanced filters (date range, source)
- [ ] Article sharing (Twitter, etc.)
- [ ] Reading time estimates
- [ ] Article categories with color coding
- [ ] Deploy to production (Vercel, Heroku, etc.)

## License

ISC

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## Support

For issues or questions:

1. Check this README
2. Review browser console errors (F12)
3. Verify all prerequisites are installed
4. Ensure backend and frontend are both running

---

**Happy news reading!** 📰
