import { Handlers, STATUS_CODE } from "$fresh/server.ts";
import * as db from "./db.ts"; // Replace with your actual database module

export const handler: Handlers = {
    GET(req) {
        const url = new URL(req.url);
        const name = url.searchParams.get("name") || "";
        const title = url.searchParams.get("title") || "";
        const medium = url.searchParams.get("medium") || "";

        try {
            let results: any[] = [];

            if (name) {
                const artistResults = db.getArtistByName(name).map(([id, name, email]) => ({
                    id,
                    type: "artist",
                    name,
                    email,
                }));
                results = results.concat(artistResults);
            }

            if (title) {
                const artworkResults = db.getArtworksByTitle(title).map(([id, title, name]) => ({
                    id,
                    type: "artwork",
                    name,
                    title,
                }));
                results = results.concat(artworkResults);
            }

            if (medium) {
                const mediumResults = db.getArtworksByMedium(medium).map(([id, title, medium, name]) => ({
                    id,
                    type: "artwork",
                    medium,
                    name,
                    title,
                }));
                results = results.concat(mediumResults);
            }

            console.log("Results:", results);
            // Return the combined results
            return new Response(JSON.stringify(results), {
                status: STATUS_CODE.OK,
                headers: { "Content-Type": "application/json" },
            });

        } catch (error) {
            console.error("Error in GET handler:", error);
            return new Response(
                JSON.stringify({ error: "Failed to fetch search results." }),
                { status: STATUS_CODE.InternalServerError, headers: { "Content-Type": "application/json" } },
            );
        }
    },
};
