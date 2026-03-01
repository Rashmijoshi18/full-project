# News API Backend

Express.js server that aggregates news from GNews API and manages saved articles in MongoDB.

## Quick Start

```bash
npm install
npm run dev
```

Backend runs on `http://localhost:5000`

## Environment Setup

Create `.env` file:

```env
MONGO_URI=mongodb://localhost:27017/news_app
GNEWS_API_KEY=your_api_key_here
PORT=5000
```

Get your free GNews API key at [gnews.io](https://gnews.io)

## Project Structure

```
news-backend/
├── config/
│   └── db.js                # MongoDB connection setup
├── controllers/
│   └── articleController.js # Business logic for articles
├── models/
│   └── Article.js          # MongoDB schema & model
├── routes/
│   └── articleRoutes.js     # Express routes for /api/articles
├── index.js                # Main server & GNews API endpoint
└── package.json
```

## API Endpoints

### Get News Headlines

```
GET /api/news?country=<code>&topic=<topic>&q=<keyword>&max=<count>
```

**Parameters:**

- `country` _(required)_: Country code (in, us, gb, au, ca, fr, de, jp, ru, cn, za)
- `topic` _(optional)_: Category (general, world, nation, business, technology, sports, entertainment, science, health)
- `q` _(optional)_: Keyword search
- `max` _(optional, default: 10)_: Max articles to return

**Example:**

```bash
curl "http://localhost:5000/api/news?country=in&topic=technology&max=10"
```

**Response:**

```json
{
  "articles": [
    {
      "title": "Breaking News",
      "description": "Article summary...",
      "url": "https://...",
      "image": "https://...",
      "source": {...},
      "publishedAt": "2025-03-01T..."
    }
  ]
}
```

### Get Saved Articles

```
GET /api/articles              # Get all saved articles
GET /api/articles?topic=tech   # Get articles filtered by topic
```

**Response:**

```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Article Title",
    "description": "Description",
    "url": "https://...",
    "urlToImage": "https://...",
    "topic": "technology",
    "createdAt": "2025-03-01T..."
  }
]
```

### Save Article

```
POST /api/articles
Content-Type: application/json

{
  "title": "Breaking News",
  "description": "Article summary",
  "url": "https://newssite.com/article",
  "image": "https://newssite.com/image.jpg",
  "topic": "technology"
}
```

**Success Response (201):**

```json
{
  "message": "Article saved",
  "article": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Breaking News",
    ...
  }
}
```

**Error Response (500):**

```json
{
  "error": "Failed to save article"
}
```

## Database Schema

### Article

```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  topic: String,              // Category filter
  createdAt: Date,            // Auto-generated
  updatedAt: Date             // Auto-generated
}
```

## Dependencies

- `express` - Web framework
- `axios` - HTTP client for GNews API
- `mongoose` - MongoDB ODM
- `cors` - Cross-origin support
- `dotenv` - Environment variables
- `nodemon` - Auto-restart on file changes (dev)

## Supported Countries

| Code | Country        |
| ---- | -------------- |
| in   | India          |
| us   | USA            |
| gb   | United Kingdom |
| au   | Australia      |
| ca   | Canada         |
| fr   | France         |
| de   | Germany        |
| jp   | Japan          |
| ru   | Russia         |
| cn   | China          |
| za   | South Africa   |

## Supported Topics

- general
- world
- nation
- business
- technology
- sports
- entertainment
- science
- health

## Error Handling

| Status | Error                    | Cause                       |
| ------ | ------------------------ | --------------------------- |
| 400    | Invalid country code     | Country not in allowlist    |
| 500    | Failed to fetch news     | GNews API error/unreachable |
| 500    | Failed to save article   | Database error              |
| 500    | Failed to fetch articles | Database error              |

## Development

### Available Scripts

**Start development server (with auto-reload):**

```bash
npm run dev
```

**Start production server:**

```bash
npm start
```

### Testing API

Use curl, Postman, or similar:

```bash
# Get US tech news
curl "http://localhost:5000/api/news?country=us&topic=technology"

# Save an article
curl -X POST http://localhost:5000/api/articles \
  -H "Content-Type: application/json" \
  -d '{
    "title":"Test",
    "description":"Test",
    "url":"https://test.com",
    "topic":"technology"
  }'

# Get all saved
curl http://localhost:5000/api/articles

# Get saved tech news
curl http://localhost:5000/api/articles?topic=technology
```

## Database Connection

### Local MongoDB

1. Install MongoDB locally
2. Run `mongod`
3. Connect to `mongodb://localhost:27017/news_app`

### MongoDB Atlas (Cloud)

1. Create account at [mongodb.com](https://mongodb.com)
2. Create cluster and database
3. Get connection string
4. Set `MONGO_URI` in `.env`:

```
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/news_app?retryWrites=true
```

## Notes

- GNews API has rate limits, monitor quota
- Frontend expects responses with `articles` array
- All article timestamps are in UTC
- Topic filtering works on saved articles only (frontend filters GNews to topic)

## Troubleshooting

**"MongoDB connection error"**

- Ensure MongoDB is running: `mongod`
- Check `MONGO_URI` in `.env`
- Verify network connectivity for Atlas

**"GNews API error"**

- Check `GNEWS_API_KEY` is valid
- Verify API quota at gnews.io
- Check internet connection

**CORS errors**

- Confirm frontend URL is allowed (CORS middleware is enabled)
- Check Content-Type headers

---

See root [README.md](../README.md) for full project documentation.
