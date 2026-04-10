export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <p style={{color: '#C9A84C'}} className="text-sm tracking-widest uppercase mb-6">Welcome to</p>
        <h1 className="text-6xl font-bold mb-4 leading-tight">Living Oracles<br />Ministries</h1>
        <p className="text-lg text-gray-400 max-w-xl mb-10">
          A home for our ministry, social impact work, and community — all in one place.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="/ministry" style={{backgroundColor: '#C9A84C', color: '#000'}} className="px-8 py-3 rounded-full font-semibold hover:opacity-90 transition">
            Explore Ministry
          </a>
          <a href="/impact" className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
            Social Impact
          </a>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        <a href="/ministry" className="rounded-xl p-8 hover:opacity-80 transition" style={{backgroundColor: '#111', border: '1px solid #2A2A2A'}}>
          <p style={{color: '#C9A84C'}} className="text-xs tracking-widest uppercase mb-3">Ministry</p>
          <h2 className="text-xl font-semibold mb-2">The Scribe</h2>
          <p className="text-gray-400 text-sm">Teachings, reflections and the Word. Preserving Truth, Preparing for Revival.</p>
        </a>
        <a href="/impact" className="rounded-xl p-8 hover:opacity-80 transition" style={{backgroundColor: '#111', border: '1px solid #2A2A2A'}}>
          <p style={{color: '#C9A84C'}} className="text-xs tracking-widest uppercase mb-3">Social Impact</p>
          <h2 className="text-xl font-semibold mb-2">TRILE</h2>
          <p className="text-gray-400 text-sm">Empowering African leaders and entrepreneurs to build and create lasting impact.</p>
        </a>
        <a href="/media" className="rounded-xl p-8 hover:opacity-80 transition" style={{backgroundColor: '#111', border: '1px solid #2A2A2A'}}>
          <p style={{color: '#C9A84C'}} className="text-xs tracking-widest uppercase mb-3">Media</p>
          <h2 className="text-xl font-semibold mb-2">Audio Library</h2>
          <p className="text-gray-400 text-sm">Listen to our audio teachings and live streams from our community.</p>
        </a>
      </section>
    </div>
  );
}