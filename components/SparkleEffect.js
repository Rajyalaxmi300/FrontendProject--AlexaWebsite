export default function SparkleEffect() {
  const sparkles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() > 0.5 ? 'sparkle-small' : Math.random() > 0.3 ? 'sparkle-medium' : 'sparkle-large',
    style: {
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
      animationDuration: `${Math.random() * 5 + 3}s`,
      animationDelay: `${Math.random() * 5}s`,
    },
  }));

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      {sparkles.map(sparkle => (
        <div key={sparkle.id} className={`sparkle ${sparkle.size}`} style={sparkle.style}></div>
      ))}
    </div>
  );
}
