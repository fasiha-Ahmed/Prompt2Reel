export default function Navbar() {
    return (
      <nav className="flex items-center justify-between py-6">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-blue-500">
            🎬 Prompt2Reel AI
          </h1>
        </div>
  
        {/* Navigation Links */}
        <div className="flex gap-8 text-gray-300">
          <a href="#" className="hover:text-white">Features</a>
          <a href="#" className="hover:text-white">Pricing</a>
          <a href="#" className="hover:text-white">Login</a>
  
          <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </nav>
    );
  }