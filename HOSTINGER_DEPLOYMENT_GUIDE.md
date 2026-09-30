# Hostinger Deployment Guide — Prabhu Rockshape Machinery Ltd.

This guide explains how to deploy the static build of the website onto **Hostinger** (hPanel / cPanel / Shared Hosting with Apache or LiteSpeed).

---

## 1. Automated Build & Package

To build the static export and package everything into a single ready-to-upload zip:

```bash
npm run build:hostinger
```

This runs:
1. `next build` with `output: 'export'` and `trailingSlash: true`.
2. Generates all static HTML, CSS, JavaScript, and images into the `out/` folder.
3. Packages the entire content of `out/` (including `.htaccess`, `robots.txt`, `sitemap.xml`, `site.webmanifest`, and `api/enquiry.php`) into **`hostinger-deploy.zip`** in the project root directory.

---

## 2. Deploy via Hostinger File Manager (Recommended — Fastest)

1. Log into your **Hostinger Account** & go to **hPanel**.
2. Select your domain (`prabhurockshape.com`) and open **File Manager** (Files -> File Manager).
3. Navigate into the **`public_html`** directory:
   - If there is a default `default.php` or placeholder `index.html` file from Hostinger, delete it.
4. Click the **Upload** icon (top right) -> choose **File** -> select **`hostinger-deploy.zip`**.
5. Once uploaded, right-click `hostinger-deploy.zip` and select **Extract**.
6. Extract directly into `/public_html`.
7. Once extracted, you can safely delete `hostinger-deploy.zip`.

> [!NOTE]
> Make sure the contents of `out` are directly inside `public_html/` (e.g., `public_html/index.html`, `public_html/.htaccess`, `public_html/about-us/`, etc.), NOT nested inside a subfolder like `public_html/out/`.

---

## 3. Alternative: Deploy via FTP (FileZilla / Cyberduck)

If you prefer FTP:
1. Open your FTP client (e.g., FileZilla).
2. Connect to Hostinger using your FTP host, username, and password from hPanel.
3. Open `public_html`.
4. Upload all files and folders from your local **`out/`** directory directly into **`public_html`**.
5. Ensure hidden files (specifically `.htaccess`) are set to visible and uploaded.

---

## 4. What Is Configured

### A. `.htaccess` (Apache / LiteSpeed Web Server)
- **Automatic HTTPS**: Forces all HTTP traffic to redirect to `https://` with a 301 permanent redirect.
- **Clean URLs**: Automatically resolves paths like `/products/` or `/about-us` to the corresponding `index.html` without 404 errors.
- **Custom 404**: Redirects any missing pages to the custom branded `404.html`.
- **GZIP / Brotli Compression**: Enabled for HTML, CSS, JS, SVG, JSON, and fonts via `mod_deflate`.
- **Aggressive Browser Caching**: Next.js static chunks, fonts, and images are cached for 1 year with `immutable` flag, while HTML revalidates immediately so content updates go live without clearing browser cache.
- **Security Headers**:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: SAMEORIGIN`
  - `X-XSS-Protection: 1; mode=block`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- **Access Protection**: Blocks direct access to `.env`, `.git`, `package.json`, and backup logs.

### B. Contact Form (`api/enquiry.php`)
- Next.js static exports cannot run Node.js server routes.
- On Hostinger, the contact form POSTs to `/api/enquiry`.
- The `.htaccess` file routes this directly to `api/enquiry.php`.
- `api/enquiry.php` validates the submission, dispatches an email to `marketing@prabhurockshape.com` (and `spchitte@prabhurockshape.com`), and saves an encrypted backup log to `api/enquiries_backup.log`.
- To change email recipients or mail settings, open `public_html/api/enquiry.php` and edit lines 29–33.

### C. Search Engine Optimization (SEO)
- **Robots.txt**: `public_html/robots.txt` allows bot crawling and specifies the sitemap URL.
- **Sitemap**: `public_html/sitemap.xml` contains all 14 canonical URLs across products, applications, infrastructure, about, projects, contact, and blog articles.
- **Web Manifest**: `public_html/site.webmanifest` provides PWA and browser theme color support.
- **Meta Tags**: Page-specific titles, meta descriptions, canonical tags, Open Graph images (1200x630), and Twitter Cards for every page.
- **Structured Data (JSON-LD)**:
  - Root layout embeds schema.org `Organization`, `Corporation`, and `WebSite` schemas.
  - Blog post pages embed schema.org `TechArticle` schema.
