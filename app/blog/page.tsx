"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePageAnimations, animateHeroTimeline } from "@/lib/useGsap";
import PageHero from "@/components/PageHero";
import { BLOG_POSTS, BlogPost } from "@/lib/blog";

const HERO_IMG = "/images/blog-hero.jpg";

const ALL_CATEGORY = "All Insights";

const categories = [
  ALL_CATEGORY,
  ...Array.from(new Set(BLOG_POSTS.map((p) => p.category))),
];

export default function BlogIndexPage() {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);

  const scope = usePageAnimations(({ gsap, reduced }) => {
    animateHeroTimeline(gsap, reduced);
  });

  const filteredPosts =
    activeCategory === ALL_CATEGORY
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCategory);

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  return (
    <div ref={scope}>
      {/* HERO */}
      <PageHero
        image={HERO_IMG}
        imageAlt="Prabhu Rockshape engineering and metallurgical insights"
        badges={[
          { text: "Technical Knowledge Base", highlight: true },
          { text: "Engineering Papers" },
          { text: "ASTM & Metallurgy" },
        ]}
        titleLines={[
          "Industrial Insights",
          "And Metallurgy Knowledge",
        ]}
        accentLineIndex={1}
        description="Authoritative technical papers, ASTM wear benchmark studies, and metallurgical analyses from Prabhu Rockshape's Solapur research and applications engineering division."
        telemetry={[
          { val: "30+ Years", lbl: "Metallurgical Experience" },
          { val: "ASTM G65", lbl: "Standardized Testing" },
          { val: "100% In-House", lbl: "Laboratory QA" },
          { val: "Peer-Reviewed", lbl: "Industrial Application Data" },
        ]}
        ctas={[
          { label: "Explore Articles", href: "#articles", primary: true },
          { label: "Consult an Engineer", href: "/contact-us" },
        ]}
      />

      {/* FEATURED ARTICLE */}
      <section className="pad wrap" id="articles">
        <div className="sec-head reveal">
          <div className="eyebrow">Featured Research</div>
          <h2 className="display"><span className="ln">Editor's Technical Pick</span></h2>
        </div>

        <div className="blog-featured-card reveal">
          <div className="blog-featured-img">
            <Image
              src={featuredPost.coverImage}
              alt={featuredPost.title}
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="blog-badge-overlay">{featuredPost.category}</div>
          </div>
          <div className="blog-featured-body">
            <div className="blog-meta">
              <span className="blog-date">{featuredPost.date}</span>
              <span className="blog-sep">·</span>
              <span className="blog-time">{featuredPost.readTime}</span>
            </div>
            <h3 className="blog-featured-title">
              <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
            </h3>
            <p className="blog-featured-excerpt">{featuredPost.excerpt}</p>
            <div className="blog-tags">
              {featuredPost.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="blog-tag-pill">
                  {tag}
                </span>
              ))}
            </div>
            <div className="blog-action">
              <Link href={`/blog/${featuredPost.slug}`} className="btn btn-primary">
                Read Full Paper <span className="arw">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ALL ARTICLES & CATEGORY FILTER */}
      <section className="pad wrap" id="library" style={{ background: "var(--wash)", borderTop: "1px solid var(--line2)" }}>
        <div className="sec-head reveal">
          <div className="eyebrow">Technical Library</div>
          <h2 className="display"><span className="ln">All Articles & Case Studies</span></h2>
        </div>

        {/* Category Pills & Filter Meta */}
        <div className="blog-filter-bar reveal">
          <div className="blog-filter-pills" role="tablist" aria-label="Article categories">
            {categories.map((cat) => {
              const count =
                cat === ALL_CATEGORY
                  ? BLOG_POSTS.length
                  : BLOG_POSTS.filter((p) => p.category === cat).length;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`filter-pill ${isActive ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  <span>{cat}</span>
                  <span className="pill-count">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="blog-filter-info">
            {activeCategory === ALL_CATEGORY ? (
              <span>Showing all <strong>{BLOG_POSTS.length}</strong> technical papers</span>
            ) : (
              <span>
                Showing <strong>{filteredPosts.length}</strong> in <em>{activeCategory}</em>{" "}
                <button
                  type="button"
                  className="blog-reset-btn"
                  onClick={() => setActiveCategory(ALL_CATEGORY)}
                >
                  · Show All
                </button>
              </span>
            )}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid" id="library-grid">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article key={`${activeCategory}-${post.slug}`} className="blog-card blog-grid-card">
                <Link href={`/blog/${post.slug}`} className="blog-card-img-wrap">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <span className="blog-cat-tag">{post.category}</span>
                </Link>
                <div className="blog-card-body">
                  <div className="blog-meta">
                    <span>{post.date}</span>
                    <span className="blog-sep">·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="blog-card-title">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-foot">
                    <div className="blog-author-meta">
                      <span className="author-name">{post.author.name}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="read-more-link">
                      Read Article <span className="arw">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="blog-empty-state">
              <p>No technical papers found in this category.</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setActiveCategory(ALL_CATEGORY)}
              >
                View All Insights <span className="arw">→</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ENGINEERING CONSULTATION CTA */}
      <section className="finalcta pad">
        <div className="wrap fc-grid">
          <h2 className="display reveal">
            <span className="ln">Have a Specific Plant Wear Problem?</span>
            <span className="ln">Speak with our Metallurgists</span>
          </h2>
          <div className="reveal">
            <Link href="/contact-us" className="btn btn-white">
              Request Wear Audit & Consultation <span className="arw">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
