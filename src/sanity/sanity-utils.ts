export async function getPosts() {
  return [];
}

export async function getPost(slug: string) {
  return null;
}

export async function getPostsByAuthor(author: string) {
  return [];
}

export function imageBuilder(source: unknown) {
  return { url: () => (typeof source === "string" ? source : "/images/blog/default.jpg") };
}
