import { createContext } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  token: string | null;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  token: null,
  login: () => {},
  logout: () => {},
});
