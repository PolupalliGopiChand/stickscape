# 🎨 React Sticker Canvas App

A fun, browser-based sticker editor built with **React** and **react-konva**! Easily drag-and-drop stickers onto a canvas, rearrange them, delete them, and download your creation as a PNG image — all without a backend.

---

## 📌 Table of Contents

1. [Task Overview](#task-overview)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Getting Started](#getting-started)
5. [Folder Structure](#folder-structure)
6. [Detailed Implementation Guide](#detailed-implementation-guide)
7. [Key Concepts for Beginners](#key-concepts-for-beginners)
8. [Resources](#resources)
9. [Tips for Success](#tips-for-success)
10. [Common Pitfalls](#common-pitfalls)
11. [Example Workflow](#example-workflow)

---

## ✅ Task Overview

Create a React-based web app with an interactive canvas that allows users to:

- Place and drag stickers.
- Add stickers by clicking buttons (emojis or PNGs).
- Drag stickers around the canvas.
- Download the canvas as a PNG.
- (Bonus) Double-click stickers to delete them.
- (Bonus) Snap new stickers to a 40px grid.

**Canvas Size**: `600px x 400px`  
**Deliverables**: GitHub repo with clean commits, README, and an optional 1-minute demo video.

---

## 🛠️ Tech Stack

### ✨ React
- Modern UI library.
- Functional components with `useState`.
- Component-based structure (`App`, `Canvas`, `StickerButton`).

### 🎨 Konva & react-konva
- `Konva`: A JS library to simplify `<canvas>` manipulation.
- `react-konva`: React wrapper around Konva.
  - `<Stage>`: Main canvas.
  - `<Layer>`: Container for shapes.
  - `<Image>`: For sticker images.
  - Supports drag events, double-clicks, and exporting to PNG.

### 📦 Others
- `Node.js` and `npm`: Project setup and dependency management.
- `use-image`: React hook to load images.
- PNGs or emojis: Used as stickers.
- Browser APIs: Used to download canvas content.
- Git + GitHub: Version control and hosting.

---

## 🚀 Features

| Feature                 | Description                                      |
|------------------------|--------------------------------------------------|
| 🎨 Canvas              | Interactive 600×400 px sticker canvas.           |
| 🔘 Sticker Buttons     | Click to add emojis or PNG-based stickers.       |
| 🖱️ Draggable Items     | Stickers are movable across the canvas.          |
| 💾 Download Image      | Export canvas as PNG image using `toDataURL()`. |
| ✂️ Delete by Double Click | Double-click to remove stickers (optional).     |
| 🧲 Snap to Grid        | Snap sticker positions to 40px grid (optional).  |

---

## 🧰 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm start
