"use client";

import useAuthModal from "@/hooks/useAuthModal";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Modal from "./Modal";

interface AuthModalProps {}

export default function AuthModal(props: AuthModalProps) {
  const supabaseClient = useSupabaseClient();
  const { session } = useSessionContext();

  const router = useRouter();

  const authModal = useAuthModal();

  useEffect(() => {
    if (session) {
      router.refresh();
      authModal.onClose();
    }
  }, [session, router, authModal.onClose]);

  const onChange = (open: boolean) => {
    if (!open) {
      authModal.onClose();
    }
  };

  return (
    <Modal
      title="Welcome back"
      description="Sign in to continue"
      isOpen={authModal.isOpen}
      onChange={onChange}
    >
      <Auth
        theme="dark"
        providers={[]}
        magicLink
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#404040",
                brandAccent: "#22c55e",
              },
            },
          },
        }}
      />
    </Modal>
  );
}
