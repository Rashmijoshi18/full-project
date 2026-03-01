# 📰 Full-Stack News Application

A complete full-stack news web application built with a **React** frontend and a **Node.js/Express** backend. The app fetches, serves, and displays the latest news articles in a clean, responsive user interface.

---

## 📁 Project Structure

```
full-project/
├── news-backend/        # Node.js + Express REST API
└── news-frontend/       # React.js client application
```

---

## 🚀 Features

- 📡 Fetches latest news articles via a backend API
- 🗂️ Browse news by categories
- 🔍 Search for news articles
- 📱 Fully responsive design
- ⚡ Fast and lightweight frontend built with React
- 🔒 Backend handles API keys securely (not exposed to the client)
- 🌐 RESTful API with clear endpoints

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React.js | UI framework |
| CSS3 | Styling & layout |
| HTML5 | Markup |
| Axios / Fetch API | HTTP requests to backend |

### Backend
| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Web framework / REST API |
| NewsAPI / Third-party API | News data source |
| dotenv | Environment variable management |
| CORS | Cross-origin resource sharing |

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A free API key from [NewsAPI.org](https://newsapi.org/) (or your configured news data provider)

---

### 1. Clone the Repository

```bash
git clone https://github.com/Rashmijoshi18/full-project.git
cd full-project
```

---

### 2. Set Up the Backend

```bash
cd news-backend
npm install
```

Create a `.env` file in the `news-backend` directory:

```env
PORT=5000
NEWS_API_KEY=your_newsapi_key_here
```

> 💡 Replace `your_newsapi_key_here` with your actual API key from [https://newsapi.org/](https://newsapi.org/)

Start the backend server:

```bash
npm start
```

The backend will run at: `http://localhost:5000`

---

### 3. Set Up the Frontend

Open a new terminal window:

```bash
cd news-frontend
npm install
```

Create a `.env` file in the `news-frontend` directory (if needed):

```env
REACT_APP_BACKEND_URL=http://localhost:5000
```

Start the frontend development server:

```bash
npm start
```

The frontend will run at: `http://localhost:3000`

---

## 🔗 API Endpoints

The backend exposes the following REST API endpoints:

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/news` | Fetch top headlines |
| `GET` | `/api/news?category=technology` | Fetch news by category |
| `GET` | `/api/news?q=searchterm` | Search news articles |

> **Note:** Endpoint paths may vary. Check `news-backend/` source files for the exact routes defined in your Express app.

---

## 📂 Folder Details

### `news-backend/`
```
news-backend/
├── routes/          # Express route definitions
├── controllers/     # Route handler logic
├── .env             # Environment variables (not committed)
├── server.js        # Entry point
└── package.json     # Dependencies & scripts
```

### `news-frontend/`
```
news-frontend/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable React components
│   ├── pages/       # Page-level components
│   ├── App.js       # Root component
│   └── index.js     # Entry point
├── .env             # Environment variables (not committed)
└── package.json     # Dependencies & scripts
```

---

## 🧪 Running Both Servers Simultaneously

You can use two separate terminal windows, or install a tool like `concurrently`:

```bash
# From the root of the project
npm install -g concurrently

concurrently "cd news-backend && npm start" "cd news-frontend && npm start"
```

---

## 🌍 Deployment

### Backend
You can deploy the backend to:
- [Render](https://render.com/)
- [Railway](https://railway.app/)
- [Heroku](https://heroku.com/)

Make sure to set your environment variables (`NEWS_API_KEY`, `PORT`) in your hosting platform's settings.

### Frontend
You can deploy the frontend to:
- [Vercel](https://vercel.com/) *(recommended for React apps)*
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)

Update `REACT_APP_BACKEND_URL` in your deployment environment to point to your hosted backend URL.

---

## 🔐 Environment Variables Summary

| Variable | Location | Description |
|---|---|---|
| `PORT` | `news-backend/.env` | Port for the backend server |
| `NEWS_API_KEY` | `news-backend/.env` | API key for news data provider |
| `REACT_APP_BACKEND_URL` | `news-frontend/.env` | Base URL of the backend API |

> ⚠️ **Never commit `.env` files to version control.** Add `.env` to your `.gitignore`.

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m "Add your feature"`
4. Push to your fork: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👩‍💻 Author

**Rashmi Joshi**  
GitHub: [@Rashmijoshi18](https://github.com/Rashmijoshi18)

---

> ⭐ If you found this project helpful, please consider giving it a star on GitHub!
