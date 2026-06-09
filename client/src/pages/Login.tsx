import { useState } from "react"
import { heroSectionData } from "../assets/assets"

const Login = () => {
  const [isLoginState, setIsLoginState] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => window.location.href = "/", 1000)
  }

  return (
    <div className="min-h-screen flex">

      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 bg-app-green relative items-center justify-center">
        <img
          src={heroSectionData.hero_image}
          alt=""
          className="absolute inset-0 object-cover h-full bg-center opacity-10"
        />
        <div className="relative text-center px-12">
          <h2 className="text-4xl font-semibold text-white mb-4">
            Welcome back to Grocify
          </h2>
          <p className="text-white/60 font-serif text-xl max-w-sm mx-auto">
            Fresh groceries and organic produce, delivered to your doorstep.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-semibold mb-2">
            {isLoginState ? "Sign In" : "Create Account"}
          </h2>
          <p className="text-gray-500 mb-8">
            {isLoginState ? "Welcome back! Please enter your details." : "Sign up to get started."}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {!isLoginState && (
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-app-green"
              />
            )}

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-app-green"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-app-green"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-app-green text-white py-3 rounded-lg font-medium hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Please wait..." : isLoginState ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <p className="text-center text-gray-500 mt-6">
            {isLoginState ? "Don't have an account?" : "Already have an account?"}
            <span
              onClick={() => setIsLoginState(!isLoginState)}
              className="text-app-green font-medium cursor-pointer ml-1"
            >
              {isLoginState ? "Sign Up" : "Sign In"}
            </span>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Login