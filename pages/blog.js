import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Automatic Speech Recognition",
      description:
        "Speech is the primary mode of communication for human beings. Explore the latest breakthroughs in speech recognition technology.",
      image: "/speech-recognition.jpg",
    },
    {
      id: 2,
      title: "A Beginner’s Roadmap to Mastering Cybersecurity",
      description:
        "Welcome to the important world of cybersecurity, where mastering cyber protocols is crucial.",
      image: "/cybersecurity.jpg",
    },
    {
      id: 3,
      title: "Using AWS S3 with Node.js",
      description:
        "AWS or Amazon Web Services is the biggest and most comprehensive cloud service in the world.",
      image: "/aws-s3.jpg",
    },
  ];

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 text-green-400">Our Blogs</h1>
          <p className="text-lg text-gray-300">
            At the SRM Alexa Developer Club, our blog offers a rich blend of tech innovations, from AI and cybersecurity to app development insights. Beyond tech, explore thought-provoking articles on leadership, creativity, and societal impacts.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="text-2xl font-bold text-green-400 mt-4 hover:text-white">
                  {post.title}
                </h3>
                <p className="text-gray-300 mt-2">{post.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
