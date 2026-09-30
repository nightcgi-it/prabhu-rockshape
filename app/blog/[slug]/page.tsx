import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { BLOG_POSTS, BlogPost } from "@/lib/blog";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | Prabhu Rockshape Machinery Ltd.`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://prabhurockshape.com/blog/${post.slug}/`,
      type: "article",
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default function SingleBlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: post.title,
    description: post.excerpt,
    image: `https://prabhurockshape.com${post.coverImage}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Prabhu Rockshape Machinery Ltd.",
      logo: {
        "@type": "ImageObject",
        url: "https://prabhurockshape.com/images/rockshape-logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://prabhurockshape.com/blog/${post.slug}/`,
    },
  };

  return (
    <article className="single-blog-article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* ARTICLE HEADER / HERO */}
      <header className="single-blog-hero">
        <div className="wrap">
          {/* Breadcrumbs */}
          <nav className="blog-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="bc-sep">/</span>
            <Link href="/blog">Technical Insights</Link>
            <span className="bc-sep">/</span>
            <span className="bc-current">{post.category}</span>
          </nav>

          <div className="single-blog-header-content">
            <div className="single-blog-badges">
              <span className="badge-category">{post.category}</span>
              <span className="badge-time">{post.readTime}</span>
            </div>

            <h1 className="single-blog-title">{post.title}</h1>

            <div className="single-blog-author-bar">
              <div className="author-info">
                <span className="author-name">{post.author.name}</span>
                <span className="author-role">{post.author.role}</span>
              </div>
              <div className="post-date-wrap">
                <span className="date-label">Published</span>
                <time className="post-date">{post.date}</time>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* COVER IMAGE */}
      <div className="wrap single-blog-cover-wrap">
        <div className="single-blog-cover">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className="cover-caption">
          Fig. 1: Metallographic analysis and quality verification at Prabhu Rockshape Central Testing Laboratory, Solapur.
        </p>
      </div>

      {/* ARTICLE BODY */}
      <div className="wrap single-blog-content-layout">
        {/* Main Content Column */}
        <div className="single-blog-main-content">
          {/* Lead Paragraph */}
          <p className="article-lead">{post.content.lead}</p>

          {/* Sections */}
          {post.content.sections.map((sec, idx) => (
            <section key={idx} className="article-section">
              <h2 className="section-h2">{sec.heading}</h2>
              {sec.body.map((p, pIdx) => (
                <p key={pIdx} className="section-p">
                  {p}
                </p>
              ))}

              {/* Optional Callout */}
              {sec.callout && (
                <div className={`article-callout callout-${sec.callout.type}`}>
                  <div className="callout-header">
                    <span className="callout-badge">{sec.callout.title}</span>
                  </div>
                  <p className="callout-text">{sec.callout.text}</p>
                </div>
              )}

              {/* Optional Structured Table */}
              {sec.table && (
                <div className="article-table-wrap">
                  {sec.table.caption && (
                    <div className="table-caption">{sec.table.caption}</div>
                  )}
                  <div className="table-scroll">
                    <table className="article-table">
                      <thead>
                        <tr>
                          {sec.table.headers.map((h, hIdx) => (
                            <th key={hIdx}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sec.table.rows.map((r, rIdx) => (
                          <tr key={rIdx}>
                            {r.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={cIdx === 0 ? "td-primary" : undefined}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </section>
          ))}

          {/* Key Takeaways Box */}
          <div className="article-takeaways-box">
            <h3 className="takeaways-title">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Key Engineering Takeaways
            </h3>
            <ul className="takeaways-list">
              {post.content.takeaways.map((item, iIdx) => (
                <li key={iIdx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="article-tags-wrap">
            <span className="tags-label">Topics:</span>
            <div className="tags-list">
              {post.tags.map((t) => (
                <span key={t} className="article-tag">
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Back to Blog */}
          <div className="article-nav-back">
            <Link href="/blog" className="btn btn-primary">
              ← Back to All Technical Insights
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="single-blog-sidebar">
          {/* Author Box */}
          <div className="sidebar-card author-card">
            <div className="author-card-header">
              <div className="author-avatar-ph">PR</div>
              <div>
                <h4 className="author-name">{post.author.name}</h4>
                <p className="author-desc">{post.author.role}</p>
              </div>
            </div>
            <p className="author-bio">
              Specialized research group focusing on high-stress abrasion, sliding erosion, and high-temperature metallurgical wear solutions across Indian and international heavy industry.
            </p>
          </div>

          {/* Quick Consultation CTA */}
          <div className="sidebar-card cta-card">
            <span className="sidebar-badge">Free Technical Audit</span>
            <h4 className="sidebar-cta-title">Experiencing Rapid Chute Wear?</h4>
            <p className="sidebar-cta-desc">
              Our metallurgists conduct on-site audits to analyze particle velocity, hardness, and thermal profile to specify guaranteed wear solutions.
            </p>
            <Link href="/contact-us" className="btn btn-primary btn-block">
              Request Wear Assessment →
            </Link>
          </div>

          {/* Quick Specifications */}
          <div className="sidebar-card specs-card">
            <h4 className="sidebar-specs-title">Prabhu Rockshape Standards</h4>
            <ul className="sidebar-specs-list">
              <li>
                <strong>Quality System:</strong> TÜV Nord ISO 9001:2015
              </li>
              <li>
                <strong>Hardness Testing:</strong> ASTM E18 Rockwell C
              </li>
              <li>
                <strong>Abrasion Test:</strong> ASTM G65 Standard
              </li>
              <li>
                <strong>Manufacturing Plant:</strong> Solapur, Maharashtra
              </li>
            </ul>
          </div>
        </aside>
      </div>

      {/* RELATED ARTICLES */}
      {relatedPosts.length > 0 && (
        <section className="pad wrap related-articles-sec">
          <div className="sec-head">
            <div className="eyebrow">Continue Reading</div>
            <h2 className="display"><span className="ln">Related Technical Papers</span></h2>
          </div>
          <div className="blog-grid related-grid">
            {relatedPosts.map((rPost) => (
              <article key={rPost.slug} className="blog-card">
                <Link href={`/blog/${rPost.slug}`} className="blog-card-img-wrap">
                  <Image
                    src={rPost.coverImage}
                    alt={rPost.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                  <span className="blog-cat-tag">{rPost.category}</span>
                </Link>
                <div className="blog-card-body">
                  <div className="blog-meta">
                    <span>{rPost.date}</span>
                    <span className="blog-sep">·</span>
                    <span>{rPost.readTime}</span>
                  </div>
                  <h3 className="blog-card-title">
                    <Link href={`/blog/${rPost.slug}`}>{rPost.title}</Link>
                  </h3>
                  <p className="blog-card-excerpt">{rPost.excerpt}</p>
                  <Link href={`/blog/${rPost.slug}`} className="read-more-link">
                    Read Article <span className="arw">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
