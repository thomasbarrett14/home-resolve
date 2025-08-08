
import React from 'react';
import AppRouter from './router/AppRouter';
import { ReportProvider } from './context/ReportContext';

const App = () => {
  return (
    <ReportProvider>
      <AppRouter />
    </ReportProvider>
  );
};

export default App;
