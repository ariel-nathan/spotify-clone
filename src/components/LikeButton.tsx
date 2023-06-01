"use client";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { HeartIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { twMerge } from "tailwind-merge";

interface LikeButtonProps {
  songId: string;
}

export default function LikeButton(props: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(false);

  const router = useRouter();

  const { supabaseClient } = useSessionContext();

  const authModal = useAuthModal();
  const { user } = useUser();

  const handleLike = async () => {
    if (!user) {
      return authModal.onOpen();
    }

    if (isLiked) {
      const { error } = await supabaseClient
        .from("liked_songs")
        .delete()
        .eq("user_id", user.id)
        .eq("song_id", props.songId);

      if (error) {
        toast.error("Failed to unlike song");
      } else {
        setIsLiked(false);
      }
    } else {
      const { error } = await supabaseClient.from("liked_songs").insert({
        user_id: user.id,
        song_id: props.songId,
      });

      if (error) {
        toast.error("Failed to like song");
      } else {
        setIsLiked(true);
        toast.success("Liked!");
      }
    }

    router.refresh();
  };

  useEffect(() => {
    if (!user?.id) {
      return;
    }

    const fetchData = async () => {
      const { data, error } = await supabaseClient
        .from("liked_songs")
        .select("*")
        .eq("user_id", user.id)
        .eq("song_id", props.songId)
        .single();

      if (!error && data) {
        setIsLiked(true);
      }
    };

    fetchData();
  }, [props.songId, supabaseClient, user?.id]);

  return (
    <button onClick={handleLike} className="transition hover:opacity-75">
      <HeartIcon
        className={twMerge(isLiked ? "text-red-500" : "text-neutral-400")}
        fill={isLiked ? "currentColor" : "none"}
      />
    </button>
  );
}
