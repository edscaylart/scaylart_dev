import { education } from "@/data/education"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Label } from "./ui/label"
import { Separator } from "./ui/separator"

export const ProfileBackground = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Academic Background</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        {education.map((item, index) => (
          <div className="flex flex-col gap-2" key={item.name}>
            <div className="flex flex-row items-center justify-between">
              <Label className="text-md font-bold">{item.name}</Label>
              <Label className="text-xs text-gray-600">{item.date}</Label>
            </div>
            <CardDescription>{item.description}</CardDescription>
            {education.length - 1 !== index && <Separator className="mt-4" />}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}