import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileAttributes } from "@/components/profile-attributes"
import { ProfileHeader } from "@/components/profile-header"

export const Profile = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-6">
      <ProfileHeader />

      <ProfileAttributes />

      <Tabs defaultValue="description">
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
        <TabsContent value="description">DESCRIPTION</TabsContent>
        <TabsContent value="notes">NOTES</TabsContent>
        <TabsContent value="extra">EXTRA</TabsContent>
      </Tabs>
    </div>
  )
}