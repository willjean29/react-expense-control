import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.config";
import { getUserInfoMapper } from "../mapper/auth.mapper";
import { AuthState, User } from "../domain/auth.domain";

export const AuthContext = createContext({} as AuthState);

interface AuthContextProviderProps {
  children: React.ReactNode;
}
const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | undefined>({} as User);
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async (_, session) => {
      if (!session) {
        setUser(undefined);
      } else {
        const client = getUserInfoMapper(session);
        setUser(client);
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
