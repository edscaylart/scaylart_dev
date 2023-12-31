import { organizations } from "@/data/organizations"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Label } from "./ui/label"
import { Separator } from "./ui/separator"

export const ProfileNotes = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Organizations</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        {organizations.map((item, index) => (
          <div className="flex flex-col gap-2" key={item.name}>
            <div className="flex flex-col gap-0">
              <div className="flex flex-row items-center justify-between">
                <Label className="text-md font-bold">{item.name}</Label>
                <Label className="text-xs text-gray-600">{item.date}</Label>
              </div>
              <Label className="text-xs text-gray-600">{item.locality}</Label>
            </div>
            <CardDescription>{item.description}</CardDescription>
            <div className="flex flex-wrap gap-2">
              {item.techs.map(tech => <Badge key={`${index}-${tech}`}>{tech}</Badge>)}
            </div>
            {organizations.length - 1 !== index && <Separator className="mt-4" />}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}