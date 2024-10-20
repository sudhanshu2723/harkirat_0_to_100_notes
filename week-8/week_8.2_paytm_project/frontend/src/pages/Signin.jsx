import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
     console.log(username)
    console.log(password)
  async function submitHandler(e) {
    e.preventDefault(); // Prevent page refresh on submit
    const response = await axios.post('http://localhost:3001/api/v1/user/signin', {
      username, 
      password,
  });
    console.log(response)
    localStorage.setItem("token", response.data.token)
    navigate(`/dashboard?userId=${response.data.userId}`)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
        <p className="text-center text-gray-600 mb-8">Enter your credentials to access your account</p>

        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
