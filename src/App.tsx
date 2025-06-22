import { ThemeProvider } from "next-themes"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Toaster } from "sonner"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import TVShows from "./pages/TVShows"
import Music from "./pages/Music"
import "./index.css"

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv-shows" element={<TVShows />} />
            <Route path="/music" element={<Music />} />
          </Routes>
        </Layout>
        <Toaster theme="dark" />
      </Router>
    </ThemeProvider>
  )
}

export default App