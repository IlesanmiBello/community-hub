import Parser from 'rss-parser';

async function getPosts() {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL('https://livelyoracles561710947.wordpress.com/feed/');
    return feed.items.slice(0, 6);
  } catch (error) {
    return [];
  }
}

export default async function Ministry() {
  const posts = await getPosts();
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Ministry</h1>
        <p className="text-gray-400 mb-12">Teachings, reflections and the Word from Lively Oracles.</p>
        {posts.length === 0 ? (
          <div className="border border-gray-800 rounded-xl p-8 text-center">
            <p className="text-gray-400 mb-4">Blog posts will appear here automatically.</p>
            <a href="https://livelyoracles561710947.wordpress.com" target="_blank" rel="noopener noreferrer" className="text-white underline">
              Visit Lively Oracles →
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <a key={index} href={post.link} target="_blank" rel="noopener noreferrer" className="border border-gray-800 rounded-xl p-6 hover:border-gray-500 transition">
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-400 text-sm line-clamp-3">{post.contentSnippet}</p>
                <p className="text-gray-600 text-xs mt-4">{new Date(post.pubDate).toLocaleDateString()}</p>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}