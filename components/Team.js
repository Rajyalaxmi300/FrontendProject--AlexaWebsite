export default function Team() {
  return (
    <section id="team" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 transition-colors hover:text-green-400">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {["Abdul Ahad", "Vishruth Rajmohan", "Devangana Ghosh"].map((member, idx) => (
            <div key={idx} className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold hover:text-green-400">{member}</h3>
              <p className="mt-2">Technical Lead</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
