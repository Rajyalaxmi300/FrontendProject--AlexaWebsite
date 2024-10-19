export default function Events() {
  return (
    <section id="events" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 transition-colors hover:text-green-400">Our Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {["Git 101", "Graph Q", "The secrets behind building a successful NFT Project"].map((event, idx) => (
            <div key={idx} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold hover:text-green-400">{event}</h3>
              <p className="mt-2">Get to know about it more</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
