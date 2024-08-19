import React from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const CloudAccounts = () => {
  const cloudAccounts = useSelector((state) => state.dashboard.cloudAccounts);

  const data = [
    { name: 'Connected', value: cloudAccounts.connected },
    { name: 'Not Connected', value: cloudAccounts.notConnected },
  ];

  const COLORS = ['#0088FE', '#FF8042'];

  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="cloud-accounts widget">
      <h2>Cloud Accounts</h2>
      <div className="cloud-accounts-container">
        <ResponsiveContainer width="55%" height={300}>
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
              x="35%" 
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
        <div className="cloud-accounts-details">
          {data.map((entry, index) => (
            <div key={index} className="cloud-accounts-item">
              <span className="bullet" style={{ backgroundColor: COLORS[index] }}></span>
              {entry.name}: ({entry.value})
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CloudAccounts;
