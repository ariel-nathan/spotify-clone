"use client";

import { UserContextProvider } from "@/hooks/useUser";

interface UserProviderProps {
  children: React.ReactNode;
}

export default function UserProvider(props: UserProviderProps) {
  return <UserContextProvider>{props.children}</UserContextProvider>;
}
