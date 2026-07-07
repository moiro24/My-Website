import type { Blog } from "@/types/blog";

export const blogPosts: Blog[] = [
  {
    _id: 1,
    title: "How AI Tools Help Startups Move Faster",
    slug: "how-ai-tools-help-startups-move-faster",
    metadata: "A practical look at how lean teams use AI to ship faster and reduce repetitive work.",
    body: "AI tools can remove repetitive tasks from the product workflow, giving teams more time to focus on customer value.",
    mainImage: "/images/blog/blog-1.jpg",
    author: {
      name: "Maya Chen",
      image: "/images/team/team-01.jpg",
      slug: "maya-chen",
    },
    tags: ["AI", "Productivity"],
    publishedAt: "2026-03-12",
  },
  {
    _id: 2,
    title: "Designing Better AI Experiences for Everyday Users",
    slug: "designing-better-ai-experiences-for-everyday-users",
    metadata: "Good AI products feel intuitive. The best ones make advanced capabilities feel effortless.",
    body: "Clear defaults, thoughtful prompts, and transparent feedback loops make AI assistive experiences easier to trust.",
    mainImage: "/images/blog/blog-2.jpg",
    author: {
      name: "Leo Martinez",
      image: "/images/team/team-02.jpg",
      slug: "leo-martinez",
    },
    tags: ["Design", "UX"],
    publishedAt: "2026-04-02",
  },
  {
    _id: 3,
    title: "Why Fast Prototyping Matters in Modern SaaS",
    slug: "why-fast-prototyping-matters-in-modern-saas",
    metadata: "Rapid experimentation keeps teams aligned and helps validate product ideas before they become expensive.",
    body: "A flexible prototype can uncover product assumptions earlier than a polished build ever could.",
    mainImage: "/images/blog/blog-3.jpg",
    author: {
      name: "Sofia Patel",
      image: "/images/team/team-03.jpg",
      slug: "sofia-patel",
    },
    tags: ["SaaS", "Strategy"],
    publishedAt: "2026-05-18",
  },
];
