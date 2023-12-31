import { profile } from "~/data/profile"
import { ProfileAttribute } from "~/ui/profile-attribute"
import { ProfileHeader } from "~/ui/profile-header"

export const Profile = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-6">
      <ProfileHeader character={profile.character} />

      <ul className="flex flex-wrap gap-2 items-center justify-center">
        {profile.attributes.map(attribute => (
          <ProfileAttribute key={attribute.label} attribute={attribute} />
        ))}
      </ul>
    </div>
  )
}