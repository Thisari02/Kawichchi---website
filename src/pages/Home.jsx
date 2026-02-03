export default function Home() {
  return (
    <section id="home" className="h-[90vh] flex flex-col justify-center items-center text-center bg-[url('/hero-bg.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-heading text-white mb-6">Crafted Furniture for Timeless Living</h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10">Kawichchi by Siriwardana creates premium handcrafted furniture blending tradition, sustainability, and modern elegance.</p>
        <button className="px-8 py-3 bg-accent text-white rounded hover:bg-primary hover:text-accent transition">View Our Products</button>
      </div>
    </section>
  );
}
      </div>
    </section>
  );
}
