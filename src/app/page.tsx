import { CreatePost } from "@/app/_components/create-post";
import { api } from "@/trpc/server";
import { ProfileHeader } from "@/components/profile-header";
import { ProfileAttributes } from "@/components/profile-attributes";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileNotes } from "@/components/profile-notes";
import { ProfileBackground } from "@/components/profile-background";

export default async function Home() {
  // const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <div className="container flex flex-col items-center justify-center gap-6">
      <ProfileHeader />
      <ProfileAttributes />

      <Tabs defaultValue="notes">
        <TabsList>
          <TabsTrigger value="actions">ACTIONS</TabsTrigger>
          <TabsTrigger value="spells">SPELLS</TabsTrigger>
          <TabsTrigger value="inventory">INVENTORY</TabsTrigger>
          <TabsTrigger value="featuresAndTraits">FEATURES & TRAITS</TabsTrigger>
          <TabsTrigger value="description">DESCRIPTION</TabsTrigger>
          <TabsTrigger value="notes">NOTES</TabsTrigger>
          <TabsTrigger value="extra">EXTRA</TabsTrigger>
        </TabsList>
        <TabsContent value="actions">ACTIONS</TabsContent>
        <TabsContent value="spells">SPELLS</TabsContent>
        <TabsContent value="inventory">INVENTORY</TabsContent>
        <TabsContent value="featuresAndTraits">FEATURES & TRAITS</TabsContent>
        <TabsContent value="description">
          <ProfileBackground />
        </TabsContent>
        <TabsContent value="notes">
          <ProfileNotes />
        </TabsContent>
        <TabsContent value="extra">EXTRA</TabsContent>
      </Tabs>
    </div>
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
