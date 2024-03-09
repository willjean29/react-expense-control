import { Session } from "@supabase/supabase-js";
import { User } from "../context/AuthContext";
export const getUserInfoMapper = (data: Session): User => {
  return {
    id: data.user?.id,
    email: data.user.user_metadata?.email,
    name: data.user.user_metadata?.full_name,
    avatar: data.user?.user_metadata?.avatar_url,
  };
};
