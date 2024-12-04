
import Search from "../islands/Search.tsx";

export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#86caef]">
      <div class="max-w-screen-2xl mx-auto flex flex-col items-center justify-center">
        <h1 class="mt-10 text-5xl font-bold">Art Marketplace</h1>
        <p class="my-4">
          Search for Artwork
        </p>
        <Search/>
      </div>
    </div>
  );
}
