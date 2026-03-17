# SBA 308A: JavaScript Web Application


# 🎌 Anime Quotes
 
> A simple web application that displays random quotes from anime characters at the click of a button.
 
 🔗 **[Live Demo](https://your-deployment-url.com)**
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
## 📝 Assignment Context
 
**Course:** SBA 308A — JavaScript Web Application
 
**Objectives demonstrated:**
- Asynchronous JavaScript with Promises and `async/await`
- Understanding of the JavaScript event loop
- `fetch()` to interact with an external REST API
- ES Module organization using `import`/`export`
- Event-driven UI with DOM manipulation
 
---

## 🔮 Future Improvements
 
- [ ] **Character Images** — Integrate the [Jikan API](https://jikan.moe/) (`charUrl`) to fetch and display an image of the character who spoke the quote. The groundwork (`charUrl` in `urls.mjs` and a stubbed `fetchImage()` in `script.mjs`) is already in place.
- [ ] **Anime Cover Art** — Display the cover image of the anime associated with each quote to give more visual context.
- [ ] **Favorites / Save Quotes** — Allow users to save quotes they like using `localStorage`, with a separate view to browse saved quotes.
- [ ] **Share Button** — Add a one-click option to copy a quote to the clipboard or share it directly to social media.
- [ ] **Quote Categories / Filters** — Let users filter quotes by genre, anime title, or character name.
- [ ] **Loading State** — Show a loading spinner or skeleton card while the API request is in flight.
- [ ] **Expanded Content Filter** — Improve the `safeQuote()` function in `helperfuncs.mjs` with a more comprehensive word list or an external profanity-filter library.
- [ ] **Mobile Responsiveness** — Refine the layout for smaller screen sizes so the two-column design stacks gracefully on mobile.

 
---

## 🌐 APIs Used
 
| API | Purpose | Docs |
|-----|---------|------|
| [Yurippe Anime Quotes](https://yurippe.vercel.app/) | Fetches random anime quotes | `GET /api/quotes?random=1` |
| [*Jikan API](https://jikan.moe/) | MyAnimeList unofficial API (staged for future use - character images) | `GET /v4/characters/{id}/full` |
 
---

## 🙏 Acknowledgements
 
- [Yurippe Anime Quotes API](https://yurippe.vercel.app/) — quote data source
- [Jikan API](https://jikan.moe/) — MyAnimeList character data (planned integration)
- [Skill Icons](https://skillicons.dev/) — tech badge visuals in README
<!-- MARKDOWN LINKS & IMAGES -->
* [Anime Quotes](https://yurippe.vercel.app/) for the API 