import React from 'react';
import { useSelector } from 'react-redux';


const NamespaceAlerts = () => {
  const namespaceAlerts = useSelector((state) => state.dashboard.namespaceAlerts);

  return (
    <div className="namespace-alerts widget">
      <h2>Top 5 Namespace Specific Alerts</h2>
      {namespaceAlerts.length > 0 ? (
        <div className="alerts-content">
          <p>{namespaceAlerts.join(', ')}</p>
        </div>
      ) : (
        <div className="no-data">
          <img src="/images/graph.png" alt="Graph Icon" />
          <p>No Graph data available!</p>
        </div>
      )}
    </div>
  );
};

export default NamespaceAlerts;
