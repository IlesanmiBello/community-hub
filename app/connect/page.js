export default function Connect() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <p style={{color: '#C9A84C'}} className="text-sm tracking-widest uppercase mb-3">Get In Touch</p>
        <h1 className="text-4xl font-bold mb-4">Connect</h1>
        <p className="text-gray-400 mb-16">We'd love to hear from you. Find us on any of these platforms.</p>

        {/* Ministry Links */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Ministry</h2>
          <div className="flex flex-col gap-4">
            <a href="https://livelyoracles561710947.wordpress.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-xl px-8 py-4 hover:opacity-80 transition" style={{backgroundColor: '#111', border: '1px solid #2A2A2A'}}>
              <span style={{color: '#C9A84C'}} className="text-xl">✍</span>
              <div>
                <p className="font-semibold">The Scribe Blog</p>
                <p className="text-gray-400 text-sm">Preserving Truth, Preparing for Revival</p>
              </div>
            </a>
            <a href="https://t.me/LivingOraclesMinistries" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-xl px-8 py-4 hover:opacity-80 transition" style={{backgroundColor: '#111', border: '1px solid #2A2A2A'}}>
              <span style={{color: '#C9A84C'}} className="text-xl">✈</span>
              <div>
                <p className="font-semibold">Telegram — Living Oracles</p>
                <p className="text-gray-400 text-sm">Audio library and announcements</p>
              </div>
            </a>
            <a href="https://t.me/TheSoT" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-xl px-8 py-4 hover:opacity-80 transition" style={{backgroundColor: '#111', border: '1px solid #2A2A2A'}}>
              <span style={{color: '#C9A84C'}} className="text-xl">✈</span>
              <div>
                <p className="font-semibold">Telegram — The Scribe of Truth</p>
                <p className="text-gray-400 text-sm">Audio teachings and messages</p>
              </div>
            </a>
            <a href="https://chat.whatsapp.com/Il5Qsmvgc3Z5DdrzpCziiH?mode=gi_t" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-xl px-8 py-4 hover:opacity-80 transition" style={{backgroundColor: '#111', border: '1px solid #2A2A2A'}}>
              <span className="text-xl">💬</span>
              <div>
                <p className="font-semibold">WhatsApp Community</p>
                <p className="text-gray-400 text-sm">Join the conversation</p>
              </div>
            </a>
          </div>
        </div>

        {/* Social Impact Links */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Social Impact — TRILE</h2>
          <div className="flex flex-col gap-4">
            <a href="https://www.trile.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-xl px-8 py-4 hover:opacity-80 transition" style={{backgroundColor: '#111', border: '1px solid #2A2A2A'}}>
              <span style={{color: '#C9A84C'}} className="text-xl">🌍</span>
              <div>
                <p className="font-semibold">TRILE Website</p>
                <p className="text-gray-400 text-sm">The Royal Institute for Leaders and Entrepreneurs</p>
              </div>
            </a>
            <a href="https://instagram.com/trile_global" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-xl px-8 py-4 hover:opacity-80 transition" style={{backgroundColor: '#111', border: '1px solid #2A2A2A'}}>
              <span style={{color: '#C9A84C'}} className="text-xl">📸</span>
              <div>
                <p className="font-semibold">Instagram — @trile_global</p>
                <p className="text-gray-400 text-sm">Follow us for updates and inspiration</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/company/the-royal-institute-of-leadership-and-entrepreneurship/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-xl px-8 py-4 hover:opacity-80 transition" style={{backgroundColor: '#111', border: '1px solid #2A2A2A'}}>
              <span style={{color: '#C9A84C'}} className="text-xl">💼</span>
              <div>
                <p className="font-semibold">LinkedIn — TRILE</p>
                <p className="text-gray-400 text-sm">Connect with us professionally</p>
              </div>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100095806260458" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-xl px-8 py-4 hover:opacity-80 transition" style={{backgroundColor: '#111', border: '1px solid #2A2A2A'}}>
              <span style={{color: '#C9A84C'}} className="text-xl">👥</span>
              <div>
                <p className="font-semibold">Facebook — TRILE</p>
                <p className="text-gray-400 text-sm">Like and follow our page</p>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}