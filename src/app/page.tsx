import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { Profile } from "~/app/_components/profile";
import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <main className="mx-auto min-h-screen max-w-[640px] p-6">
      <Profile />
    </main>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
