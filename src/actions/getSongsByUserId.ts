import { Song } from "@/types/song";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getSongsByUserId = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) {
    console.error(sessionError.message);
    return [];
  }

  const { data: songsData, error: songsError } = await supabase
    .from("songs")
    .select("*")
    .eq("user_id", sessionData?.session?.user.id)
    .order("created_at", { ascending: false });

  if (songsError) {
    console.error(songsError.message);
    return [];
  }

  return (songsData as any) || [];
};

export default getSongsByUserId;
