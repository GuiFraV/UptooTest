import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function DiscoverTools() {
  return (
    <div className="w-full max-w-4xl p-6 bg-white rounded-3xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">
        Découvrez vos outils pour gagner des points de croissance
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Scan",
            description:
              "Quelles sont les forces et faiblesses de votre exécution commerciale ?",
            label: "Gratuit",
            icon: "/trophy.png",
          },
          {
            title: "Assessment",
            description:
              "Quel est le niveau de vos commerciaux et leurs axes de progression ?",
            label: "5 évaluations gratuites",
            icon: "/diagram.png",
          },
        ].map((tool, index) => (
          <Card
            key={index}
            className="relative overflow-visible rounded-2xl border-0 shadow-md"
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                  {tool.label}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{tool.title}</h3>
              <p className="text-sm mb-6">{tool.description}</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3">
                Évaluer mes commerciaux
              </Button>
              <div className="absolute bottom-4 left-64 z-10 w-64 h-64">
                <Image
                  src={tool.icon}
                  alt={tool.title}
                  width={158}
                  height={158}
                  className=""
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
