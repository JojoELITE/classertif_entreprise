import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin } from "lucide-react"

export default function Component() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99%C3%A9cran%20du%202024-10-28%2014-28-52-TffUtL8HKewALFMrMQ835PacBeVeVq.png"
        alt="Foule diverse à un événement"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center">
            Trouver l&apos;entreprise qui vous correspond
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Chercher une entreprise"
                className="pl-10 bg-white/90 border-0 focus-visible:ring-2 focus-visible:ring-purple-600"
              />
            </div>
            <div className="relative flex-grow">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Où?"
                className="pl-10 bg-white/90 border-0 focus-visible:ring-2 focus-visible:ring-purple-600"
              />
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6">
              Rechercher
            </Button>
          </div>
          <div className="text-center">
            <a href="#" className="text-sm text-white hover:underline">
              Recherche avancée
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}