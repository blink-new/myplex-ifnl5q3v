import { Play, Plus, Info, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  // Mock data for demonstration
  const featuredContent = {
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&h=1080&fit=crop",
    year: "2014",
    rating: "8.6",
    duration: "2h 49m"
  }

  const continueWatching = [
    {
      id: 1,
      title: "Breaking Bad",
      episode: "S3 E7",
      progress: 65,
      thumbnail: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400&h=225&fit=crop"
    },
    {
      id: 2,
      title: "The Office",
      episode: "S7 E22",
      progress: 30,
      thumbnail: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=400&h=225&fit=crop"
    },
    {
      id: 3,
      title: "Stranger Things",
      episode: "S4 E9",
      progress: 90,
      thumbnail: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=225&fit=crop"
    }
  ]

  const trending = [
    { id: 1, title: "The Last of Us", type: "TV Show", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=300&h=450&fit=crop" },
    { id: 2, title: "Top Gun: Maverick", type: "Movie", image: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=300&h=450&fit=crop" },
    { id: 3, title: "Wednesday", type: "TV Show", image: "https://images.unsplash.com/photo-1575908539614-ff89490f4a78?w=300&h=450&fit=crop" },
    { id: 4, title: "Avatar: The Way of Water", type: "Movie", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop" },
    { id: 5, title: "The Mandalorian", type: "TV Show", image: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=300&h=450&fit=crop" },
  ]

  const recentlyAdded = [
    { id: 1, title: "Oppenheimer", type: "Movie", year: "2023", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop" },
    { id: 2, title: "Succession", type: "TV Show", year: "2023", image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=300&h=450&fit=crop" },
    { id: 3, title: "The Bear", type: "TV Show", year: "2023", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=450&fit=crop" },
    { id: 4, title: "Barbie", type: "Movie", year: "2023", image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=300&h=450&fit=crop" },
    { id: 5, title: "Beef", type: "TV Show", year: "2023", image: "https://images.unsplash.com/photo-1534817557314-c781397d0b87?w=300&h=450&fit=crop" },
  ]

  return (
    <div className="space-y-8">
      {/* Featured Content Hero */}
      <section className="relative -mx-4 -mt-8">
        <div
          className="relative h-[600px] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.3) 100%), url(${featuredContent.image})`
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{featuredContent.title}</h1>
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="secondary">{featuredContent.year}</Badge>
                <span className="text-sm">{featuredContent.duration}</span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm">{featuredContent.rating}</span>
                </div>
              </div>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl">{featuredContent.description}</p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                  <Play className="w-5 h-5 mr-2" />
                  Play
                </Button>
                <Button size="lg" variant="secondary" className="bg-gray-800/80 hover:bg-gray-700">
                  <Info className="w-5 h-5 mr-2" />
                  More Info
                </Button>
                <Button size="lg" variant="ghost" className="text-white hover:bg-gray-800/80">
                  <Plus className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continue Watching */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Continue Watching</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {continueWatching.map((item) => (
            <Card key={item.id} className="bg-gray-900 border-gray-800 overflow-hidden group cursor-pointer">
              <div className="relative">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button size="icon" className="rounded-full bg-white/90 text-black hover:bg-white">
                    <Play className="w-6 h-6" />
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                  <div
                    className="h-full bg-orange-500"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.episode}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Trending Now */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-orange-500" />
          <h2 className="text-2xl font-semibold">Trending Now</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {trending.map((item) => (
            <Card key={item.id} className="bg-gray-900 border-gray-800 overflow-hidden group cursor-pointer">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-black/70 text-white">{item.type}</Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Recently Added */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Recently Added</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {recentlyAdded.map((item) => (
            <Card key={item.id} className="bg-gray-900 border-gray-800 overflow-hidden group cursor-pointer">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.year}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}