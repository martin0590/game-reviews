import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: {searchParams: Promise<{ query?: string }>}) {
  const query = (await searchParams).query

  const posts = [{
     _createdAt: new Date(),
     views: 55,
     author: { _id: 1, name: 'Martin' },
     _id: 1,
     description: 'this is a description',
     category: 'Robots',
     title: 'We Robots',
     image: "https://images.unsplash.com/photo-1634912314704-c646c586b131?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.03&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    
    }]

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
