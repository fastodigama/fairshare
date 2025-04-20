# 💰 fairshare Income Splitter Web App

This is a simple, interactive web app that helps roommates, couples, or housemates **split shared bills fairly based on individual incomes**. Just input the members and their income, then add your bills — the app calculates how much each person should pay. Everything is stored in `localStorage`, so your data persists even after a page refresh.

---

## ⚙️ Features

- 🔄 **Auto calculation** of each member's income proportion.
- 🧮 **Fair bill splitting** based on those proportions.
- 📊 **Real-time display** of who pays what for each expense.
- 💾 **LocalStorage** used for persistent form data (no backend needed).
- ❌ **Reset button** clears all saved data after confirmation.
- ☁️ **Weather integration** for Toronto (via OpenWeatherMap API).
- 📱 **Responsive design** with dynamic member and expense cards.

---

## 🚀 How It Works

1. Enter the names and monthly incomes of two members.
2. Add common household bills like rent, hydro, internet, etc.
3. The app calculates each person’s % share of total income.
4. Then it calculates how much each member pays for every bill.
5. See the results as member cards and expense cards.
6. Weather info for Toronto loads at the bottom (API key required).

---

## 📁 Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (no frameworks)
- [OpenWeatherMap API](https://openweathermap.org/api) (optional, needs your own API key)

---

## 🧪 Demo Screenshot

> *(Add a screenshot of the app here, if you want)*

---

## 🔐 Setup Instructions

1. Clone or download the repo.
2. Open the project in your browser.
3. Replace the `url` in the weather section of the JavaScript with your OpenWeatherMap API URL & key:
   ```js
   var url = `YOUR OWN URL AND API KEY`;
   That’s it! All data is saved locally in the browser.

🧹 To Reset Data
Click the Reset button → Confirm → Page reloads with fresh state.

📦 To-Do / Possible Improvements
 Allow adding more than 2 members.

 Option to export data to CSV.

 Add dark mode.

 Mobile-first optimization.

 Use localStorage keys more reliably (maybe switch to JSON object instead of separate keys per item).

🙌 Credits
Developed by [Your Name Here]

Weather Data: OpenWeatherMap
