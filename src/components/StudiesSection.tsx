import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const studyCards = [
  {
    title: "Les tendances du marché du recrutement de commerciaux",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4yFA7xKnr7jlUDrQrqnd4R5ipP6wwB.png",
  },
  {
    title: "Étude sur les salaires",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4yFA7xKnr7jlUDrQrqnd4R5ipP6wwB.png",
  },
  {
    title: "Enjeux des directions commerciales pour 2023",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4yFA7xKnr7jlUDrQrqnd4R5ipP6wwB.png",
  },
  {
    title: "L'onboarding",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4yFA7xKnr7jlUDrQrqnd4R5ipP6wwB.png",
  },
];

export default function StudiesSection() {
  return (
    <div className="w-full max-w-6xl p-6 bg-white rounded-3xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Études</h2>
        <Button variant="link" className="text-blue-600">
          Tout voir &gt;
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {studyCards.map((card, index) => (
          <Card key={index} className="overflow-hidden relative">
            <CardContent className="p-0">
              <Image
                src={card.image}
                alt={card.title}
                width={300}
                height={200}
                className="w-full h-auto"
              />
              <div className="absolute top-2 left-2 bg-white rounded-full p-1">
                <Image
                  src="/placeholder.svg?height=20&width=60"
                  alt="uptoo logo"
                  width={60}
                  height={20}
                  className="h-5 w-auto"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
