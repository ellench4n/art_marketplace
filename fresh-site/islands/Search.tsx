import axiod from "https://deno.land/x/axiod@0.26.2/mod.ts";
import { useEffect, useState } from "preact/hooks";

interface RESULTS {
    id: number;
    type: string;
    name?: string;
    email?: string;
    title?: string;
    artist_name?: string;
    medium?: string;
}

export default function Search() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState<RESULTS[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchSearchResults = async (url: string) => {
        setLoading(true);
        console.log("Loading:");
        try {
            const res = await axiod.get(url);
            console.log("Response Data:", res.data);
            setResults(res.data || []);
        } catch (error) {
            console.error("Error fetching search results:", error);
            setResults([]);
        } finally {
            setLoading(false);
        }
    };

    const handleSearchByName = () => fetchSearchResults(`/api/searchData?name=${encodeURIComponent(search)}`);
    const handleSearchByTitle = () => fetchSearchResults(`/api/searchData?title=${encodeURIComponent(search)}`);
    const handleSearchByMedium = () => fetchSearchResults(`/api/searchData?medium=${encodeURIComponent(search)}`);

    const displaySearchResults = async () => {
        await fetchSearchResults("/api/searchData");
    };

    useEffect(() => {
        displaySearchResults();
    }, []);

    return (
        <>
            <div class="mt-10 mx-auto max-w-screen-md w-full">
                <div class="flex items-center gap-4">
                    <input
                        id="search"
                        name="search"
                        type="text"
                        placeholder="Enter Search"
                        required
                        class="w-full h-12 rounded-md py-1.5 px-3.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                        onChange={(e: any) => setSearch(e.target.value)}
                        value={search}
                    />
                    <button
                        onClick={handleSearchByName}
                        class="px-4 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-700 active:bg-amber-900 text-white text-sm font-medium"
                    >
                        By Name
                    </button>
                    <button
                        onClick={handleSearchByTitle}
                        class="px-4 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium hover:border-black"
                    >
                        By Title
                    </button>
                    <button
                        onClick={handleSearchByMedium}
                        class="px-4 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium"
                    >
                        By Medium
                    </button>
                </div>
            </div>
            <div class="mt-10 mx-auto max-w-screen-md w-full">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div class="flex flex-col gap-4">
                        {results.length > 0 ? (
                            results.map((result) => (
                                <div
                                    key={result.id}
                                    class="mb-5 h-12 rounded-md bg-gray-50 flex justify-between items-center content-between"
                                >
                                    <p class="mx-2.5">{result.type === 'artist' ? result.name : 
                                        (<p>{result.title} - {result.name}</p>)
                                    }</p>
                                    <p class="mx-2.5 hidden">{result.type === 'artist' ? (
                                            <p>Email: {result.email}</p>
                                        ) : (
                                            <div>
                                                <p>Artist: {result.name}</p>
                                                <p>Medium: {result.medium}</p>
                                                <button class="px-3 flex h-full justify-center items-center">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        )}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p class="text-gray-500">No results found.</p>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}
