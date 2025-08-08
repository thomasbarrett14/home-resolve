
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CategorySelectPage from '../pages/CategorySelectPage';
import SubCategoryPage from '../pages/SubCategoryPage';
import FaultSelectPage from '../pages/FaultSelectPage';
import TroubleshootingPage from '../pages/TroubleshootingPage';
import DetailsPage from '../pages/DetailsPage';
import UploadPage from '../pages/UploadPage';
import ContactPage from '../pages/ContactPage';
import ConfirmationPage from '../pages/ConfirmationPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CategorySelectPage />} />
        <Route path="/sub-category" element={<SubCategoryPage />} />
        <Route path="/fault" element={<FaultSelectPage />} />
        <Route path="/troubleshooting" element={<TroubleshootingPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/submitted" element={<ConfirmationPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
