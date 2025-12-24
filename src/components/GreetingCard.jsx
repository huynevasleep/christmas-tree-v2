import { motion, AnimatePresence } from 'framer-motion'
import './GreetingCard.css'

const GreetingCard = ({ show }) => {
  const cardVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      y: 50
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        delay: 0.2
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15 + 0.5,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  }

  const snowflakeVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: [0.4, 0.8, 0.4],
      y: [0, 150, 300],
      x: [0, Math.sin(i) * 15, Math.sin(i * 2) * 30],
      transition: {
        duration: 4,
        repeat: Infinity,
        delay: i * 0.2
      }
    })
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="greeting-card-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="greeting-card-simple"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Background pattern */}
            <div className="card-pattern"></div>
            
            {/* Nội dung thiệp */}
            <div className="card-content">
              <motion.div
                className="ornament-top"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                ✦ ❅ ✦
              </motion.div>

              <motion.h2
                className="card-title"
                variants={contentVariants}
                custom={0}
                initial="hidden"
                animate="visible"
              >
                Giáng Sinh An Lành
              </motion.h2>

              <motion.div 
                className="card-message"
                variants={contentVariants}
                custom={1}
                initial="hidden"
                animate="visible"
              >
                <p className="greeting-intro">
                  Dear Nhã Hân,
                </p>
                <br/>
                <p className="blessing">
                  Mùa Giáng sinh này, mong bạn luôn giữ được<br/>
                  nụ cười tươi tắn và ánh mắt lấp lánh ấy.<br/>
                  <br/>
                  Hãy mạnh mẽ bước tiếp, dù có khó khăn,<br/>
                  vì bạn mạnh mẽ hơn những gì bạn nghĩ.<br/>
                  <br/>
                  Hãy tự tin tỏa sáng theo cách riêng của mình,<br/>
                  vì bạn xứng đáng với mọi điều tốt đẹp nhất.<br/>
                  <br/>
                  Luôn vui vẻ, tự tin và mạnh mẽ nhé!
                </p>
              </motion.div>

              <motion.div
                className="signature"
                variants={contentVariants}
                custom={2}
                initial="hidden"
                animate="visible"
              >
                <div className="signature-line">Merry Christmas</div>
                <div className="signature-year">2025</div>
              </motion.div>

              <motion.div
                className="ornament-bottom"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                ❅ ✦ ❅
              </motion.div>
            </div>

            {/* Tuyết rơi */}
            <div className="card-snow-container">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="snow-particle"
                  variants={snowflakeVariants}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  style={{ left: `${(i + 1) * 6.5}%` }}
                >
                  ❅
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default GreetingCard

