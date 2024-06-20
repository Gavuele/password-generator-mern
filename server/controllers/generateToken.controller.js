const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
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
    const hashedPassword = bcrypt.hashSync(password, 10)
    const token = jwt.sign({ password: hashedPassword }, process.env.JWT_SECRET,  { expiresIn: '1h' })
    const slimToken = token.slice(70, 90) // Отображаем числа токена от 40 до 60
    const slimToken2 = token.slice(90, 110)
    res.json({ password, token, slimToken, slimToken2 })
}


module.exports = {
    generateToken
  }
  