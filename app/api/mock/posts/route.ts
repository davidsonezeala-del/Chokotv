import posts from '../../../data/posts.json'

export async function GET() {
  return new Response(JSON.stringify(posts), {
    headers: { 'Content-Type': 'application/json' }
  })
}
