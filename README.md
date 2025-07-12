# MedTrack 💊

![MedTrack Logo](https://via.placeholder.com/150)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v16+-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-v18+-blue)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)](https://www.mongodb.com/)

**MedTrack** is a cutting-edge, AI-powered medicine tracking application designed to revolutionize health management. With a stunning, accessible landing page, multi-language support, and innovative features like OCR prescription scanning and social sharing, MedTrack outshines competitors in usability and engagement.

## 📸 Screenshots

| Landing Page | Dashboard | Analytics |
|--------------|-----------|-----------|
| ![Landing Page](https://via.placeholder.com/300x200?text=Landing+Page) | ![Dashboard](https://via.placeholder.com/300x200?text=Dashboard) | ![Analytics](https://via.placeholder.com/300x200?text=Analytics) |

*Note: Replace placeholder images with actual screenshots after deployment.*

## ✨ Features

### Core Features
- **User Authentication**: Secure JWT-based login and registration.
- **Medicine Management**: Add, edit, delete, and track medicines with detailed schedules.
- **AI-Powered Insights**: Voice-enabled AI for medicine details (mock; supports OpenAI).
- **Dose Tracking**: Log doses as "Taken," "Missed," or "Postponed."
- **Responsive UI**: Built with React and TailwindCSS.

### Enhanced Features
- **Modern Landing Page**: Medical SVG illustration, language switcher, theme toggle, newsletter, testimonials, and social proof.
- **Accessibility**: Keyboard navigation, aria-labels, color contrast, and screen reader support.
- **Multi-Language**: English, Español, हिन्दी.
- **Notifications**: Real-time browser and push reminders.
- **Analytics**: Visualize medicine adherence and export data.
- **Social Sharing**: Share progress on social media.
- **Export to PDF**: Download your medicine schedule and analytics.
- **Google Calendar Sync**: Integrate with your Google Calendar.

## 🚀 Getting Started

### Prerequisites
- Node.js v16+
- MongoDB Atlas or local MongoDB

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/medtrack.git
   cd medtrack
   ```
2. **Install dependencies:**
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```
3. **Set up environment variables:**
   - Create `.env` in `/server`:
     ```env
     MONGODB_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     ```
   - (Optional) Create `.env` in `/client` for public variables (prefix with `REACT_APP_`).
4. **Run the app:**
   - In `/server`:
     ```bash
     npm start
     ```
   - In `/client`:
     ```bash
     npm start
     ```
   - The client runs on [http://localhost:3000](http://localhost:3000), server on [http://localhost:5000](http://localhost:5000).

## 🌐 Deployment

### Option A: All-in-One (Render)
1. Push your code to GitHub.
2. On [Render](https://render.com):
   - Create a new Web Service, root `/server`.
   - Build command: `npm install && npm run build:client`
   - Start command: `node server.js`
   - Set environment variables in the dashboard.
3. In `/server/server.js`, ensure you serve the frontend build:
   ```js
   const path = require('path');
   app.use(express.static(path.join(__dirname, 'build')));
   app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, 'build', 'index.html'));
   });
   ```

### Option B: Split Hosting (Vercel/Netlify + Render/Heroku)
- **Frontend:** Deploy `/client` to Vercel or Netlify (build: `npm run build`, output: `build`)
- **Backend:** Deploy `/server` to Render or Heroku
- Set API URLs in the frontend via `REACT_APP_API_URL`

### Domain & SSL
- Configure a custom domain in your host's dashboard.
- Free SSL is provided by Render, Vercel, Netlify, and Heroku.

## ⚙️ Environment Variables
- **Backend:**
  - `MONGODB_URI` — MongoDB connection string
  - `JWT_SECRET` — JWT secret for authentication
- **Frontend:**
  - `REACT_APP_API_URL` — (if using split hosting)

## ♿ Accessibility & SEO
- All interactive elements have aria-labels and keyboard support.
- Color contrast and screen reader support.
- SEO and social sharing meta tags included in `public/index.html`.

## 🤝 Social Proof
- As seen on: React, Redux, Tailwind CSS, Express.js, MongoDB
- Testimonials with avatars and names

## 📄 License

This project is licensed under the MIT License.