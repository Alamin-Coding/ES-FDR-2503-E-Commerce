import { createContext } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
});
const AuthProvider = ({ children }) => {

const singUp = (userData) => {
    // Implement sign-up logic here
  }

  const login = (userData) => {
    // Implement login logic here
  };

  const logout = () => {
    // Implement logout logic here
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: false, user: null, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;