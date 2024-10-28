import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, MapPin } from "lucide-react"

export default function Component() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/black-entrepreneurs-group-Wd5Uy5Uy5Uy5Uy5Uy5Uy5Uy5Uy5Uy5Uy5.jpg"
        alt="Groupe d'entrepreneurs noirs"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#5138EE] text-center mb-6">
            Trouver l&apos;entreprise qui vous correspond
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Chercher une entreprise"
                className="pl-10 border-gray-300 focus-visible:ring-2 focus-visible:ring-[#5138EE] focus-visible:border-transparent"
              />
            </div>
            <div className="relative flex-grow">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Où?"
                className="pl-10 border-gray-300 focus-visible:ring-2 focus-visible:ring-[#5138EE] focus-visible:border-transparent"
              />
            </div>
            <Button className="bg-[#5138EE] hover:bg-[#4128DE] text-white font-semibold py-2 px-6">
              Rechercher
            </Button>
          </div>
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-[#5138EE] hover:underline">
              Recherche avancée
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}