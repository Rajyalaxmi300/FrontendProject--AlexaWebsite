import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Apply() {
  const formRef = useRef(null); // Reference to the form section

  // Function to scroll to the form section
  const handleScroll = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />
      {/* Domain Info Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center text-green-400 mb-10">Domains You Can Apply For</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300">
              <h2 className="text-2xl font-bold text-green-400 mb-2">Web Development</h2>
              <p className="text-gray-300">
                If you are passionate about building websites, working with front-end and back-end technologies, and
                creating scalable web applications, this domain is for you.
              </p>
            </div>
            {/* Artificial Intelligence */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300">
              <h2 className="text-2xl font-bold text-green-400 mb-2">Artificial Intelligence</h2>
              <p className="text-gray-300">
                Dive deep into the world of machine learning, natural language processing, and AI models. Work on
                cutting-edge projects to push the boundaries of AI.
              </p>
            </div>
            {/* Content Creation */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300">
              <h2 className="text-2xl font-bold text-green-400 mb-2">Content Creation</h2>
              <p className="text-gray-300">
                Are you a storyteller? In this domain, you’ll create engaging content, write articles, produce videos,
                and craft social media strategies that resonate with our community.
              </p>
            </div>
            {/* Cloud Computing */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300">
              <h2 className="text-2xl font-bold text-green-400 mb-2">Cloud Computing</h2>
              <p className="text-gray-300">
                Learn and work with cloud technologies like AWS and Azure. Deploy and manage scalable applications while
                understanding the core concepts of cloud architecture.
              </p>
            </div>
            {/* Cybersecurity */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300">
              <h2 className="text-2xl font-bold text-green-400 mb-2">Cybersecurity</h2>
              <p className="text-gray-300">
                Explore the critical field of cybersecurity. Learn how to protect networks, data, and applications from
                threats and vulnerabilities while mastering security protocols.
              </p>
            </div>
            {/* App Development */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300">
              <h2 className="text-2xl font-bold text-green-400 mb-2">App Development</h2>
              <p className="text-gray-300">
                Work with mobile app development, including Android, iOS, and cross-platform applications. Build apps
                that make a difference in users' everyday lives.
              </p>
            </div>
          </div>

          {/* Scroll Down Button */}
          <div className="text-center mt-10">
            <button
              onClick={handleScroll}
              className="text-green-400 hover:text-green-500 transition-all duration-300"
            >
              <svg className="w-12 h-12 mx-auto animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
              <span className="block mt-2 text-lg">Scroll Down</span>
            </button>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section ref={formRef} className="bg-gray-900 text-white py-20 min-h-screen flex justify-center items-center">
        <div className="container max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center text-green-400 mb-6">Apply to Join Alexa Developers SRM</h1>
          <p className="text-gray-300 text-center mb-8">Fill out the form below and we’ll get in touch with you as soon as possible.</p>

          {/* Form Starts Here */}
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-lg font-medium text-gray-200" htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-green-500"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-lg font-medium text-gray-200" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-green-500"
                placeholder="your.email@example.com"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label className="block text-lg font-medium text-gray-200" htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-green-500"
                placeholder="Your Phone Number"
                required
              />
            </div>

            {/* Domain Selection Field */}
            <div>
              <label className="block text-lg font-medium text-gray-200" htmlFor="domain">Select Your Domain</label>
              <select
                id="domain"
                className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-green-500"
                required
              >
                <option value="">Select a domain...</option>
                <option value="web-development">Web Development</option>
                <option value="artificial-intelligence">Artificial Intelligence</option>
                <option value="content-creation">Content Creation</option>
                <option value="cloud-computing">Cloud Computing</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="app-development">App Development</option>
              </select>
            </div>

            {/* Message/Description Field */}
            <div>
              <label className="block text-lg font-medium text-gray-200" htmlFor="message">Tell Us About Yourself</label>
              <textarea
                id="message"
                rows="5"
                className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-green-500"
                placeholder="Write a brief introduction about yourself."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-300"
              >
                Submit Application
              </button>
            </div>
          </form>
          {/* Form Ends Here */}
        </div>
      </section>
      <Footer />
    </div>
  );
}
