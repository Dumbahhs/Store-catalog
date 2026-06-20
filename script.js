/* ============================================================
   STORE CATALOG — MAIN JAVASCRIPT
   ============================================================ */

let revealObserver;

document.addEventListener('DOMContentLoaded', () => {

  // ── Active nav link ───────────────────────────────────────
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.includes(href) && href !== '/' && href !== '../index.html' && href !== 'index.html') {
      link.classList.add('active');
    }
  });

  // ── Hamburger menu ────────────────────────────────────────
  const hamburger  = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ── Scroll-reveal (IntersectionObserver) ─────────────────
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ── Broken image fallback ─────────────────────────────────
  document.querySelectorAll('img[data-placeholder]').forEach(img => {
    if (!img.src || img.src === window.location.href) renderPlaceholder(img);
  });
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function () { renderPlaceholder(this); });
  });

  // ── Render dynamic sections ───────────────────────────────
  if (document.getElementById('businesses-container')) renderBusinesses();
  if (document.getElementById('detail-container'))     renderDetail();

});

// ── Placeholder helper ────────────────────────────────────────
function renderPlaceholder(img) {
  const label  = img.dataset.placeholder || img.alt || 'Image';
  const parent = img.parentElement;
  if (parent) {
    parent.innerHTML = `
      <div class="placeholder-img">
        <span class="ph-icon">&#128247;</span>
        <span>${label}</span>
        <span style="opacity:.4;font-size:.7rem;font-weight:400">Replace with your screenshot</span>
      </div>`;
  }
}

