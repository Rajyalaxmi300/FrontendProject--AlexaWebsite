import SparkleEffect from './SparkleEffect';

export default function Hero() {
  return (
    <section className="bg-black text-white h-screen flex flex-col justify-center items-center relative">
      <SparkleEffect />
      <h1 className="text-6xl font-bold animate-pulse z-10">Alexa Developers SRM</h1>
      <p className="text-2xl mt-4 text-green-400 z-10">
        "Voices United, Tech Amplified"
      </p>
      <div className="absolute bottom-10 text-green-500 animate-bounce transition-all duration-300 z-10">
        Scroll down
      </div>
    </section>
  );
}
