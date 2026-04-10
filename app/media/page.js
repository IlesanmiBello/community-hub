export default function Media() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <p style={{color: '#C9A84C'}} className="text-sm tracking-widest uppercase mb-3">Listen & Watch</p>
        <h1 className="text-4xl font-bold mb-4">Media</h1>
        <p className="text-gray-400 mb-16">Audio teachings, live streams and more from Living Oracles Ministries.</p>

        {/* Live Stream Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Live Stream</h2>
          <p className="text-gray-400 text-sm mb-6">When we go live, you'll find it here.</p>
          <div className="rounded-xl p-8 text-center" style={{backgroundColor: '#111', border: '1px solid #2A2A2A'}}>
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#1A1A1A', border: '1px solid #C9A84C'}}>
              <span style={{color: '#C9A84C'}} className="text-2xl">◉</span>
            </div>
            <p className="text-gray-400 mb-2">No live stream at the moment.</p>
            <p className="text-gray-600 text-sm">Check back soon or join our Telegram for announcements.</p>
          </div>
        </div>

        {/* Audio Library */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Audio Library</h2>
          <p className="text-gray-400 text-sm mb-6">Access our full collection of audio teachings on Telegram.</p>
          <div className="flex flex-col gap-4">
            <a href="https://t.me/LivingOraclesMinistries" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-xl px-8 py-4 hover:opacity-80 transition" style={{backgroundColor: '#111', border: '1px solid #2A2A2A'}}>
              <span style={{color: '#C9A84C'}} className="text-2xl">✈</span>
              <div>
                <p className="font-semibold">Living Oracles Ministries</p>
                <p className="text-gray-400 text-sm">Join our main channel for teachings and updates</p>
              </div>
            </a>
            <a href="https://t.me/TheSoT" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-xl px-8 py-4 hover:opacity-80 transition" style={{backgroundColor: '#111', border: '1px solid #2A2A2A'}}>
              <span style={{color: '#C9A84C'}} className="text-2xl">✈</span>
              <div>
                <p className="font-semibold">The Scribe of Truth</p>
                <p className="text-gray-400 text-sm">Audio teachings and messages</p>
              </div>
            </a>
          </div>
        </div>

        {/* Community */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Community</h2>
          <p className="text-gray-400 text-sm mb-6">Join our WhatsApp group to connect with the community.</p>
          <a href="https://chat.whatsapp.com/Il5Qsmvgc3Z5DdrzpCziiH?mode=gi_t" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-xl px-8 py-4 hover:opacity-80 transition" style={{backgroundColor: '#111', border: '1px solid #2A2A2A'}}>
            <span className="text-2xl">💬</span>
            <div>
              <p className="font-semibold">WhatsApp Community Group</p>
              <p className="text-gray-400 text-sm">Join the conversation and stay connected</p>
            </div>
          </a>
        </div>

        {/* Spotify - Coming Soon */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Podcast</h2>
          <p className="text-gray-400 text-sm mb-6">Coming to Spotify in Q2 2026.</p>
          <div className="rounded-xl px-8 py-4 flex items-center gap-3" style={{backgroundColor: '#111', border: '1px solid #2A2A2A'}}>
            <span className="text-2xl">🎵</span>
            <div>
              <p className="font-semibold">Spotify Podcast</p>
              <p className="text-gray-400 text-sm">Coming soon — stay tuned</p>
            </div>
            <span className="ml-auto text-xs px-3 py-1 rounded-full" style={{backgroundColor: '#1A1A1A', color: '#C9A84C', border: '1px solid #C9A84C'}}>Coming Q2</span>
          </div>
        </div>

      </div>
    </div>
  );
}