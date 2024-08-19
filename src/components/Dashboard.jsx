// import React, { useState } from 'react';
// import CloudAccounts from './CloudAccounts';
// import CloudRiskAssessment from './CloudRiskAssessment';
// import NamespaceAlerts from './NamespaceAlerts';
// import RegistryScan from './RegistryScan';
// import ImageSecurity from './ImageSecurity';
// import AddWidgetModal from './AddWidgetModal';
// import WorkloadAlerts from './WorkloadAlerts';

// const Dashboard = () => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [selectedWidgets, setSelectedWidgets] = useState({
//     cloudAccounts: true,
//     cloudRiskAssessment: true,
//     namespaceAlerts: true,
//     workloadAlerts: true,
//     registryScan: true,
//     imageSecurity: true,
//   });

//   const handleAddWidgetClick = () => {
//     setModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setModalOpen(false);
//   };

//   const handleWidgetToggle = (widget) => {
//     setSelectedWidgets((prevSelectedWidgets) => ({
//       ...prevSelectedWidgets,
//       [widget]: !prevSelectedWidgets[widget],
//     }));
//   };

//   return (
//     <div className="dashboard">
//       <div className="dashboard-header">
//         <h1>CNAPP Dashboard</h1>
//         <div className="dashboard-controls">
//           <button onClick={handleAddWidgetClick}>Add Widget +</button>
//           <button className="refresh-btn">&#x21bb;</button>
//           <select>
//             <option>Last 2 days</option>
//             <option>Last 7 days</option>
//             <option>Last 30 days</option>
//           </select>
//         </div>
//       </div>

//       <h2>CSPM Executive Dashboard</h2>
//       <div className="dashboard-section">
//         <div className="dashboard-row">
//           <div className="dashboard-column">
//             {selectedWidgets.cloudAccounts && <CloudAccounts />}
//           </div>
//           <div className="dashboard-column">
//             {selectedWidgets.cloudRiskAssessment && <CloudRiskAssessment />}
//           </div>
//           <div className="dashboard-column add-widget-container">
//             <button onClick={handleAddWidgetClick}>+ Add Widget</button>
//           </div>
//         </div>
//       </div>

//       <h2>CWPP Dashboard</h2>
//       <div className="dashboard-section">
//         <div className="dashboard-row">
//           <div className="dashboard-column">
//             {selectedWidgets.namespaceAlerts && <NamespaceAlerts />}
//           </div>
//           <div className="dashboard-column">
//             {selectedWidgets.workloadAlerts && <WorkloadAlerts />}
//           </div>
//           <div className="dashboard-column add-widget-container">
//             <button onClick={handleAddWidgetClick}>+ Add Widget</button>
//           </div>
//         </div>
//       </div>

//       <h2>Registry Scan</h2>
//       <div className="dashboard-section">
//         <div className="dashboard-row">
//           <div className="dashboard-column">
//             {selectedWidgets.registryScan && <RegistryScan />}
//           </div>
//           <div className="dashboard-column">
//             {selectedWidgets.imageSecurity && <ImageSecurity />}
//           </div>
//           <div className="dashboard-column add-widget-container">
//             <button onClick={handleAddWidgetClick}>+ Add Widget</button>
//           </div>
//         </div>
//       </div>

//       <AddWidgetModal
//         isOpen={isModalOpen}
//         onClose={handleModalClose}
//         onWidgetToggle={handleWidgetToggle}
//         selectedWidgets={selectedWidgets}
//       />
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState } from 'react';
import CloudAccounts from './CloudAccounts';
import CloudRiskAssessment from './CloudRiskAssessment';
import NamespaceAlerts from './NamespaceAlerts';
import RegistryScan from './RegistryScan';
import ImageSecurity from './ImageSecurity';
import AddWidgetModal from './AddWidgetModal';
import WorkloadAlerts from './WorkloadAlerts';

const Dashboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedWidgets, setSelectedWidgets] = useState({
    cloudAccounts: true,
    cloudRiskAssessment: true,
    namespaceAlerts: true,
    workloadAlerts: true,
    registryScan: true,
    imageSecurity: true,
  });
  
  // Unique key to force re-render
  const [refreshKey, setRefreshKey] = useState(0);

  const handleAddWidgetClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleWidgetToggle = (widget) => {
    setSelectedWidgets((prevSelectedWidgets) => ({
      ...prevSelectedWidgets,
      [widget]: !prevSelectedWidgets[widget],
    }));
  };

  const handleRefreshClick = () => {
    // Incrementing the key will cause a re-render of the component
    setRefreshKey((prevKey) => prevKey + 1);
  };

  return (
    <div key={refreshKey} className="dashboard">
      <div className="dashboard-header">
        <h1>CNAPP Dashboard</h1>
        <div className="dashboard-controls">
          <button onClick={handleAddWidgetClick}>Add Widget +</button>
          <button className="refresh-btn" onClick={handleRefreshClick}>&#x21bb;</button>
          <select>
            <option>Last 2 days</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </div>
      </div>

      <h2>CSPM Executive Dashboard</h2>
      <div className="dashboard-section">
        <div className="dashboard-row">
          <div className="dashboard-column">
            {selectedWidgets.cloudAccounts && <CloudAccounts />}
          </div>
          <div className="dashboard-column">
            {selectedWidgets.cloudRiskAssessment && <CloudRiskAssessment />}
          </div>
          <div className="dashboard-column add-widget-container">
            <button onClick={handleAddWidgetClick}>+ Add Widget</button>
          </div>
        </div>
      </div>

      <h2>CWPP Dashboard</h2>
      <div className="dashboard-section">
        <div className="dashboard-row">
          <div className="dashboard-column">
            {selectedWidgets.namespaceAlerts && <NamespaceAlerts />}
          </div>
          <div className="dashboard-column">
            {selectedWidgets.workloadAlerts && <WorkloadAlerts />}
          </div>
          <div className="dashboard-column add-widget-container">
            <button onClick={handleAddWidgetClick}>+ Add Widget</button>
          </div>
        </div>
      </div>

      <h2>Registry Scan</h2>
      <div className="dashboard-section">
        <div className="dashboard-row">
          <div className="dashboard-column">
            {selectedWidgets.registryScan && <RegistryScan />}
          </div>
          <div className="dashboard-column">
            {selectedWidgets.imageSecurity && <ImageSecurity />}
          </div>
          <div className="dashboard-column add-widget-container">
            <button onClick={handleAddWidgetClick}>+ Add Widget</button>
          </div>
        </div>
      </div>

      <AddWidgetModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onWidgetToggle={handleWidgetToggle}
        selectedWidgets={selectedWidgets}
      />
    </div>
  );
};

export default Dashboard;
