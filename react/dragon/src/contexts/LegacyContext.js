import { createContext, useEffect, useReducer } from "react";
import PropTypes from 'prop-types';

import axios from '../utils/axios';

const initialState = {
    isAuthenticated: false,
    isInitialized: false, 
    user: null
};

const AuthContext = createContext({
    ...initialState,
    method: 'legacy',
    login: () => Promise.resolve(),
    logout: () => Promise.resolve()
});

AuthProvider.propTypes = {
    children: PropTypes.node
};

function AuthProvider({ children }) {
    
}

export { AuthContext, AuthProvider };