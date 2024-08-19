import React from 'react';

const WorkloadAlerts = () => {
 
  const hasData = false; 

  return (
    <div className="workload-alerts widget">
      <h2>Workload Alerts</h2>
      {hasData ? (
        <div className="graph">
          {/* Display graph or content here when data is available */}
          <p>Graph or data will be shown here.</p>
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

export default WorkloadAlerts;



