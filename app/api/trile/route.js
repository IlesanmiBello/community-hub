import Parser from 'rss-parser';

export async function GET() {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL('https://trile.org/feed/');
    return Response.json({ posts: feed.items });
  } catch (error) {
    return Response.json({ posts: [] });
  }
}