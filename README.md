<div align="center">

# ✨ MarkFlow — Write. Preview. Publish. ✨

### 🚀 The Fastest, Most Beautiful Markdown Editor on the Web

<br />

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

<br />

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=A855F7&center=true&vCenter=true&width=500&lines=Zero+Install+%F0%9F%8E%89+Just+Open+%26+Write;Live+Split-Pane+Preview+%F0%9F%96%A5%EF%B8%8F;One-Click+PDF+Export+%F0%9F%93%84;30%2B+Languages+Highlighted+%F0%9F%8C%88;Dark+%26+Light+Themes+%F0%9F%8C%97" alt="Typing SVG" />

<br />

> 💡 *A premium, browser-based Markdown editor with live split-pane preview, syntax highlighting, PDF export, and gorgeous dark/light themes. No installation. No friction. Just write.*

<br />

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="700" />

</div>

---

## 📖 Table of Contents

- [✨ Why MarkFlow?](#-why-markflow)
- [🎯 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [⚡ Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🎨 Themes](#-themes)
- [⌨️ Keyboard Shortcuts](#️-keyboard-shortcuts)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Why MarkFlow?

Most markdown editors feel like afterthoughts — clunky, ugly, and slow. **MarkFlow** is different.

<table>
<tr>
<td>

### 🔥 The Problem
- ❌ Editors that look like they're from 2005
- ❌ No live preview or terrible split-pane UX
- ❌ Can't export to PDF without plugins
- ❌ Dark mode? What's that?
- ❌ Lose your work when you close the tab

</td>
<td>

### ✅ The MarkFlow Solution
- ✨ Stunning glassmorphism UI with particle effects
- 🖥️ Resizable live split-pane preview
- 📄 One-click beautiful PDF export
- 🌗 Gorgeous dark & light themes with persistence
- 💾 Autosave — your content never disappears

</td>
</tr>
</table>

---

## 🎯 Features

<div align="center">

| Feature | Description |
|:---:|:---|
| 🖥️ **Split Pane Editor** | Resizable side-by-side editing with real-time live preview |
| 🌈 **Syntax Highlighting** | 30+ languages automatically highlighted — looks as good as your IDE |
| 📄 **PDF Export** | One-click export to pixel-perfect PDF preserving all formatting |
| 🌗 **Dark / Light Mode** | Beautiful theme toggle that persists across sessions |
| 💾 **Autosave** | Never lose work — auto-saves to local storage every second |
| 🔄 **Scroll Sync** | Editor and preview scroll together in perfect harmony |
| 📱 **Fully Responsive** | Works beautifully on desktop, tablet, and mobile |
| 🎨 **Formatting Toolbar** | Bold, italic, code, links, images, tables — one click away |
| 📂 **Drag & Drop** | Drop `.md` files directly into the editor |
| 🖥️ **Fullscreen Mode** | Distraction-free writing with `F11` |
| ✨ **Particle Canvas** | Interactive animated landing page with particle effects |
| 🧭 **SPA Navigation** | Smooth client-side routing with React Router |

</div>

---

## 🛠️ Tech Stack

<div align="center">

```
  ⚛️ React 19          →  UI Components & State Management
  ⚡ Vite 8             →  Lightning-fast Dev Server & Build
  🎨 Tailwind CSS 3.4   →  Utility-first Styling
  📝 Marked.js          →  Markdown → HTML Parsing
  🌈 Highlight.js       →  Code Syntax Highlighting
  🔒 DOMPurify          →  XSS-safe HTML Sanitization
  📄 html2pdf.js        →  Client-side PDF Generation
  🧭 React Router 7     →  Client-side SPA Routing
  🎯 Lucide React       →  Beautiful SVG Icons
```

</div>

---

## ⚡ Quick Start

Get MarkFlow running locally in **30 seconds** 🏃‍♂️💨

### Prerequisites

- **Node.js** 18+ installed → [Download Node.js](https://nodejs.org/)
- **npm** or **yarn** package manager

### 1️⃣ Clone the repo

```bash
git clone https://github.com/GairikBaidya/MarkFlow-MarkDown-Editor.git
cd MarkFlow-MarkDown-Editor
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the dev server

```bash
npm run dev
```

### 4️⃣ Open in browser 🎉

```
🌐 http://localhost:5173
```

> 💡 **Pro tip:** Press `o` in the terminal to open the browser automatically!

### 📦 Build for Production

```bash
npm run build     # 🏗️  Creates optimized build in /dist
npm run preview   # 👀  Preview the production build locally
```

---

## 📁 Project Structure

```
📦 MarkFlow
├── 📄 index.html                  # Entry HTML with SEO meta tags
├── 📄 package.json                # Dependencies & scripts
├── 📄 vite.config.js              # Vite configuration
├── 📄 tailwind.config.js          # Tailwind theme & design tokens
├── 📄 postcss.config.js           # PostCSS setup
├── 📁 public/
│   ├── 🎨 favicon.svg            # App favicon
│   └── 🎨 icons.svg              # SVG icon sprites
└── 📁 src/
    ├── 📄 main.jsx                # App entry point
    ├── 📄 App.jsx                 # Root component with routing
    │
    ├── 📁 pages/
    │   ├── 🏠 LandingPage.jsx     # Marketing landing page
    │   └── ✏️ EditorPage.jsx      # Main editor workspace
    │
    ├── 📁 components/
    │   ├── 📁 editor/             # Editor components
    │   │   ├── EditorHeader.jsx   # Header with toolbar & actions
    │   │   ├── EditorPane.jsx     # Markdown textarea
    │   │   ├── PreviewPane.jsx    # Rendered HTML preview
    │   │   ├── Toolbar.jsx        # Formatting toolbar
    │   │   ├── ExportButton.jsx   # PDF export button
    │   │   ├── ThemeToggle.jsx    # Dark/light mode switcher
    │   │   ├── ResizeHandle.jsx   # Draggable pane divider
    │   │   ├── StatusBar.jsx      # Word/character count
    │   │   └── MobileTabBar.jsx   # Mobile edit/preview tabs
    │   │
    │   └── 📁 landing/            # Landing page sections
    │       ├── Navbar.jsx         # Navigation bar
    │       ├── HeroSection.jsx    # Hero with CTA
    │       ├── ParticleCanvas.jsx # Animated particle background
    │       ├── FeaturesSection.jsx# Feature cards grid
    │       ├── LiveDemoSection.jsx# Interactive demo
    │       ├── HowItWorksSection.jsx # Steps section
    │       ├── TestimonialsSection.jsx # User reviews
    │       ├── FeatureCard.jsx    # Individual feature card
    │       ├── TestimonialCard.jsx# Individual testimonial
    │       ├── GradientBlobs.jsx  # Animated gradient blobs
    │       └── FooterSection.jsx  # Footer with links
    │
    ├── 📁 hooks/                  # Custom React hooks
    │   ├── useMarkdown.js         # Markdown parsing hook
    │   ├── useAutosave.js         # Local storage autosave
    │   ├── useScrollSync.js       # Synced scroll positions
    │   ├── useResizablePanes.js   # Drag-to-resize panes
    │   └── useIntersection.js     # Intersection observer
    │
    ├── 📁 lib/                    # Utility libraries
    │   ├── markdownProcessor.js   # Marked + Highlight.js pipeline
    │   └── pdfExport.js           # html2pdf export logic
    │
    └── 📁 styles/                 # CSS stylesheets
        ├── globals.css            # Global styles & design tokens
        ├── editor.css             # Editor layout styles
        ├── highlight.css          # Code block themes
        └── animations.css         # Keyframe animations
```

---

## 🎨 Themes

MarkFlow ships with two gorgeous, hand-crafted themes:

<table>
<tr>
<td align="center">

### 🌙 Dark Mode
*Midnight tones with neon accents*

- Deep `#0d1117` background
- Purple gradient accents
- Easy on the eyes for late-night writing
- Glassmorphism UI elements

</td>
<td align="center">

### ☀️ Light Mode
*Clean, bright, and professional*

- Crisp white background
- Subtle gray accents
- Perfect for daytime productivity
- Print-ready preview

</td>
</tr>
</table>

> 🎛️ Toggle between themes instantly — your preference is saved automatically!

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|:---:|:---|
| `F11` | 🖥️ Toggle fullscreen mode |
| **Toolbar** | |
| Click **B** | **Bold** text |
| Click *I* | *Italic* text |
| Click `<>` | `Inline code` |
| Click 🔗 | Insert link |
| Click 🖼️ | Insert image |
| Click 📊 | Insert table template |
| Click ➖ | Insert horizontal rule |

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! 🎉

### How to Contribute

1. 🍴 **Fork** the repo
2. 🌿 **Create** your feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. 💻 **Commit** your changes
   ```bash
   git commit -m "✨ Add amazing feature"
   ```
4. 📤 **Push** to the branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. 🔁 **Open** a Pull Request

### 💡 Ideas for Contributions

- 🔍 Find/Replace functionality
- 📋 Copy-to-clipboard for code blocks
- 📊 Mermaid diagram support
- 🔌 Plugin system for extensions
- 🌍 i18n / multi-language support
- ♿ Accessibility improvements

---

## 👨‍💻 Author

<div align="center">

**Gairik Baidya**

[![GitHub](https://img.shields.io/badge/GitHub-GairikBaidya-181717?style=for-the-badge&logo=github)](https://github.com/GairikBaidya)

</div>

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

<div align="center">

---

### ⭐ Star this repo if you found it useful! ⭐

<img src="https://user-images.githubusercontent.com/74038190/213844263-a8897a51-32f4-4b3b-b5c2-e1528b89f6f3.png" width="50" />

*Made with ❤️ and a whole lot of ☕ by [Gairik Baidya](https://github.com/GairikBaidya)*

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer" width="100%" />

</div>