// ── Observe newly added .reveal elements ─────────────────────
function observeNew(root) {
  if (!revealObserver) return;
  root.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// ════════════════════════════════════════════════════════════
// HOMEPAGE — render business categories from config.js
// ════════════════════════════════════════════════════════════
function renderBusinesses() {
  const container = document.getElementById('businesses-container');
  if (!container || typeof STORE_CONFIG === 'undefined') return;

  let html = '';

  STORE_CONFIG.businesses.forEach(cat => {
    const enabled = cat.items.filter(b => b.enabled);
    const cardsHTML = enabled.length > 0
      ? `<div class="cards-grid">${enabled.map(b => buildCard(b)).join('')}</div>`
      : `<p style="color:var(--text-muted);text-align:center;padding:32px 0;font-size:.95rem;">No Businesses Available at this time.</p>`;

    const noticeHTML = cat.notice
      ? `<div class="notice notice-warning reveal" style="max-width:860px;margin:0 auto 28px;">
           <span class="notice-icon">&#9888;&#65039;</span>
           <span>${cat.notice}</span>
         </div>`
      : '';

    html += `
      <div class="category-section">
        <div class="category-label-row reveal">
          <div class="category-line"></div>
          <span class="category-tag">${cat.category}</span>
          <div class="category-line"></div>
        </div>
        ${noticeHTML}
        ${cardsHTML}
      </div>`;
  });

  if (!html) {
    html = `<p style="color:var(--text-muted);text-align:center;padding:40px 0;">No listings currently available.</p>`;
  }

  container.innerHTML = html;
  observeNew(container);
}

function buildCard(b) {
  const firstImg = b.images && b.images.length > 0 ? b.images[0] : null;
  const thumb = firstImg
    ? `<img src="${firstImg}" alt="${b.name}" />`
    : `<div class="placeholder-img"><span class="ph-icon">&#128247;</span><span>${b.name}</span><span style="opacity:.4;font-size:.7rem;font-weight:400">Add images in config.js</span></div>`;

  return `
    <article class="card reveal">
      <div class="card-thumb">
        ${thumb}
        <span class="card-badge">Business</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${b.name}</h3>
        <p class="card-desc">${b.description}</p>
      </div>
      <div class="card-footer">
        <a href="businesses/detail.html?id=${b.id}" class="btn btn-sm btn-primary">View Details</a>
      </div>
    </article>`;
}

// ════════════════════════════════════════════════════════════
// DETAIL PAGE — render business detail from config.js
// ════════════════════════════════════════════════════════════
function renderDetail() {
  const container = document.getElementById('detail-container');
  if (!container || typeof STORE_CONFIG === 'undefined') return;

  const params   = new URLSearchParams(window.location.search);
  const id       = params.get('id');
  let business   = null;
  let category   = '';

  // Find business across all categories
  for (const cat of STORE_CONFIG.businesses) {
    const found = cat.items.find(b => b.id === id);
    if (found) { business = found; category = cat.category; break; }
  }

  if (!business || !business.enabled) {
    container.innerHTML = `
      <div style="text-align:center;padding:80px 20px;display:flex;flex-direction:column;align-items:center;gap:20px;">
        <h2 style="font-family:'Bebas Neue',sans-serif;font-size:2rem;letter-spacing:.06em;">Listing Not Available</h2>
        <p style="color:var(--text-secondary);">This business is not currently listed or has been disabled.</p>
        <a href="../index.html" class="btn btn-secondary">&#8592; Back to Catalog</a>
      </div>`;
    return;
  }

  // Update page title + breadcrumb
  document.title = `${business.name} — Skyfall Roleplay`;
  const bc = document.getElementById('breadcrumb-current');
  if (bc) bc.textContent = business.name;

  const imgs = business.images && business.images.length > 0 ? business.images : [];
  const galleryHTML = buildGalleryHTML(imgs, business.name);

  const featuresHTML = business.features.map(f => `
    <div class="feature-item">
      <div class="feature-icon">${f.icon}</div>
      <span>${f.text}</span>
    </div>`).join('');

  container.innerHTML = `
    <div class="detail-hero">

      <div class="detail-gallery">
        ${galleryHTML}
      </div>

      <div class="detail-info">
        <span class="detail-type-tag">${category}</span>
        <h1 class="detail-title">${business.name}</h1>
        <p class="detail-desc">${business.description}</p>

        <div class="detail-meta">
          <div class="detail-meta-row">
            <strong>Location:</strong>
            <span>${business.location}</span>
          </div>
          <div class="detail-meta-row">
            <strong>Category:</strong>
            <span>${business.type}</span>
          </div>
          <div class="detail-meta-row">
            <strong>Availability:</strong>
            <span style="color:var(--accent);font-weight:600;">Available</span>
          </div>
        </div>

        <a href="${business.tebexLink}" class="btn btn-primary" target="_blank" rel="noopener">
          Purchase on Tebex &#8599;
        </a>

        <div class="notice notice-warning">
          <span class="notice-icon">&#9888;&#65039;</span>
          <span>Subject to server rules and availability. Ownership exists only within the server environment.</span>
        </div>
      </div>
    </div>

    <div style="margin-bottom:40px;">
      <h2 style="font-size:1.3rem;font-weight:700;margin-bottom:20px;font-family:'Bebas Neue',sans-serif;letter-spacing:.06em;">Included Features</h2>
      <div class="features-list">${featuresHTML}</div>
    </div>

    <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:48px;">
      <h2 style="font-size:1.3rem;font-weight:700;font-family:'Bebas Neue',sans-serif;letter-spacing:.06em;">Notes</h2>
      <div class="notice notice-info">
        <span class="notice-icon">&#8505;&#65039;</span>
        <span>Subject to server rules and availability at the time of purchase. Staff will confirm before processing.</span>
      </div>
      <div class="notice notice-warning">
        <span class="notice-icon">&#128274;</span>
        <span><strong>Important:</strong> Ownership exists only within the server environment. This purchase grants a limited license to operate this virtual business. It has no real-world monetary value.</span>
      </div>
    </div>

    <a href="../index.html" class="btn btn-secondary btn-sm">&#8592; Back to Catalog</a>`;

  observeNew(container);
  initGallery(container);
}

// ════════════════════════════════════════════════════════════
// GALLERY — build HTML + wire up interactions
// ════════════════════════════════════════════════════════════
function buildGalleryHTML(images, name) {
  if (images.length === 0) {
    return `
      <div class="gallery-main">
        <div class="placeholder-img">
          <span class="ph-icon">&#128247;</span>
          <span>${name}</span>
          <span style="opacity:.4;font-size:.7rem;font-weight:400">Add images in config.js</span>
        </div>
      </div>`;
  }

  const first = images[0];
  const arrows = images.length > 1 ? `
    <button class="gallery-prev" aria-label="Previous image">&#8249;</button>
    <button class="gallery-next" aria-label="Next image">&#8250;</button>` : '';

  const thumbsHTML = images.length > 1 ? `
    <div class="gallery-thumbs">
      ${images.map((src, i) => `
        <button class="gallery-thumb${i === 0 ? ' active' : ''}" data-index="${i}">
          <img src="../${src}" alt="${name} image ${i + 1}" />
        </button>`).join('')}
    </div>` : '';

  return `
    <div class="gallery-main">
      <img src="../${first}" alt="${name}" class="gallery-active-img" />
      ${arrows}
    </div>
    ${thumbsHTML}`;
}

function initGallery(container) {
  const mainImg = container.querySelector('.gallery-active-img');
  const thumbs  = container.querySelectorAll('.gallery-thumb');
  const prev    = container.querySelector('.gallery-prev');
  const next    = container.querySelector('.gallery-next');
  if (!mainImg || thumbs.length === 0) return;

  let current = 0;
  const srcs = Array.from(thumbs).map(t => t.querySelector('img').src);

  function goTo(idx) {
    current = ((idx % srcs.length) + srcs.length) % srcs.length;
    mainImg.style.opacity = '0';
    setTimeout(() => { mainImg.src = srcs[current]; mainImg.style.opacity = '1'; }, 200);
    thumbs.forEach((t, i) => t.classList.toggle('active', i === current));
  }

  thumbs.forEach((thumb, i) => thumb.addEventListener('click', () => goTo(i)));
  if (prev) prev.addEventListener('click', () => goTo(current - 1));
  if (next) next.addEventListener('click', () => goTo(current + 1));
}
