export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          One Place. <br />
          <span className="text-gray-400">Every Thing That Matters.</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mb-10">
          A home for our ministry, leadership development, and social impact work — all in one place.
        </p>
        <div className="flex gap-4">
          <a href="/ministry" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Explore Ministry
          </a>
          <a href="/impact" className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
            Social Impact
          </a>
        </div>
      </section>
    </div>
  );
}