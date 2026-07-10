# Oldagram 🎨

A vintage-art-themed Instagram clone built with HTML, CSS, and vanilla JavaScript. Posts feature famous historical portraits and paintings, styled like a classic Instagram feed.

## Features

- **Dynamic post feed** — posts are generated from a JavaScript data array and rendered into the DOM, so adding a new post is as simple as adding a new object to the array.
- **Responsive Instagram-style layout** — profile picture, username, location, post image, action icons (like/comment/share), like count, and caption.
- **Hover effects** — interactive icons use `filter: drop-shadow()` on hover for a subtle, shape-accurate shadow effect.
- **Semantic HTML** — structured using meaningful tags (`<header>`, `<main>`, `<article>`, `<footer>`) rather than generic `<div>`s, for better accessibility and readability.

## Tech Stack

- HTML5
- CSS3 (Flexbox)
- Vanilla JavaScript (DOM manipulation, template literals)
- Google Fonts (Roboto, Source Sans 3)

## Project Structure

```
├── index.html
├── index.css
├── index.js
└── images/
    ├── logo.png
    ├── avatar-vangogh.jpg
    ├── post-vangogh.jpg
    ├── avatar-courbet.jpg
    ├── post-courbet.jpg
    ├── avatar-ducreux.jpg
    ├── post-ducreux.jpg
    ├── icon-heart.png
    ├── icon-comment.png
    └── icon-dm.png
```

## How It Works

Post data lives in a JavaScript array, where each object represents one post:

```javascript
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    // ...more posts
]
```

On page load, JavaScript loops through this array and dynamically builds a post element for each entry, injecting it into the page. This keeps the HTML clean and makes the feed easy to extend — just add a new object to the `posts` array and a new post appears automatically.

## Getting Started

1. Clone or download this repository.
2. Make sure the `images/` folder is in the same directory as `index.html`.
3. Open `index.html` in your browser — no build tools or server required.

## Requirements Checklist

- [x] Create the first post
- [x] Use semantic HTML
- [x] Add hover effects to the icons

## Credits

Portraits and paintings used are historical public domain artworks (Vincent van Gogh, Gustave Courbet, Joseph Ducreux), reimagined here as "old-timey" social media posts.
