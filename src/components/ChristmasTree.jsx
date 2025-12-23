import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import './ChristmasTree.css'

const ChristmasTree = () => {
  const [showLights, setShowLights] = useState(false)
  const [glowIntensity, setGlowIntensity] = useState(0.5)

  // Hiện đèn trang trí sau khi vẽ xong cây
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLights(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  // Pulsing glow effect cho cây
  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity(Math.random() * 0.3 + 0.5)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Cấu hình animation cho SVG paths
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, ease: "easeInOut" },
        opacity: { duration: 0.3 }
      }
    }
  }

  // Animation cho ngôi sao
  const starVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.2 }
    }
  }

  // Animation cho đèn trang trí
  const lightVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: [0.5, 1, 0.5],
      transition: {
        scale: { duration: 0.3, delay: i * 0.05 },
        opacity: {
          duration: 2,
          repeat: Infinity,
          delay: i * 0.1
        }
      }
    })
  }

  // Vị trí các đèn trang trí - phù hợp với zigzag pattern
  const lights = [
    // Đỉnh
    { x: 300, y: 145, color: '#FFD700', size: 4 },
    
    // Tầng 1 - gần đường zigzag
    { x: 285, y: 168, color: '#FFA500', size: 4 },
    { x: 300, y: 175, color: '#FF6B6B', size: 5 },
    { x: 315, y: 168, color: '#4ECDC4', size: 4 },
    
    // Tầng 2
    { x: 270, y: 210, color: '#FFD700', size: 5 },
    { x: 285, y: 223, color: '#95E1D3', size: 4 },
    { x: 300, y: 218, color: '#FFA500', size: 6 },
    { x: 315, y: 223, color: '#FF6B6B', size: 4 },
    { x: 330, y: 210, color: '#4ECDC4', size: 5 },
    
    // Tầng 3
    { x: 255, y: 262, color: '#4ECDC4', size: 5 },
    { x: 270, y: 275, color: '#FFD700', size: 4 },
    { x: 285, y: 280, color: '#FF6B6B', size: 5 },
    { x: 300, y: 270, color: '#FFA500', size: 7 },
    { x: 315, y: 280, color: '#95E1D3', size: 5 },
    { x: 330, y: 275, color: '#4ECDC4', size: 4 },
    { x: 345, y: 262, color: '#FFD700', size: 5 },
    
    // Tầng 4
    { x: 240, y: 318, color: '#FFA500', size: 5 },
    { x: 260, y: 330, color: '#FFD700', size: 6 },
    { x: 275, y: 340, color: '#FF6B6B', size: 5 },
    { x: 290, y: 335, color: '#4ECDC4', size: 6 },
    { x: 300, y: 328, color: '#95E1D3', size: 7 },
    { x: 310, y: 335, color: '#FFD700', size: 6 },
    { x: 325, y: 340, color: '#FFA500', size: 5 },
    { x: 340, y: 330, color: '#FF6B6B', size: 6 },
    { x: 360, y: 318, color: '#4ECDC4', size: 5 },
    
    // Tầng 5
    { x: 220, y: 378, color: '#FFD700', size: 6 },
    { x: 240, y: 395, color: '#4ECDC4', size: 5 },
    { x: 260, y: 405, color: '#FFA500', size: 6 },
    { x: 280, y: 410, color: '#FF6B6B', size: 5 },
    { x: 300, y: 402, color: '#95E1D3', size: 7 },
    { x: 320, y: 410, color: '#FFD700', size: 5 },
    { x: 340, y: 405, color: '#4ECDC4', size: 6 },
    { x: 360, y: 395, color: '#FFA500', size: 5 },
    { x: 380, y: 378, color: '#FF6B6B', size: 6 },
    
    // Tầng 6
    { x: 195, y: 448, color: '#4ECDC4', size: 6 },
    { x: 218, y: 465, color: '#FFD700', size: 5 },
    { x: 240, y: 475, color: '#FFA500', size: 6 },
    { x: 265, y: 485, color: '#FF6B6B', size: 5 },
    { x: 285, y: 488, color: '#95E1D3', size: 6 },
    { x: 300, y: 480, color: '#FFD700', size: 8 },
    { x: 315, y: 488, color: '#4ECDC4', size: 6 },
    { x: 335, y: 485, color: '#FFA500', size: 5 },
    { x: 360, y: 475, color: '#FF6B6B', size: 6 },
    { x: 382, y: 465, color: '#95E1D3', size: 5 },
    { x: 405, y: 448, color: '#FFD700', size: 6 },
    
    // Tầng 7 - đáy
    { x: 170, y: 515, color: '#FFA500', size: 6 },
    { x: 195, y: 532, color: '#FFD700', size: 5 },
    { x: 220, y: 545, color: '#4ECDC4', size: 6 },
    { x: 245, y: 555, color: '#FF6B6B', size: 5 },
    { x: 270, y: 562, color: '#95E1D3', size: 6 },
    { x: 300, y: 565, color: '#FFD700', size: 8 },
    { x: 330, y: 562, color: '#4ECDC4', size: 6 },
    { x: 355, y: 555, color: '#FFA500', size: 5 },
    { x: 380, y: 545, color: '#FF6B6B', size: 6 },
    { x: 405, y: 532, color: '#95E1D3', size: 5 },
    { x: 430, y: 515, color: '#FFD700', size: 6 },
  ]

  return (
    <div className="tree-container">
      <svg width="600" height="700" viewBox="0 0 600 700">
        {/* Ngôi sao - style mới đẹp hơn */}
        <motion.g
          variants={starVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Inner star glow */}
          <motion.path
            d="M 300 70 L 312 98 L 342 102 L 321 122 L 326 152 L 300 138 L 274 152 L 279 122 L 258 102 L 288 98 Z"
            fill="#FFD700"
            opacity="0.3"
            filter="url(#starGlow)"
          />
          {/* Main star */}
          <motion.path
            d="M 300 70 L 312 98 L 342 102 L 321 122 L 326 152 L 300 138 L 274 152 L 279 122 L 258 102 L 288 98 Z"
            fill="url(#goldGradient)"
            stroke="#FFA500"
            strokeWidth="2.5"
            filter="url(#starGlow)"
          />
          {/* Star sparkles */}
          <motion.circle
            cx="300"
            cy="70"
            r="3"
            fill="#FFF"
            opacity="0.8"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />
        </motion.g>

        {/* Cây thông với zigzag pattern đẹp giống thật */}
        
        {/* Bên TRÁI cây - từ đỉnh xuống với zigzag mượt mà */}
        <motion.path
          d="M 300 130 
             L 280 160 L 290 165 
             L 265 200 L 280 205
             L 250 245 L 270 250
             L 235 295 L 258 300
             L 215 350 L 242 355
             L 190 410 L 222 415
             L 165 475 L 202 480
             L 145 540 L 185 545
             L 140 590 L 265 595"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 2.5, ease: "easeInOut" }}
          filter="url(#lineGlow)"
          style={{ opacity: glowIntensity }}
        />

        {/* Bên PHẢI cây - từ đỉnh xuống với zigzag mượt mà */}
        <motion.path
          d="M 300 130 
             L 320 160 L 310 165
             L 335 200 L 320 205
             L 350 245 L 330 250
             L 365 295 L 342 300
             L 385 350 L 358 355
             L 410 410 L 378 415
             L 435 475 L 398 480
             L 455 540 L 415 545
             L 460 590 L 335 595"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 2.5, ease: "easeInOut" }}
          filter="url(#lineGlow)"
          style={{ opacity: glowIntensity }}
        />

        {/* Các đường ngang tạo tầng lá - từ trên xuống */}
        <motion.path
          d="M 290 165 L 310 165"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1, duration: 0.4 }}
          filter="url(#lineGlow)"
        />
        
        <motion.path
          d="M 280 205 L 320 205"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.3, duration: 0.4 }}
          filter="url(#lineGlow)"
        />
        
        <motion.path
          d="M 270 250 L 330 250"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.6, duration: 0.4 }}
          filter="url(#lineGlow)"
        />
        
        <motion.path
          d="M 258 300 L 342 300"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.9, duration: 0.5 }}
          filter="url(#lineGlow)"
        />
        
        <motion.path
          d="M 242 355 L 358 355"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.2, duration: 0.5 }}
          filter="url(#lineGlow)"
        />
        
        <motion.path
          d="M 222 415 L 378 415"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.5, duration: 0.6 }}
          filter="url(#lineGlow)"
        />
        
        <motion.path
          d="M 202 480 L 398 480"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.8, duration: 0.6 }}
          filter="url(#lineGlow)"
        />
        
        <motion.path
          d="M 185 545 L 415 545"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 3.1, duration: 0.6 }}
          filter="url(#lineGlow)"
        />

        {/* Đáy cây */}
        <motion.path
          d="M 140 590 Q 300 600, 460 590"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 3.4, duration: 0.8 }}
          filter="url(#lineGlow)"
          style={{ opacity: glowIntensity }}
        />

        {/* Thân cây */}
        <motion.path
          d="M 265 595 L 268 655 L 275 690"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 4, duration: 0.8 }}
          filter="url(#lineGlow)"
          style={{ opacity: glowIntensity }}
        />
        <motion.path
          d="M 335 595 L 332 655 L 325 690"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 4, duration: 0.8 }}
          filter="url(#lineGlow)"
          style={{ opacity: glowIntensity }}
        />
        <motion.path
          d="M 275 690 Q 300 692, 325 690"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 4.5, duration: 0.5 }}
          filter="url(#lineGlow)"
          style={{ opacity: glowIntensity }}
        />

        {/* Đèn trang trí - với size và glow tự nhiên hơn */}
        {showLights && lights.map((light, index) => (
          <motion.g key={index}>
            {/* Glow halo */}
            <motion.circle
              cx={light.x}
              cy={light.y}
              r={light.size * 2}
              fill={light.color}
              opacity="0.2"
              filter="url(#lightGlow)"
              variants={lightVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            />
            {/* Main light */}
            <motion.circle
              cx={light.x}
              cy={light.y}
              r={light.size}
              fill={light.color}
              filter="url(#lightGlow)"
              variants={lightVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            />
            {/* Sparkle */}
            <motion.circle
              cx={light.x}
              cy={light.y}
              r={light.size * 0.3}
              fill="#FFF"
              opacity="0.8"
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 1.5 + (index % 3) * 0.5,
                repeat: Infinity,
                delay: index * 0.05
              }}
            />
          </motion.g>
        ))}

        {/* Định nghĩa filters và gradients cho hiệu ứng đẹp */}
        <defs>
          {/* Gold gradient cho đường viền cây */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#FFA500', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#DAA520', stopOpacity: 1 }} />
          </linearGradient>

          {/* Glow cho ngôi sao */}
          <filter id="starGlow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Glow cho đường viền cây */}
          <filter id="lineGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Glow cho đèn */}
          <filter id="lightGlow">
            <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export default ChristmasTree

