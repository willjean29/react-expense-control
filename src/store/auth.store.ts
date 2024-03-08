import { create } from "zustand";
import { StateCreator } from "zustand";
import { signWithGoogle, signOut } from "../proxy/auth.proxy";

interface AuthState {
  isAuthenticated: boolean;
}
interface AuthActions {
  signWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

type AuthStore = AuthState & AuthActions;

const authStore: StateCreator<AuthStore> = (set) => ({
  isAuthenticated: false,
  signWithGoogle: async () => {
    console.log("signWithGoogle");
    const data = await signWithGoogle();
    console.log({ data });
    set({ isAuthenticated: true });
  },
  signOut: async () => {
    console.log("signOut");
    await signOut();
    set({ isAuthenticated: false });
  },
});

export const useAuthStore = create<AuthStore>(authStore);
