# 🎄 Christmas Tree - Trang Web Chúc Mừng Giáng Sinh

Trang web chúc mừng Giáng sinh với hiệu ứng vẽ cây thông bằng đường nét và thiệp chúc mừng đẹp mắt.

## ✨ Tính năng

- 🎨 **Hiệu ứng vẽ cây thông**: Cây thông được vẽ từng đường nét một cách mượt mà bằng SVG animation
- 💡 **Đèn trang trí**: Đèn LED nhiều màu sắc nhấp nháy trên cây
- 🎁 **Thiệp chúc mừng**: Thiệp xuất hiện với animation đẹp mắt sau khi vẽ xong cây
- ❄️ **Tuyết rơi**: Hiệu ứng tuyết rơi tự nhiên trên toàn bộ trang
- 📱 **Responsive**: Hoạt động tốt trên mọi thiết bị

## 🛠️ Công nghệ sử dụng

- **React 18** - UI Framework
- **Vite** - Build tool nhanh chóng
- **Framer Motion** - Animation library mạnh mẽ
- **react-snowfall** - Hiệu ứng tuyết rơi
- **SVG** - Vẽ cây thông với stroke animation

## 🚀 Cài đặt và chạy

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Chạy development server

```bash
npm run dev
```

Truy cập: `http://localhost:5173`

### 3. Build cho production

```bash
npm run build
```

### 4. Preview build production

```bash
npm run preview
```

## 📁 Cấu trúc thư mục

```
christmas-tree-v2/
├── public/                        # Assets tĩnh
│   └── christmas.svg              # Favicon cây thông
├── src/                          # Source code
│   ├── components/               # React components
│   │   ├── ChristmasTree.jsx     # Component cây thông với SVG animation
│   │   ├── ChristmasTree.css     # Style cho cây thông
│   │   ├── GreetingCard.jsx      # Component thiệp chúc mừng
│   │   └── GreetingCard.css      # Style cho thiệp
│   ├── App.jsx                   # Component chính
│   ├── App.css                   # Style tổng thể
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles
├── .eslintrc.cjs                 # ESLint configuration
├── .gitignore                    # Git ignore rules
├── index.html                    # HTML template
├── jsconfig.json                 # JavaScript configuration
├── package.json                  # Dependencies & scripts
├── vite.config.js                # Vite configuration
└── README.md                     # Hướng dẫn
```

## 🎨 Tùy chỉnh

### Thay đổi thời gian animation

Trong `src/App.jsx`, dòng 11:
```javascript
setTimeout(() => {
  setShowCard(true)
}, 6000) // Thay đổi số này (milliseconds)
```

### Thay đổi màu sắc đèn

Trong `src/components/ChristmasTree.jsx`, mảng `lights`:
```javascript
const lights = [
  { x: 300, y: 180, color: '#FF0000' }, // Thay đổi color
  // ...
]
```

### Thay đổi số lượng tuyết rơi

Trong `src/App.jsx`:
```javascript
<Snowfall
  snowflakeCount={100} // Thay đổi số này
  // ...
/>
```

## 📝 License

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại.

## 🎅 Chúc mừng

Chúc bạn một mùa Giáng sinh an lành, hạnh phúc và tràn đầy niềm vui! 🎄✨

