import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function DiscoverTools() {
  return (
    <div className="w-full max-w-4xl p-6 bg-white rounded-3xl mb-8 px-8">
      <h2 className="text-2xl font-bold mb-6">
        Découvrez vos outils pour gagner des points de croissance
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
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
            className="relative overflow-visible rounded-2xl border p-4 w-full"
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-sm font-roboto font-semibold tracking-wide">
                  {tool.label}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{tool.title}</h3>
              <p className="text-sm mb-6">{tool.description}</p>
              <Button className="w-full bg-[#096bfa] hover:bg-blue-700 text-white rounded-lg py-3">
                Évaluer mes commerciaux
              </Button>
              <div className="absolute -top-5 -right-1 z-10">
                <Image
                  src={tool.icon}
                  alt={tool.title}
                  width={190}
                  height={190}
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
