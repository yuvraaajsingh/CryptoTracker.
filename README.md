# CryptoTracker

A **React**-based cryptocurrency tracker that displays real-time prices, historical charts, and market insights for 100+ cryptocurrencies using the CoinGecko API. Deployed on Vercel for fast, responsive access.

[Live Demo (Vercel)](https://your-vercel-project.vercel.app) • [Repo](https://github.com/yuvraaajsingh/CryptoTracker)

---

## Key Features
- Real-time price updates, market cap, 24h change and other key metrics.  
- Interactive historical charts (selectable time range).  
- Search, filter and compare cryptocurrencies.  
- Dark / Light mode toggle.  
- Responsive UI for desktop and mobile.

---

## Tech Stack
- **Frontend:** React.js (functional components + hooks)  
- **Charts:** Chart.js (or react-chartjs-2)  
- **Styling:** Tailwind CSS / Material UI (whatever used in project)  
- **API:** CoinGecko public API  
- **Deployment:** Vercel

---

## Demo / Screenshots
> Replace these with actual images or GIFs from your project.

![Screenshot 1](./screenshots/home.png)  
![Screenshot 2](./screenshots/chart.png)

---

## Installation (Local)

1. Clone the repo:
```bash
git clone https://github.com/yuvraaajsingh/CryptoTracker.git
cd CryptoTracker
npm install
# or
yarn
npm run dev
# or for CRA
npm start
REACT_APP_API_BASE=https://api.coingecko.com/api/v3
REACT_APP_CURRENCY=usd
