import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Snowfall from 'react-snowfall'
import ChristmasTree from './components/ChristmasTree'
import GreetingCard from './components/GreetingCard'
import './App.css'

function App() {
  const [showCard, setShowCard] = useState(false)

  // Hiện thiệp chúc mừng sau khi vẽ xong cây (5.5 giây)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCard(true)
    }, 5500)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="app">
      {/* Hiệu ứng tuyết rơi với config đẹp hơn */}
      <Snowfall
        color="#fff"
        snowflakeCount={80}
        speed={[0.5, 2]}
        wind={[-0.5, 1]}
        radius={[0.5, 2.5]}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          opacity: 0.8
        }}
      />

      <div className="container">
        {/* Tiêu đề - không có emoji, sang trọng hơn */}
        <motion.h1 
          className="title"
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.3,
            ease: [0.6, 0.05, 0.01, 0.9]
          }}
        >
          Chúc Mừng Giáng Sinh
        </motion.h1>

        {/* Subtitle nhỏ */}
        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Merry Christmas
        </motion.p>

        {/* Cây thông với hiệu ứng vẽ */}
        <ChristmasTree />

        {/* Thiệp chúc mừng */}
        <GreetingCard show={showCard} />
      </div>
    </div>
  )
}

export default App

