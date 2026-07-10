// Stub - Docs/Blog feature not used in portfolio
export function getPostSlugs() {
  return [];
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  return {
    slug,
    title: '',
    content: '',
    metadata: '',
  };
}

export function getAllPosts(fields: string[] = []) {
  return [];
}
