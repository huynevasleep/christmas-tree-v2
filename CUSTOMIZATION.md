# 🎨 Hướng Dẫn Tùy Chỉnh

Tài liệu này sẽ hướng dẫn bạn cách tùy chỉnh trang web Giáng Sinh theo ý muốn.

## 📝 Mục lục

- [Thay đổi màu sắc](#thay-đổi-màu-sắc)
- [Điều chỉnh animation](#điều-chỉnh-animation)
- [Thay đổi nội dung thiệp](#thay-đổi-nội-dung-thiệp)
- [Tùy chỉnh cây thông](#tùy-chỉnh-cây-thông)
- [Hiệu ứng tuyết rơi](#hiệu-ứng-tuyết-rơi)

---

## 🎨 Thay đổi màu sắc

### Màu nền tổng thể

File: `src/index.css` (dòng 7)

```css
background: linear-gradient(to bottom, #0f2027, #203a43, #2c5364);
```

Thay đổi các mã màu hex để có gradient khác.

### Màu cây thông

File: `src/components/ChristmasTree.jsx`

```jsx
// Màu viền cây
stroke="#0B6623"

// Màu tô cây
fill="#0B6623"
```

### Màu thiệp chúc mừng

File: `src/components/GreetingCard.css` (dòng 13)

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

---

## ⚡ Điều chỉnh animation

### Tốc độ vẽ cây thông

File: `src/components/ChristmasTree.jsx`

Thay đổi `duration` trong các animation:

```jsx
transition: {
  pathLength: { duration: 1.5 }, // Thời gian vẽ (giây)
  opacity: { duration: 0.3 }
}
```

### Độ trễ giữa các tầng

```jsx
transition={{ delay: 0.5 }}  // Tầng 1
transition={{ delay: 1 }}    // Tầng 2
transition={{ delay: 1.5 }}  // Tầng 3
```

Tăng/giảm số để thay đổi khoảng cách thời gian.

### Thời gian hiện thiệp

File: `src/App.jsx` (dòng 11)

```jsx
setTimeout(() => {
  setShowCard(true)
}, 6000) // 6000ms = 6 giây
```

---

## 💌 Thay đổi nội dung thiệp

File: `src/components/GreetingCard.jsx`

```jsx
<h2>🎅 Giáng Sinh An Lành 🎅</h2>
<p>Chúc bạn một mùa Giáng Sinh tràn ngập niềm vui,</p>
<p>Hạnh phúc và may mắn!</p>
<p className="wishes">🎁 Merry Christmas! 🎁</p>
```

Thay đổi nội dung text trong các thẻ `<h2>` và `<p>`.

### Thêm hình ảnh vào thiệp

```jsx
<img src="/your-image.png" alt="Christmas" style={{ width: '100px' }} />
```

---

## 🎄 Tùy chỉnh cây thông

### Kích thước cây

File: `src/components/ChristmasTree.jsx` (dòng 104)

```jsx
<svg width="600" height="700" viewBox="0 0 600 700">
```

Thay đổi `width` và `height`.

### Độ dày đường vẽ

```jsx
strokeWidth="4"  // Tăng số này để đường vẽ dày hơn
```

### Thay đổi vị trí đèn trang trí

File: `src/components/ChristmasTree.jsx` (dòng 44)

```jsx
const lights = [
  { x: 300, y: 180, color: '#FF0000' }, // x,y = tọa độ, color = màu
  { x: 280, y: 200, color: '#FFD700' },
  // Thêm hoặc xóa các đèn
]
```

### Thêm màu đèn mới

```jsx
{ x: 350, y: 250, color: '#00FFFF' }, // Màu cyan
```

### Thay đổi ngôi sao

```jsx
<motion.path
  d="M 300 60 L 315 95 L 352 100 ..." // Path của ngôi sao
  fill="#FFD700"  // Màu vàng
  stroke="#FFA500" // Viền cam
/>
```

---

## ❄️ Hiệu ứng tuyết rơi

File: `src/App.jsx` (dòng 19)

### Số lượng tuyết

```jsx
<Snowfall
  snowflakeCount={100}  // Tăng/giảm số lượng bông tuyết
  color="white"
/>
```

### Màu tuyết

```jsx
color="white"  // Thay đổi thành "lightblue", "#E0F7FF", etc.
```

### Tốc độ rơi

```jsx
<Snowfall
  snowflakeCount={100}
  speed={[0.5, 3.0]}  // [min, max] tốc độ
/>
```

### Kích thước bông tuyết

```jsx
<Snowfall
  snowflakeCount={100}
  radius={[0.5, 3.0]}  // [min, max] bán kính
/>
```

### Tắt tuyết rơi

Xóa hoặc comment component `<Snowfall />` trong `src/App.jsx`.

---

## 🎭 Hiệu ứng nâng cao

### Thêm âm thanh

1. Thêm file nhạc vào folder `public/`
2. Trong `src/App.jsx`:

```jsx
import { useEffect } from 'react'

useEffect(() => {
  const audio = new Audio('/music.mp3')
  audio.loop = true
  audio.play()
}, [])
```

### Thêm hiệu ứng hover cho đèn

File: `src/components/ChristmasTree.css`

```css
circle {
  cursor: pointer;
  transition: transform 0.3s;
}

circle:hover {
  transform: scale(1.5);
}
```

### Animation lặp cho ngôi sao

File: `src/components/ChristmasTree.jsx`

```jsx
<motion.g
  animate={{ 
    rotate: [0, 10, -10, 0],
    scale: [1, 1.1, 1]
  }}
  transition={{
    duration: 3,
    repeat: Infinity
  }}
>
  {/* Ngôi sao */}
</motion.g>
```

---

## 🔧 Tips hữu ích

1. **Live Preview**: Khi chạy `npm run dev`, mọi thay đổi sẽ tự động reload
2. **Console Errors**: Mở F12 để xem lỗi nếu có
3. **Performance**: Giảm `snowflakeCount` nếu web chạy chậm
4. **Mobile**: Test trên mobile bằng cách truy cập `http://YOUR_IP:5173`

---

## 💡 Ví dụ tùy chỉnh nhanh

### Theme đỏ - vàng

```jsx
// Nền
background: linear-gradient(to bottom, #8B0000, #DC143C, #FF6347);

// Cây màu vàng gold
fill="#FFD700"
stroke="#FFA500"

// Thiệp màu đỏ
background: linear-gradient(135deg, #DC143C 0%, #8B0000 100%);
```

### Theme xanh dương - trắng

```jsx
// Nền
background: linear-gradient(to bottom, #001f3f, #0074D9, #7FDBFF);

// Thiệp màu xanh
background: linear-gradient(135deg, #0074D9 0%, #001f3f 100%);
```

---

Chúc bạn vui vẻ với việc tùy chỉnh! 🎄✨

Nếu có thắc mắc, hãy tham khảo [Framer Motion docs](https://www.framer.com/motion/).

