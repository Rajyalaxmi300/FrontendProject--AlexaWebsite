export default function Navbar() {
  return (
    <nav className="bg-black p-4 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-bold hover:text-green-400 transition-all duration-300">
          Alexa Developers SRM
        </a>
        <ul className="flex space-x-6 text-white">
          <li>
            <a href="#events" className="hover:text-green-400 transition duration-300 ease-in-out">Events</a>
          </li>
          <li>
            <a href="#team" className="hover:text-green-400 transition duration-300 ease-in-out">Our Team</a>
          </li>
          <li>
            <a href="/blog" className="hover:text-green-400 transition duration-300 ease-in-out">Blogs</a>
          </li>
          <li>
            <a href="/apply" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-300">
              Apply Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
