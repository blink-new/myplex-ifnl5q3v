import { Play, Music2 } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

const Music = () => {
  const albums = [
    {
      id: 1,
      title: "Random Access Memories",
      artist: "Daft Punk",
      year: 2013,
      genre: "Electronic",
      tracks: 13,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      title: "The Dark Side of the Moon", 
      artist: "Pink Floyd",
      year: 1973,
      genre: "Progressive Rock",
      tracks: 10,
      image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Thriller",
      artist: "Michael Jackson", 
      year: 1982,
      genre: "Pop",
      tracks: 9,
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Abbey Road",
      artist: "The Beatles",
      year: 1969, 
      genre: "Rock",
      tracks: 17,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop"
    }
  ]

  return (
    <div className="text-white min-h-screen">
      <div className="px-6 lg:px-12 py-8">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
          Musique
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Music2 className="w-6 h-6 mr-3 text-orange-400" />
            Albums populaires
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {albums.map((album) => (
              <Card key={album.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-4">
                  <div className="relative mb-4">
                    <img 
                      src={album.image} 
                      alt={album.title}
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                    <Button 
                      size="icon"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-orange-500 hover:bg-orange-600 rounded-full w-12 h-12"
                    >
                      <Play className="w-5 h-5 fill-white" />
                    </Button>
                  </div>
                  <h3 className="font-semibold text-white mb-1 line-clamp-1">{album.title}</h3>
                  <p className="text-slate-400 text-sm mb-2">{album.artist}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{album.year}</span>
                    <span>{album.tracks} titres</span>
                  </div>
                  <Badge className="mt-2 bg-orange-500/20 text-orange-400 border-orange-400 text-xs">
                    {album.genre}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Music