import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')
  const [slimToken, setSlimToken] = useState('')
  const [slimToken2, setSlimToken2] = useState('')

  const generatePassword = () => {
    axios.get('http://localhost:7000/api/generate-token')
      .then(response => {
        const { password, token, slimToken, slimToken2 } = response.data
        setPassword(password)
        setToken(token)
        setSlimToken(slimToken)
        setSlimToken2(slimToken2)
      })
      .catch(error => {
        console.error('There was an error generating the password!', error)
      })
  }

  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Генератор паролей</h1>
        <button
          onClick={generatePassword}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Сгенерировать пароль
        </button>
        <div className="mt-6">
          
          <p className="text-lg w-96 break-words overflow-hidden"><strong>Ваш безопасный токен:</strong> {token}</p>
          <p className="text-lg"><strong>Обычный пароль:</strong> {password}</p>
          <p className="text-lg"><strong>Затокенированный пароль:</strong> {slimToken}</p>
          <p className="text-lg"><strong>Закешированный пароль:</strong> {slimToken2}</p>
        </div>
      </div>
      <div className="text-center p-6 bg-white text-4xl rounded-lg shadow-lg mt-4">
        Powered by Sokolov
      </div>
    </div>
  )
}

export default App
