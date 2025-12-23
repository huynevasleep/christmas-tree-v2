# ⚡ Quick Start Guide

Hướng dẫn nhanh để chạy dự án trong 3 bước đơn giản!

## 📦 Bước 1: Cài đặt

```bash
npm install
```

Hoặc nếu dùng yarn:

```bash
yarn install
```

## 🚀 Bước 2: Chạy development server

```bash
npm run dev
```

Hoặc:

```bash
yarn dev
```

## 🌐 Bước 3: Mở trình duyệt

Truy cập: **http://localhost:5173**

---

## 📱 Xem trên mobile

1. Kiểm tra IP máy tính của bạn
2. Đảm bảo mobile và máy tính cùng mạng WiFi
3. Trên mobile, truy cập: `http://YOUR_IP:5173`

---

## 🏗️ Build cho production

```bash
npm run build
```

Folder `dist/` sẽ chứa files production.

Preview build:

```bash
npm run preview
```

---

## 🎨 Tùy chỉnh

Xem file [CUSTOMIZATION.md](./CUSTOMIZATION.md) để biết cách tùy chỉnh chi tiết.

---

## ❓ Gặp vấn đề?

### Lỗi: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 5173 đã được dùng
```bash
npm run dev -- --port 3000
```

### Trang trắng, không hiện gì
1. Mở F12 Console
2. Kiểm tra có lỗi không
3. Thử hard refresh: `Ctrl + Shift + R`

---

**Enjoy! 🎄✨**

