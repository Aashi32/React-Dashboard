import React from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const CloudRiskAssessment = () => {
  const riskAssessment = useSelector((state) => state.dashboard.riskAssessment);

  const data = [
    { name: 'Failed', value: riskAssessment.failed },
    { name: 'Warning', value: riskAssessment.warning },
    { name: 'Not Available', value: riskAssessment.notAvailable },
    { name: 'Passed', value: riskAssessment.passed },
  ];

  const COLORS = ['#FF6347', '#FFD700', '#D3D3D3', '#32CD32'];

  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="cloud-risk-assessment widget">
      <h2>Cloud Account Risk Assessment</h2>
      <div className="cloud-risk-container">
        <ResponsiveContainer width="50%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="40%" 
              cy="50%"
              outerRadius={80}
              innerRadius={60} 
              labelLine={false}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
            {/* Total value in the center of the donut */}
            <text
              x="30%" 
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={24}
              fontWeight="bold"
            >
              {total}
            </text>
          </PieChart>
        </ResponsiveContainer>
        <div className="cloud-risk-details">
          {data.map((entry, index) => (
            <div key={index} className="cloud-risk-item">
              <span className="bullet" style={{ backgroundColor: COLORS[index] }}></span>
              {entry.name}: ({entry.value})
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CloudRiskAssessment;
