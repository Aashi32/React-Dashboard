import React, { useState } from 'react';

const widgetsData = {
  CSPM: ['cloudAccounts', 'cloudRiskAssessment'],
  CWPP: ['namespaceAlerts', 'workloadAlerts'],
  Image: ['registryScan', 'imageSecurity'],
  Ticket: ['Ticket Overview', 'Recent Tickets'],
};

const AddWidgetModal = ({ isOpen, onClose, onWidgetToggle, selectedWidgets }) => {
  const [activeTab, setActiveTab] = useState('CSPM');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCheckboxChange = (widget) => {
    onWidgetToggle(widget);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredWidgets = widgetsData[activeTab].filter((widget) =>
    widget.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Add Widget</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <p>Personalize your dashboard by adding or removing widgets</p>
        <div className="tabs">
          {Object.keys(widgetsData).map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? 'active-tab' : ''}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search widgets..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-bar"
        />
        <div className="options">
          {filteredWidgets.map((widget) => (
            <label key={widget} className="widget-item">
              <input
                type="checkbox"
                checked={selectedWidgets[widget] || false}
                onChange={() => handleCheckboxChange(widget)}
                className="widget-checkbox"
              />
              <span className="widget-label">{widget}</span>
            </label>
          ))}
        </div>
        <div className="actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={onClose}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;
