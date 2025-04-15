import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const educations = [
  {
    title: "Specialization in Mobile Application Development",
    institution:
      "University of the Valley of the River of the Saints (Unisinos)",
    time: "2014 - 2015",
  },
  {
    title: "Bachelor's in Information Systems.",
    institution: "University of Cuiabá (UNIC)",
    time: "2010 - 2013",
  },
];

export default function Education() {
  return (
    <Card className="bg-amber-100">
      <CardHeader>
        <CardTitle className="text-2xl  text-center border-b-4 border-stone-800 pb-2">
          Training & Education
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {educations.map((edu) => (
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h3 className="text-sm">{edu.title}</h3>
              <p className="text-xs">{edu.institution}</p>
            </div>
            <p className="text-xs italic">{edu.time}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
