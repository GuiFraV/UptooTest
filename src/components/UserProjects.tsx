import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

export default function UserProjects() {
  return (
    <div className="w-full max-w-[20rem] space-y-4 h-full">
      <Card className="bg-white shadow-sm ">
        <CardContent className="p-6">
          <h2 className="text-xl text-gray-500 font-normal">Hello !</h2>
          <h1 className="text-3xl font-bold">Esther Howard</h1>
          <p className="text-sm text-gray-500">esther-howard@gmail.com</p>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-sm h-3/5">
        <CardHeader className="pb-0">
          <CardTitle className="text-lg font-semibold flex justify-between items-center">
            <span>2 Projets en cours</span>
            <div className="flex space-x-1">
              <Button variant="outline" size="icon" className="h-6 w-6">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-6 w-6">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <Card className="bg-blue-600 text-white">
            <CardContent className="p-4">
              <div className="bg-blue-700 text-xs inline-block px-2 py-1 rounded mb-2">
                Recrutement
              </div>
              <h3 className="text-lg font-bold mb-1">POP - SDR Levallois</h3>
              <p className="text-xs mb-4 flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                Lancée le 12/01/23
              </p>
              <div className="space-y-2">
                {[
                  { title: "Nombre de candidatures", value: "537" },
                  { title: "Candidats évalués", value: "14" },
                  { title: "Dossiers présentés", value: "537" },
                ].map((item, index) => (
                  <div key={index} className="bg-white/10 p-2 rounded">
                    <p className="text-xs">{item.title}</p>
                    <p className="text-xl font-bold">{item.value}</p>
                    <p className="text-xs">51 Sourcing • 1 Chasse</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
