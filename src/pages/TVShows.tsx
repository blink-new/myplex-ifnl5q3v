import { Play, Star } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

const TVShows = () => {
  const tvShows = [
    {
      id: 1,
      title: "Stranger Things",
      year: 2016,
      rating: 8.7,
      seasons: 4,
      genre: "Science-Fiction",
      status: "En cours",
      image: "https://images.unsplash.com/photo-1489599375714-ef1eca638982?w=400&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Breaking Bad",
      year: 2008,
      rating: 9.5,
      seasons: 5,
      genre: "Drame",
      status: "Terminée",
      image: "https://images.unsplash.com/photo-1509564324749-471bd272e1ff?w=400&h=600&fit=crop"
    },
    {
      id: 3,
      title: "The Witcher",
      year: 2019,
      rating: 8.2,
      seasons: 3,
      genre: "Fantasy",
      status: "En cours",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
    },
    {
      id: 4,
      title: "House of the Dragon",
      year: 2022,
      rating: 8.5,
      seasons: 2,
      genre: "Fantasy",
      status: "En cours",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop"
    }
  ]

  return (
    <div className="text-white min-h-screen">
      <div className="px-6 lg:px-12 py-8">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
          Séries TV
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {tvShows.map((show) => (
            <Card key={show.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={show.image} 
                    alt={show.title}
                    className="w-full h-80 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-t-lg" />
                  <Button 
                    size="icon"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-orange-500 hover:bg-orange-600"
                  >
                    <Play className="w-4 h-4 fill-white" />
                  </Button>
                  <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs text-white font-semibold">{show.rating}</span>
                    </div>
                  </div>
                  <Badge className={`absolute bottom-2 left-2 text-xs ${
                    show.status === "En cours" 
                      ? "bg-green-500/20 text-green-400 border-green-400"
                      : "bg-slate-500/20 text-slate-400 border-slate-400"
                  }`}>
                    {show.status}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white mb-1 line-clamp-1">{show.title}</h3>
                  <div className="flex items-center space-x-2 text-sm text-slate-400 mb-2">
                    <span>{show.year}</span>
                    <span>•</span>
                    <span>{show.seasons} saisons</span>
                  </div>
                  <Badge className="bg-orange-500/20 text-orange-400 border-orange-400 text-xs">
                    {show.genre}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TVShows