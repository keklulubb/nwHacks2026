"use client"

export default function LiquidBackground() {
  return (
    <div className="fixed inset-0 -z-20 bg-[#93d6f1] overflow-hidden">
      {/* THE BLOB CONTAINER*/}
      <div 
        className="absolute inset-0 w-full h-full" 
        style={{ filter: 'url(#wavy) blur(50px)' }}
      >
        {/* Blob 1 - Purple */}
        <div className="absolute top-[10%] left-[10%] w-[60vw] h-[60vw] bg-[#0474ba] rounded-full opacity-60 animate-liquid-slow" />
        {/* Blob 2 - Pink/Red */}
        <div className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] bg-[#f17720] rounded-full opacity-60 animate-liquid-fast" />
        {/* Blob 3 - Cyan */}
        <div className="absolute top-[40%] right-[20%] w-[45vw] h-[45vw] bg-[#0cf] rounded-full opacity-60 animate-liquid-medium" />
        {/* Blob 4 - Orange */}
        <div className="absolute bottom-[30%] left-[20%] w-[40vw] h-[40vw] bg-[#4224ba] rounded-full opacity-60 animate-liquid-slow" />
      </div>

      {/* THE  OVERLAY */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* SVG FILTER */}
      <svg className="hidden">
        <filter id="wavy">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.01" 
            numOctaves="3" 
            result="noise" 
          />
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="noise" 
            scale="100" 
          />
        </filter>
      </svg>
    </div>
  );
}