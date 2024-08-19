import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const RegistryScan = () => {
  const registryScan = useSelector((state) => state.dashboard.registryScan);

  // Ensure fallback values to avoid NaN
  const critical = registryScan.critical || 0;
  const high = registryScan.high || 0;
  const medium = registryScan.medium || 0;
  const low = registryScan.low || 0;
  const none = registryScan.none || 0;

  const data = [
    {
      name: 'Total Vulnerabilities',
      critical,
      high,
      medium,
      low,
      none,
    },
  ];

  const COLORS = ['#8B0000', '#FF4500', '#FFA500', '#FFD700', '#D3D3D3'];

  const totalVulnerabilities = critical + high + medium + low + none;

  return (
    <div className="registry-scan widget">
      <h2>Image Risk Assessment</h2>
      <div className="total-vulnerabilities">
        <strong>Total Vulnerabilities: {totalVulnerabilities}</strong>
      </div>
      <ResponsiveContainer width="100%" height={50}>
        <BarChart layout="vertical" data={data}>
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" hide />
          <Tooltip />
          <Bar dataKey="critical" stackId="a" fill={COLORS[0]} />
          <Bar dataKey="high" stackId="a" fill={COLORS[1]} />
          <Bar dataKey="medium" stackId="a" fill={COLORS[2]} />
          <Bar dataKey="low" stackId="a" fill={COLORS[3]} />
          <Bar dataKey="none" stackId="a" fill={COLORS[4]} />
        </BarChart>
      </ResponsiveContainer>
      <div className="vulnerability-details">
        <div className="vulnerability-item">
          <span className="bullet" style={{ backgroundColor: COLORS[0] }}></span>
          Critical: {critical}
        </div>
        <div className="vulnerability-item">
          <span className="bullet" style={{ backgroundColor: COLORS[1] }}></span>
          High: {high}
        </div>
        <div className="vulnerability-item">
          <span className="bullet" style={{ backgroundColor: COLORS[2] }}></span>
          Medium: {medium}
        </div>
        <div className="vulnerability-item">
          <span className="bullet" style={{ backgroundColor: COLORS[3] }}></span>
          Low: {low}
        </div>
        {/* Uncomment if you want to show 'None' */}
        <div className="vulnerability-item">
          <span className="bullet" style={{ backgroundColor: COLORS[4] }}></span>
          None: {none}
        </div>
      </div>
    </div>
  );
};

export default RegistryScan;



