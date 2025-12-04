"use client"
import { useState } from "react"
import { searchMovies } from "../../lib/apiClient"

export default function Search() {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function doSearch(e) {
        e?.preventDefault()
        if (!query) return
        setLoading(true)
        setError(null)
        try {
            const data = await searchMovies(query)
            setResults(data.results || [])
        } catch (err) {
            setError(String(err))
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <form onSubmit={doSearch}>
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search movies..."
                    aria-label="Search movies"
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            <ul>
                {results.map((m) => (
                    <li key={m.id}>
                        {m.title} {m.release_date ? `(${m.release_date.slice(0, 4)})` : ""}
                    </li>
                ))}
            </ul>
        </div>
    )
}