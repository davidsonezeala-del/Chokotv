import ads from '../../../data/ads.json'

export async function GET() {
  return new Response(JSON.stringify(ads), {
    headers: { 'Content-Type': 'application/json' }
  })
}
