
import React, { createContext, useContext, useReducer } from 'react';

type ReportState = {
  category: string | null;
  subCategory: string | null;
  fault: string | null;
  description: string;
  media: File[];
  name: string;
  email: string;
  address: string;
  phone?: string;
  vulnerable: boolean;
  available: boolean;
  consent: boolean;
};

type Action =
  | { type: 'SET_CATEGORY'; payload: string }
  | { type: 'SET_SUBCATEGORY'; payload: string }
  | { type: 'SET_FAULT'; payload: string }
  | { type: 'SET_DESCRIPTION'; payload: string }
  | { type: 'SET_MEDIA'; payload: File[] }
  | { type: 'SET_CONTACT'; payload: { name: string; email: string; address: string; phone?: string } }
  | { type: 'SET_FLAGS'; payload: { vulnerable: boolean; available: boolean; consent: boolean } }
  | { type: 'RESET' };

const initialState: ReportState = {
  category: null,
  subCategory: null,
  fault: null,
  description: '',
  media: [],
  name: '',
  email: '',
  address: '',
  phone: '',
  vulnerable: false,
  available: false,
  consent: false
};

function reportReducer(state: ReportState, action: Action): ReportState {
  switch (action.type) {
    case 'SET_CATEGORY':
      return { ...state, category: action.payload, subCategory: null, fault: null };
    case 'SET_SUBCATEGORY':
      return { ...state, subCategory: action.payload, fault: null };
    case 'SET_FAULT':
      return { ...state, fault: action.payload };
    case 'SET_DESCRIPTION':
      return { ...state, description: action.payload };
    case 'SET_MEDIA':
      return { ...state, media: action.payload };
    case 'SET_CONTACT':
      return { ...state, ...action.payload };
    case 'SET_FLAGS':
      return { ...state, ...action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

const ReportContext = createContext<{
  state: ReportState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

export const ReportProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reportReducer, initialState);
  return (
    <ReportContext.Provider value={{ state, dispatch }}>
      {children}
    </ReportContext.Provider>
  );
};

export const useReport = () => useContext(ReportContext);
