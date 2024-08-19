import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cloudAccounts: {
    connected: 2,
    notConnected: 2,
  },
  riskAssessment: {
    total: 9659,
    failed: 1689,
    warning: 681,
    notAvailable: 36,
    passed: 7253,
  },
  namespaceAlerts: [],
  registryScan: {
    totalVulnerabilities: 1470,
    critical: 9,
    high: 150,
    medium: 1000 ,
    low: 311,
  },
  imageSecurity: {
    totalImages: 2,
    critical: 2,
    high: 2,
  },
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    // Add reducers if needed
  },
});

export default dashboardSlice.reducer;



