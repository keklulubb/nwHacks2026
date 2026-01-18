"use client" // for Recharts
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { day: 'Mon', stress: 45 },
  { day: 'Tue', stress: 70 },
  { day: 'Wed', stress: 40 },
  { day: 'Thu', stress: 85 },
  { day: 'Fri', stress: 50 },
  { day: 'Sat', stress: 30 },
  { day: 'Sun', stress: 25 },
];

export default function StressChart() {
  return (
    <div className="w-full h-full min-h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          {/* grid lines */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
          
          <XAxis 
            dataKey="day" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b', fontSize: 12 }} 
            dy={10}
          />
          
          <YAxis hide domain={[0, 100]} />
          
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.8)', 
              borderRadius: '16px', 
              border: 'none', 
              backdropFilter: 'blur(10px)',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }} 
          />
          
          <Line 
            type="monotone" 
            dataKey="stress" 
            stroke="#4f46e5" 
            strokeWidth={4} 
            dot={{ r: 4, fill: '#4f46e5', strokeWidth: 2, stroke: '#fff' }}
            activeDot={{ r: 8, strokeWidth: 0 }}
            animationDuration={2000}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}