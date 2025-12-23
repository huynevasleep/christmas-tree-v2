# 📂 Cấu Trúc Dự Án Chi Tiết

## 🌲 Tổng quan cây thư mục

```
christmas-tree-v2/
│
├── 📄 Tài liệu
│   ├── README.md              ← Tài liệu chính, tổng quan dự án
│   ├── QUICKSTART.md          ← Hướng dẫn khởi chạy nhanh
│   ├── CUSTOMIZATION.md       ← Hướng dẫn tùy chỉnh chi tiết
│   └── PROJECT_STRUCTURE.md   ← File này - cấu trúc dự án
│
├── ⚙️ Cấu hình
│   ├── .gitignore             ← Git ignore rules
│   ├── .eslintrc.cjs          ← ESLint configuration
│   ├── jsconfig.json          ← JavaScript project config
│   ├── vite.config.js         ← Vite build tool config
│   └── package.json           ← Dependencies & scripts
│
├── 🌐 Entry point
│   └── index.html             ← HTML template chính
│
├── 📦 Assets tĩnh
│   └── public/
│       └── christmas.svg      ← Favicon cây thông
│
└── 💻 Source code
    └── src/
        ├── main.jsx           ← React entry point
        ├── index.css          ← Global styles
        ├── App.jsx            ← Root component
        ├── App.css            ← App styles
        └── components/        ← React components
            ├── ChristmasTree.jsx      ← Component cây thông
            ├── ChristmasTree.css      ← Styles cây thông
            ├── GreetingCard.jsx       ← Component thiệp
            └── GreetingCard.css       ← Styles thiệp
```

---

## 📝 Chi tiết từng file

### 📄 Tài liệu

| File | Mục đích | Khi nào đọc |
|------|----------|-------------|
| `README.md` | Giới thiệu tổng quan, tính năng, cài đặt | Đọc đầu tiên |
| `QUICKSTART.md` | Hướng dẫn chạy nhanh 3 bước | Khi muốn setup nhanh |
| `CUSTOMIZATION.md` | Hướng dẫn tùy chỉnh chi tiết | Khi muốn thay đổi giao diện |
| `PROJECT_STRUCTURE.md` | Giải thích cấu trúc dự án | Khi muốn hiểu codebase |

### ⚙️ Cấu hình

| File | Công dụng |
|------|-----------|
| `.gitignore` | Loại trừ `node_modules/`, `dist/` khỏi Git |
| `.eslintrc.cjs` | Quy tắc linting cho code quality |
| `jsconfig.json` | Config cho VS Code IntelliSense |
| `vite.config.js` | Config build tool (React plugin) |
| `package.json` | Dependencies & npm scripts |

### 🌐 HTML

**`index.html`**
- HTML template chính
- Load favicon từ `/christmas.svg`
- Mount React app vào `<div id="root">`
- Import entry point: `/src/main.jsx`

### 📦 Public Assets

**`public/christmas.svg`**
- Favicon cây thông SVG
- Hiển thị trên tab browser
- Icon đơn giản, lightweight

### 💻 Source Code

#### **Entry Point**

**`src/main.jsx`**
```
React.render() → mount <App /> vào DOM
```

**`src/index.css`**
- Reset CSS (*{ margin: 0; padding: 0 })
- Background gradient cho body
- Global styles

#### **Root Component**

**`src/App.jsx`**
- Component gốc
- Quản lý state `showCard`
- Render: Title + ChristmasTree + GreetingCard
- Include Snowfall effect

**`src/App.css`**
- Style cho `.container`
- Animation glow cho title
- Responsive breakpoints

#### **Components**

**`src/components/ChristmasTree.jsx`**
- Component vẽ cây thông bằng SVG
- Sử dụng Framer Motion cho animation
- Features:
  - Vẽ 5 tầng lá + thân cây
  - Ngôi sao phát sáng ở đỉnh
  - 30+ đèn LED nhấp nháy
  - pathLength animation cho stroke
- State: `showLights` - hiện đèn sau khi vẽ xong

**`src/components/ChristmasTree.css`**
- Style container cho SVG
- Drop shadow effect
- Responsive cho mobile

