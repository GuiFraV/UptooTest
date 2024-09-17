import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

export default function UserProjects() {
  return (
    <div className="w-full max-w-[23rem] space-y-4 h-full ">
      <Card className="bg-white mb-8">
        <CardContent className="p-6 w-5/6">
          <h2 className="text-4xl text-gray-500 font-roboto">Hello !</h2>
          <h1 className="text-4xl font-roboto font-bold pt-2 pb-2">
            Esther Howard
          </h1>
          <p className="text-sm text-black font-roboto bg-[#f1f5f9] rounded-md p-1 w-[11.5rem] flex items-center justify-center">
            esther-howard@gmail.com
          </p>
        </CardContent>
      </Card>

      {/* Project card */}
      <Card className="bg-white shadow-sm rounded-2xl height-[39rem]">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold flex justify-between items-center">
            <span className="font-roboto tracking-wide">
              2 Projets en cours
            </span>
            <div className="flex space-x-1">
              <Button
                variant="outline"
                size="icon"
                className="h-6 w-6 rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-6 w-6 rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-2 relative">
          {/* Div d'arrière-plan */}
          <div className="bg-[#6ca5fd] rounded-3xl w-[80%] h-[480px] absolute top-1/2 left-[40px] -translate-y-1/2 -z-1"></div>

          {/* Card principale */}
          <Card className="bg-[#096bfa] text-white rounded-2xl overflow-hidden w-11/12 h-[525px] relative z-10">
            <CardContent className="p-4 ">
              {/* Votre contenu */}
              <div className="bg-white text-xs text-blue-700 inline-block px-2 py-1 rounded-sm mb-2 mx-3">
                Recrutement
              </div>
              <h3 className="text-xl font-bold mb-1 mx-3">
                POP - SDR Levallois
              </h3>
              <p className="text-xs mb-4 flex items-center">
                <Calendar className="h-4 w-4 mr-1 mb-3 mt-3 mx-3" />
                Lancée le 12/01/23
              </p>
              <div className="space-y-2">
                {[
                  { title: "Nombre de candidatures", value: "537" },
                  { title: "Candidats évalués", value: "14" },
                  { title: "Dossiers présentés", value: "537" },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 mx-2">
                    <p className="text-sm text-black font-semibold mb-1">
                      {item.title}
                    </p>
                    <div className="flex justify-between items-end">
                      <p className="text-3xl font-bold text-black">
                        {item.value}
                      </p>
                      <div className="text-right">
                        <p className="text-xs text-[#a0a9c4] leading-tight">
                          <span className="text-[#2dbd87] font-bold">51 </span>
                          Sourcing
                        </p>
                        <p className="text-xs text-[#a0a9c4] leading-tight">
                          <span className="text-black font-bold">1 </span>
                          Chasse
                        </p>
                      </div>
                    </div>
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
