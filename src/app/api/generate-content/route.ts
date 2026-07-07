export async function POST(req: Request) {
  const body = await req.json();
  const { prompt } = body;

  if (!process.env.OPENAI_API_KEY) {
    return new Response(JSON.stringify("OpenAI API key is not configured."), {
      status: 500,
    });
  }

  try {
    return new Response(JSON.stringify("OpenAI integration is disabled in this local build."));
  } catch (error: any) {
    return new Response(JSON.stringify(error?.message || "Request failed"), {
      status: 500,
    });
  }
}
