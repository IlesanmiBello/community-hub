'use client';

import { useState } from 'react';

export default function Impact() {
  const [posts, setPosts] = useState([]);
  const [visible, setVisible] = useState(6);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  async function loadPosts() {
    if (loaded) return;
    setLoading(true);
    try {
      const res = await fetch('/api/trile');
      const data = await res.json();
      setPosts(data.posts || []);
    } catch (e) {
      setPosts([]);
    }
    setLoaded(true);
    setLoading(false);
  }

  if (!loaded && !loading) {
    loadPosts();
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Social Impact</h1>
        <p className="text-gray-400 mb-4">Empowering African leaders and entrepreneurs through TRILE.</p>
        <a href="https://www.trile.org" target="_blank" rel="noopener noreferrer" className="inline-block border border-white text-white px-6 py-2 rounded-full text-sm hover:bg-white hover:text-black transition mb-12">Visit TRILE</a>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <a href="https://trile.org/tea" target="_blank" rel="noopener noreferrer" className="border border-gray-800 rounded-xl p-6 hover:border-gray-500 transition">
            <h2 className="text-xl font-semibold mb-2">TRILE Entrepreneurship Academy</h2>
            <p className="text-gray-400 text-sm">Equipping the next generation of African entrepreneurs with the tools and mindset to build.</p>
          </a>
          <a href="https://trile.org/ylap" target="_blank" rel="noopener noreferrer" className="border border-gray-800 rounded-xl p-6 hover:border-gray-500 transition">
            <h2 className="text-xl font-semibold mb-2">Young Leaders Academy Program</h2>
            <p className="text-gray-400 text-sm">Developing young African leaders through structured mentorship and leadership training.</p>
          </a>
        </div>
        <h2 className="text-2xl font-bold mb-8">From the TRILE Blog</h2>
        {loading && <p className="text-gray-400">Loading posts...</p>}
        {!loading && posts.length === 0 && loaded && (
          <div className="border border-gray-800 rounded-xl p-8 text-center">
            <p className="text-gray-400 mb-4">Blog posts will appear here automatically.</p>
            <a href="https://trile.org/blog-2" target="_blank" rel="noopener noreferrer" className="text-white underline">Visit TRILE Blog</a>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, visible).map((post, index) => (
            <a key={index} href={post.link} target="_blank" rel="noopener noreferrer" className="border border-gray-800 rounded-xl p-6 hover:border-gray-500 transition">
              <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
              <p className="text-gray-400 text-sm line-clamp-3">{post.contentSnippet}</p>
              <p className="text-gray-600 text-xs mt-4">{new Date(post.pubDate).toLocaleDateString()}</p>
            </a>
          ))}
        </div>
        {posts.length > visible && (
          <div className="text-center mt-12">
            <button onClick={() => setVisible(visible + 6)} className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">Load More</button>
          </div>
        )}
      </div>
    </div>
  );
}