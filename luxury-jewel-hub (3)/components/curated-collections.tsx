import Image from "next/image"

interface Collection {
  id: string
  name: string
  image: string
}

const collections: Collection[] = [
  {
    id: "wedding",
    name: "Wedding Jewels",
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "festive",
    name: "Festive Collection",
    image: "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "everyday",
    name: "Everyday Elegance",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "heritage",
    name: "Heritage Classics",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=600&auto=format&fit=crop",
  },
]

export function CuratedCollections() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-light text-center mb-12 tracking-wide text-primary-foreground">
          Curated Collections
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {collections.map((collection) => (
            <a 
              key={collection.id} 
              href="#featured"
              className="group relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl md:text-3xl font-serif font-light mb-3 tracking-wide">
                  {collection.name}
                </h3>
                <span className="text-xs tracking-[0.3em] opacity-80 group-hover:opacity-100 transition-opacity">
                  EXPLORE COLLECTION
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
