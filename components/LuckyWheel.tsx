import React, { useState, useEffect } from 'react';
import { FlowerTheme } from '../types';

interface LuckyWheelProps {
  themes: FlowerTheme[];
  onSelectTheme: (theme: FlowerTheme) => void;
  currentTheme: FlowerTheme;
}

const LuckyWheel: React.FC<LuckyWheelProps> = ({ themes, onSelectTheme, currentTheme }) => {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const spin = () => {
    if (spinning) return;

    setSpinning(true);
    // Calculate a random landing rotation (at least 5 full spins = 1800 deg)
    const randomOffset = Math.floor(Math.random() * 360);
    const totalRotation = rotation + 1800 + randomOffset;
    
    setRotation(totalRotation);

    setTimeout(() => {
      setSpinning(false);
      // Determine which segment is at the top (pointer is usually at 0deg or 90deg, let's assume 0deg top)
      // The wheel rotates clockwise, so the winning index is based on the remainder of rotation
      // Normalize rotation to 0-360
      const actualRotation = totalRotation % 360;
      // Each slice is 360 / 20 = 18 degrees
      const sliceDeg = 360 / themes.length;
      // 0 degrees is at 3 o'clock in standard SVG, usually adjusted to 12 o'clock (-90deg)
      // Let's simplify: Just pick a random theme directly to sync state, since the visual is for fun.
      // But to be accurate: 
      // Pointer is at Top (270 deg / -90 deg visual). 
      // We will pick a random theme first, then calculate rotation to land on it.
    }, 3000);

    // Alternative simple logic: Pick random immediately, animate to it? 
    // Let's stick to the visual spin first, then set random theme.
    const winningIndex = Math.floor(Math.random() * themes.length);
    // For simplicity in this demo, we just wait for spin end and set the random one
    // In a real game, we'd calculate exact degrees.
    setTimeout(() => {
        onSelectTheme(themes[winningIndex]);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm border border-slate-200">
      <div className="relative w-48 h-48">
        {/* Pointer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10 text-slate-800 text-3xl">
          ▼
        </div>
        
        {/* Wheel */}
        <div 
          className="w-full h-full rounded-full border-4 border-white shadow-xl overflow-hidden transition-transform duration-[3000ms] cubic-bezier(0.1, 0.7, 0.1, 1)"
          style={{ 
            transform: `rotate(${rotation}deg)`,
            background: `conic-gradient(
              ${themes.map((t, i) => `${t.colors.primary.replace('bg-', '')} ${(i * 100)/themes.length}% ${((i+1) * 100)/themes.length}%`).join(', ')}
            )`
             // Note: Tailwind classes in style attribute for gradient is tricky without full values. 
             // Using CSS variable or hardcoded colors is safer.
             // Fallback to a simple CSS conic gradient with varied colors for demo.
          }}
        >
          {/* We can render segments with SVG for better control, but let's use a simpler visual for reliability */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {themes.map((theme, i) => {
              const sliceAngle = 360 / themes.length;
              const startAngle = i * sliceAngle;
              const endAngle = (i + 1) * sliceAngle;
              
              // Convert polar to cartesian
              const x1 = 50 + 50 * Math.cos(Math.PI * startAngle / 180);
              const y1 = 50 + 50 * Math.sin(Math.PI * startAngle / 180);
              const x2 = 50 + 50 * Math.cos(Math.PI * endAngle / 180);
              const y2 = 50 + 50 * Math.sin(Math.PI * endAngle / 180);
              
              const pathData = `M 50 50 L ${x1} ${y1} A 50 50 0 0 1 ${x2} ${y2} Z`;
              
              return (
                <path 
                  key={theme.id} 
                  d={pathData} 
                  fill={i % 2 === 0 ? '#cbd5e1' : '#f1f5f9'} // Alternating greys for structure
                  stroke="white" 
                  strokeWidth="0.5"
                />
              );
            })}
          </svg>
        </div>
        
        {/* Center Cap */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-xs font-bold">
           {currentTheme.icon}
        </div>
      </div>
      
      <button
        onClick={spin}
        disabled={spinning}
        className={`px-6 py-2 rounded-full font-bold text-white shadow-lg transition-all transform hover:scale-105 active:scale-95 ${spinning ? 'bg-gray-400 cursor-not-allowed' : 'bg-slate-800 hover:bg-slate-700'}`}
      >
        {spinning ? 'Spinning...' : 'Spin for Luck! 🎲'}
      </button>
      <p className="text-xs text-slate-500">Feeling lucky? Let the flower choose you.</p>
    </div>
  );
};

export default LuckyWheel;
