/* ============================================================
   STORE CATALOG — MAIN JAVASCRIPT
   ============================================================
   This file handles:
   - Mobile hamburger menu
   - Gallery thumbnail switcher (detail pages)
   - Scroll-reveal animations
   - Placeholder image fallback renderer
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Active nav link highlight ─────────────────────────────
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.includes(href) && href !== '/' && href !== '../index.html' && href !== 'index.html') {
      link.classList.add('active');
    }
  });

  // ── Hamburger / mobile menu toggle ───────────────────────
  const hamburger   = document.querySelector('.hamburger');
  const mobileMenu  = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    // Close when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ── Gallery thumbnail switcher ────────────────────────────
  const mainImg  = document.querySelector('.gallery-main img');
  const thumbs   = document.querySelectorAll('.gallery-thumb');
  if (mainImg && thumbs.length) {
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        // Swap main image src
        const newSrc = thumb.querySelector('img').src;
        mainImg.style.opacity = '0';
        setTimeout(() => {
          mainImg.src = newSrc;
          mainImg.style.opacity = '1';
        }, 200);
        // Update active state
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
  }

  // ── Scroll-reveal (Intersection Observer) ────────────────
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  }

  // ── Placeholder image renderer ────────────────────────────
  // Any <img data-placeholder="Label"> without a real src gets a CSS fallback box.
  // To replace: just set the img src attribute to your image path.
  document.querySelectorAll('img[data-placeholder]').forEach(img => {
    if (!img.src || img.src === window.location.href) {
      const label  = img.dataset.placeholder || 'Image';
      const parent = img.parentElement;
      parent.innerHTML = `
        <div class="placeholder-img">
          <span class="ph-icon">&#128247;</span>
          <span>${label}</span>
          <span style="opacity:.4;font-size:.7rem;font-weight:400">Replace with your screenshot</span>
        </div>`;
    }
  });

  // Also catch broken image loads
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function () {
      const label  = this.dataset.placeholder || this.alt || 'Image';
      const parent = this.parentElement;
      if (parent) {
        parent.innerHTML = `
          <div class="placeholder-img">
            <span class="ph-icon">&#128247;</span>
            <span>${label}</span>
            <span style="opacity:.4;font-size:.7rem;font-weight:400">Replace with your screenshot</span>
          </div>`;
      }
    });
  });

});
