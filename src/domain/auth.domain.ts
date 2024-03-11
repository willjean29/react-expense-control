export interface User {
  id: string;
  email: string;
  name: string;
  avatar: string;
}
export interface AuthState {
  user: User | undefined;
}
