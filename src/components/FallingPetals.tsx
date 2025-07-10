import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  x: number;
  y: number;
  speed: number;
  drift: number;
  size: number;
  delay: number;
}

const FallingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Create 60 petals with random properties
    const newPetals: Petal[] = Array.from({ length: 300 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage across screen
      y: 101,
      speed: 15 + Math.random() * 50, // 15-40s fall duration
      drift: (Math.random() - 0.5) * 50, // -25 to 25 horizontal drift
      size: 6 + Math.random() * 4, // 6-10px size
      delay: Math.random() * 20, // 0-20s delay before starting
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute opacity-70"
          style={{
            left: `${petal.x}%`,
            top: `${petal.y}%`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            backgroundColor: 'hsl(var(--pixel-sakura))',
            animationName: 'fall',
            animationDuration: `${petal.speed}s`,
            animationDelay: `${petal.delay}s`,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
            transform: `translateX(${petal.drift}px)`,
            '--random-drift-1': `${(Math.random() - 0.5) * 400}px`,
            '--random-drift-2': `${(Math.random() - 0.5) * 400}px`,
            '--random-drift-3': `${(Math.random() - 0.5) * 400}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default FallingPetals;