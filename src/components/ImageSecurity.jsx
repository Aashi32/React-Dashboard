import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const ImageSecurity = () => {
  const imageSecurity = useSelector((state) => state.dashboard.imageSecurity);

  const data = [
    {
      name: 'Image Security',
      critical: imageSecurity.critical,
      high: imageSecurity.high,
    },
  ];

  const COLORS = ['#8B0000', '#FF4500', '#FFA500']; // Colors for Critical, High

  return (
    <div className="image-security widget">
      <h2>Image Security Issues</h2>
      <div className="total-images">
        <strong>Total Images: {imageSecurity.totalImages}</strong>
      </div>
      <ResponsiveContainer width="100%" height={50}>
        <BarChart layout="vertical" data={data}>
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" hide />
          <Tooltip />
          <Bar dataKey="critical" stackId="a" fill={COLORS[0]} />
          <Bar dataKey="high" stackId="a" fill={COLORS[1]} />
        </BarChart>
      </ResponsiveContainer>
      <div className="image-security-details">
        <div className="image-security-item">
          <span className="bullet" style={{ backgroundColor: COLORS[0] }}></span>
          Critical: {imageSecurity.critical}
        </div>
        <div className="image-security-item">
          <span className="bullet" style={{ backgroundColor: COLORS[1] }}></span>
          High: {imageSecurity.high}
        </div>
      </div>
    </div>
  );
};

export default ImageSecurity;
