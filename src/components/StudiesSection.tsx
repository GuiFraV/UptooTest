import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const studyCards = [
  {
    title: "Les tendances du marché du recrutement de commerciaux",
    image:
      "https://uptoo.fr/assets/corporate/illustrations/articles/guides/entretien-de-vente.jpg",
  },
  {
    title: "Étude sur les salaires",
    image:
      "https://uptoo.fr/assets/corporate/illustrations/articles/guides/recrutement-commercial.jpg",
  },
  {
    title: "Enjeux des directions commerciales pour 2023",
    image:
      "https://uptoo.fr/assets/corporate/illustrations/articles/guides/negociation-commerciale.jpg",
  },
  {
    title: "L'onboarding",
    image:
      "https://uptoo.fr/assets/corporate/illustrations/articles/guides/questions-incontournables-pour-identifier-le-besoin.jpg",
  },
];

export default function StudiesSection() {
  return (
    <div className="w-full max-w-6xl p-6 rounded-3xl h-4/6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Études</h2>
        <Button variant="link" className="text-black">
          Tout voir &gt;
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4  h-80">
        {studyCards.map((card, index) => (
          <Card key={index} className="overflow-hidden relative">
            <CardContent className="p-0 h-full">
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 bg-white rounded-full p-1"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
