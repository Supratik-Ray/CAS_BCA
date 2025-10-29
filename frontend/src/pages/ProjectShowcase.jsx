import { useEffect, useState } from "react"
import PostCard from "./PostCard"
import SearchBar from "./SearchBar"
import { useAuth } from "../hooks/useAuth"

const ProjectShowcase = () => {
  const { token } = useAuth()
  const [projects, setProjects] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const response = await fetch("https://cas-bca.onrender.com/api/v1/projects", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })

        if (!response.ok) throw new Error("Failed to fetch projects")

        const data = await response.json()
        setProjects(data.projects || [])
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchProjects()
  }, [token])

  const handleSearch = (query) => {
    if (!query.trim()) {
      setSearchResults(projects)
      return
    }
    const filtered = projects.filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    )
    setSearchResults(filtered)
  }

  useEffect(() => {
    setSearchResults(projects)
  }, [projects])

  return (
    <div className="pt-15 sm:pt-25 lg:pt-30">
      <header className="grid mb-5 sm:flex gap-2 sm:justify-between items-center px-10 md:px-15px lg:px-20">
        <h1 className="text-[18px] text-center sm:text-[22px] lg:text-[30px] uppercase font-black tracking-[3px]">
          Project Showcase
        </h1>
        <SearchBar onSearch={handleSearch} />
      </header>

      {isLoading && (
        <p className="text-center text-gray-500">Loading projects...</p>
      )}
      {error && <p className="text-center text-red-500">⚠️ {error}</p>}

      <article
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        px-6 md:px-15px lg:px-20 pb-10 gap-6 "
      >
        {searchResults.map((p, index) => (
          <PostCard
            key={index}
            createdAt={p.createdAt}
            id={p._id}
            description={p.description || "No description given by author"}
            github={p.githubLink}
            image={p.image?.url || "https://via.placeholder.com/400x200?text=No+Image"}
            liveLink={p.liveLink}
            title={p.title}
            author={p.createdBy?.name || "Unknown"}
            authorId={p.createdBy?._id}
            likes={p.totalLikes || 0}
            
            saves={p.saves || 0}
            shares={p.shares || 0}
            comments={p.comments || 0}
          />
        ))}
      </article>
    </div>
  )
}

export default ProjectShowcase