**`src/components/GreetingCard.jsx`**
- Component thiệp chúc mừng
- Props: `show` (boolean)
- Features:
  - Spring animation khi xuất hiện
  - Staggered animation cho text
  - Tuyết rơi bên trong thiệp
  - Biểu tượng trang trí với animation
- Sử dụng AnimatePresence cho exit animation

**`src/components/GreetingCard.css`**
- Overlay full screen với backdrop blur
- Card gradient background
- Shimmer effect
- Snowflake animations
- Responsive styles

---

## 🔄 Data Flow

```
User visits
    ↓
index.html loaded
    ↓
main.jsx executed
    ↓
<App /> rendered
    ↓
    ├─→ <Snowfall /> (background)
    ├─→ <h1> Title with glow
    ├─→ <ChristmasTree />
    │       ├─→ Draw star (0.2s)
    │       ├─→ Draw layer 1 (0.5-2s)
    │       ├─→ Draw layer 2 (1-2.5s)
    │       ├─→ ... layer 3,4,5
    │       ├─→ Draw trunk (3.5-5s)
    │       └─→ Show lights (5.5s)
    │
    └─→ <GreetingCard show={false} />
            ↓
        (After 6s)
            ↓
        <GreetingCard show={true} />
            ├─→ Backdrop fade in
            ├─→ Card zoom + rotate
            ├─→ Text stagger animation
            └─→ Snowflakes fall
```

---

## 🎨 Style Architecture

```
Global Styles (index.css)
    ↓
App Styles (App.css)
    ↓
    ├─→ Component Styles (ChristmasTree.css)
    └─→ Component Styles (GreetingCard.css)
```

**CSS Methodology:**
- Scoped styles per component
- BEM-like naming
- Responsive with media queries
- CSS animations + Framer Motion

---

## 📦 Dependencies

### Production
- `react` - UI library
- `react-dom` - DOM renderer
- `framer-motion` - Animation library
- `react-snowfall` - Snowfall effect

### Development
- `vite` - Build tool
- `@vitejs/plugin-react` - React support
- `eslint` + plugins - Code linting

---

## 🚀 Scripts

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server (port 5173) |
| `npm run build` | Build for production → `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🎯 Component Responsibilities

| Component | Responsibility | Key Features |
|-----------|----------------|--------------|
| `App` | Root orchestrator | State management, layout |
| `ChristmasTree` | Draw tree | SVG paths, animations, lights |
| `GreetingCard` | Show greeting | Modal overlay, text animations |

---

## 💡 Key Technologies

1. **SVG + pathLength**: Vẽ đường stroke animation
2. **Framer Motion**: Declarative animations
3. **React Hooks**: useState, useEffect
4. **CSS Variables**: Không dùng (có thể thêm)
5. **Vite HMR**: Hot module replacement

---

## 📈 Performance Considerations

- SVG rendering: 1 SVG, nhiều paths → tối ưu
- Framer Motion: GPU-accelerated
- Snowfall: Canvas-based, configurable
- No external API calls
- No images (chỉ SVG) → fast load

---

## 🔧 Extensibility

### Dễ dàng thêm:
- ✅ Component mới vào `src/components/`
- ✅ Assets vào `public/`
- ✅ Animation variants trong components
- ✅ Utility functions → `src/utils/`

### Khó thêm:
- ❌ Backend logic (static site)
- ❌ Database (no backend)
- ❌ User authentication (frontend only)

---

## 📱 Responsive Design

| Breakpoint | Device | Adjustments |
|------------|--------|-------------|
| > 768px | Desktop | Full size |
| ≤ 768px | Mobile | Smaller fonts, padding |

Media query location: `*.css` files

---

## 🎓 Learning Path

**Nếu bạn mới:**

1. Đọc `QUICKSTART.md` → chạy project
2. Xem `src/App.jsx` → hiểu structure
3. Xem `ChristmasTree.jsx` → học SVG + animation
4. Xem `GreetingCard.jsx` → học Modal + timing
5. Đọc `CUSTOMIZATION.md` → thử thay đổi

**Nếu bạn có kinh nghiệm:**

1. Check `package.json` → dependencies
2. Review `vite.config.js` → build config
3. Analyze component structure
4. Modify & extend

---

**Happy Coding! 🎄✨**

