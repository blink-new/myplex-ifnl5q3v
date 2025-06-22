import { useState } from "react"
import { Play, Plus, Star, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Movies() {
  const [genre, setGenre] = useState("all")
  const [sortBy, setSortBy] = useState("popular")

  // Mock movie data
  const movies = [
    {
      id: 1,
      title: "Inception",
      year: 2010,
      rating: 8.8,
      genre: ["Action", "Sci-Fi", "Thriller"],
      poster: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=300&h=450&fit=crop",
      description: "A thief who steals corporate secrets through dream-sharing technology."
    },
    {
      id: 2,
      title: "The Dark Knight",
      year: 2008,
      rating: 9.0,
      genre: ["Action", "Crime", "Drama"],
      poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&h=450&fit=crop",
      description: "Batman faces the Joker in a battle for Gotham's soul."
    },
    {
      id: 3,
      title: "Pulp Fiction",
      year: 1994,
      rating: 8.9,
      genre: ["Crime", "Drama"],
      poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=300&h=450&fit=crop",
      description: "Various interconnected stories of Los Angeles criminals."
    },
    {
      id: 4,
      title: "The Matrix",
      year: 1999,
      rating: 8.7,
      genre: ["Action", "Sci-Fi"],
      poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=450&fit=crop",
      description: "A computer programmer discovers the true nature of reality."
    },
    {
      id: 5,
      title: "Forrest Gump",
      year: 1994,
      rating: 8.8,
      genre: ["Drama", "Romance"],
      poster: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=300&h=450&fit=crop",
      description: "The life journey of a simple man with a big heart."
    },
    {
      id: 6,
      title: "The Shawshank Redemption",
      year: 1994,
      rating: 9.3,
      genre: ["Drama"],
      poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
      description: "Two imprisoned men bond over years, finding redemption."
    },
    {
      id: 7,
      title: "Gladiator",
      year: 2000,
      rating: 8.5,
      genre: ["Action", "Drama", "Adventure"],
      poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop",
      description: "A Roman general seeks revenge against a corrupt emperor."
    },
    {
      id: 8,
      title: "The Godfather",
      year: 1972,
      rating: 9.2,
      genre: ["Crime", "Drama"],
      poster: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=300&h=450&fit=crop",
      description: "The aging patriarch of a crime dynasty transfers control."
    },
    {
      id: 9,
      title: "Interstellar",
      year: 2014,
      rating: 8.6,
      genre: ["Adventure", "Drama", "Sci-Fi"],
      poster: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=300&h=450&fit=crop",
      description: "A team travels through a wormhole to save humanity."
    },
    {
      id: 10,
      title: "Fight Club",
      year: 1999,
      rating: 8.8,
      genre: ["Drama"],
      poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&h=450&fit=crop",
      description: "An insomniac office worker forms an underground fight club."
    }
  ]

  const genres = ["All", "Action", "Adventure", "Crime", "Drama", "Romance", "Sci-Fi", "Thriller"]

  const filteredMovies = movies.filter(movie => {
    if (genre === "all") return true
    return movie.genre.includes(genre.charAt(0).toUpperCase() + genre.slice(1))
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold">Movies</h1>
        
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <Select value={genre} onValueChange={setGenre}>
              <SelectTrigger className="w-[150px] bg-gray-800 border-gray-700">
                <SelectValue placeholder="Genre" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                {genres.map((g) => (
                  <SelectItem key={g.toLowerCase()} value={g.toLowerCase()}>
                    {g}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[150px] bg-gray-800 border-gray-700">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="alphabetical">A-Z</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredMovies.map((movie) => (
          <Card
            key={movie.id}
            className="bg-gray-900 border-gray-800 overflow-hidden group cursor-pointer hover:ring-2 hover:ring-orange-500 transition-all"
          >
            <div className="relative aspect-[2/3]">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{movie.title}</h3>
                  <p className="text-sm text-gray-300 line-clamp-3 mb-3">{movie.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {movie.genre.slice(0, 2).map((g) => (
                      <Badge key={g} variant="secondary" className="text-xs">
                        {g}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Button className="w-full bg-white text-black hover:bg-gray-200" size="sm">
                    <Play className="w-4 h-4 mr-2" />
                    Play
                  </Button>
                  <Button variant="secondary" className="w-full" size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add to List
                  </Button>
                </div>
              </div>
              
              {/* Rating badge */}
              <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                <span className="text-xs font-medium">{movie.rating}</span>
              </div>
              
              {/* Year badge */}
              <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded">
                <span className="text-xs font-medium">{movie.year}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}