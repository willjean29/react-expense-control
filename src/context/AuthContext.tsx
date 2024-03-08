import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.config";

export const AuthContext = createContext({});

interface AuthContextProviderProps {
  children: React.ReactNode;
}
const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState({} || null);
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (!session) {
        setUser(null);
      } else {
        console.log({ session });
        console.log({ event });
        setUser(session);
      }
    });
    return () => {
      authListener.subscription;
    };
  }, []);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export { AuthContextProvider, useAuthContext };
