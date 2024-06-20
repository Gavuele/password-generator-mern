const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

// Генерация пароля 
const generatePass = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let password = ''
    for (let i = 0; i < 8; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length))
      }
      return password
}

// Генерация токена
const generateToken = (req, res) => {
    const password = generatePass()
    const token = jwt.sign({ password }, process.env.JWT_SECRET,  { expiresIn: '1h' })
    const slimToken = token.slice(110, 130) // Отображаем числа токена от 110 до 130
    const slimToken2 = token.slice(130, 150)
    res.json({ password, token, slimToken, slimToken2 })
}


module.exports = {
    generateToken
  }
  