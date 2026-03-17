# SBA 308A: JavaScript Web Application


# 🎌 Anime Quotes
 
> A simple web application that displays random quotes from anime characters at the click of a button.
 
---
 
## 📸 Screenshot
 
<img src="images/screenshots/AnimeQuote_Screenshot.jpg" width=600>
 
---
## 📖 About The Project
 
**Anime Quotes** is a frontend web app that fetches random quotes from anime characters using a public API. Each time you click the **Quote** button, a new quote is retrieved, filtered for appropriate content, and displayed on a styled card — showing the anime title, the quote itself, and the character who said it.
 
This project was built as part of **SBA 308A: JavaScript Web Application** to demonstrate practical use of asynchronous JavaScript, the Fetch API, ES Modules, and event-driven programming.
 
---
 
## ✨ Features
 
- 🎲 Fetches a random anime quote on button click
- 🚫 Filters out quotes containing explicit language before displaying
- 📦 Organized using ES Modules (`import`/`export`)
- ⚡ Fully asynchronous using `async/await` and the Fetch API

---



## 🛠️ Built With
 
[![My Skills](https://skillicons.dev/icons?i=js,html,css)](https://skillicons.dev)
 
- **HTML5** — semantic page structure
- **CSS3** — custom styling and layout via Flexbox
- **JavaScript (ES Modules)** — async/await, Fetch API, modular file structure

 
---
## 📁 Project Structure
 
```
project-root/
├── index.html
├── styles/
│   └── style.css
├── scripts/
│   ├── script.mjs        # Main logic: event listener + fetchData()
│   ├── urls.mjs          # API endpoint constants
│   └── helperfuncs.mjs   # safeQuote() content filter
└── images/
    └── screenshots/
        └── AnimeQuote_Screenshot.jpg
```
 
---

## 🌐 APIs Used
 
| API | Purpose | Docs |
|-----|---------|------|
| [Yurippe Anime Quotes](https://yurippe.vercel.app/) | Fetches random anime quotes | `GET /api/quotes?random=1` |
| [*Jikan API](https://jikan.moe/) | MyAnimeList unofficial API (staged for future use - character images) | `GET /v4/characters/{id}/full` |
 
---

### Acknowledgements
<!-- MARKDOWN LINKS & IMAGES -->
* [Anime Quotes](https://yurippe.vercel.app/) for the API 