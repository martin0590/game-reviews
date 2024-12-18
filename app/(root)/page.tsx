import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { REVIEW_QUERY } from "@/sanity/lib/queries";
import { StartupCardType } from "@/types";

export default async function Home({ searchParams }: {searchParams: Promise<{ query?: string }>}) {
  const query = (await searchParams).query;

  const params = { search: query || null}
  const posts = await client.fetch(REVIEW_QUERY, params)

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Escribe tu review</h1>

        <p className="sub-heading !max-w-3xl">
          Toda la informacion que necesitas sobre el juego que estas buscando
        </p>

        <SearchForm query={query}/>
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : 'All Startups'}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ): (
            <p className="no-results">No se encontraron juegos</p>
          )}
        </ul>
      </section>
    </>
  );
}
