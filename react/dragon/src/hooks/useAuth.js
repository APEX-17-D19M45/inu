import { useContext } from 'react';

import { AuthContext } from '../contexts/LegacyContext';

const useAuth = () => useContext(AuthContext);

export default useAuth;