/** Oasis landing interactions: i18n, carousel, gallery, nav, reveal. */
(function () {
  "use strict";

  const I18n = window.OasisI18n;
  if (!I18n) return;

  let lang = I18n.storedLang() || I18n.detectSystemLang();

  function applyStaticI18n() {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      el.textContent = I18n.t(lang, key);
    });
    const label = document.querySelector("[data-lang-label]");
    if (label) label.textContent = lang === "zh" ? "EN" : "中";
    document.querySelectorAll("[data-play-game]").forEach((el) => {
      el.setAttribute("aria-label", I18n.t(lang, "playGameAria"));
      // Reserved launch URL — swap when the game build is hosted.
      if (!el.getAttribute("href") || el.getAttribute("href") === "#") {
        el.setAttribute("href", "#");
        el.setAttribute("data-play-url-reserved", "true");
      }
    });
    const year = document.querySelector("[data-year]");
    if (year) year.textContent = String(new Date().getFullYear());
    const title =
      lang === "zh"
        ? "Oasis Village · 绿洲村"
        : "Oasis Village — Cozy life-sim";
    document.title = title;
  }

  function setLang(next) {
    lang = next;
    I18n.storeLang(lang);
    applyStaticI18n();
    renderCarousel();
    renderGallery();
  }

  /* ---------- Carousel ---------- */
  const track = document.querySelector("[data-carousel-track]");
  const dotsBox = document.querySelector("[data-carousel-dots]");
  const carouselRoot = document.querySelector("[data-carousel]");
  let slideIndex = 0;
  let timer = null;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function renderCarousel() {
    if (!track || !dotsBox) return;
    track.innerHTML = I18n.scenes
      .map((s) => {
        const img = s.worldImage || s.image;
        return (
          '<article class="carousel-slide" data-slide="' +
          s.id +
          '">' +
          '<img src="' +
          img +
          '" alt="' +
          I18n.localeText(lang, s.name) +
          '" loading="lazy" />' +
          '<div class="carousel-caption">' +
          "<strong>" +
          I18n.localeText(lang, s.name) +
          "</strong>" +
          "<span>" +
          I18n.localeText(lang, s.tagline) +
          "</span>" +
          "<em>" +
          I18n.localeText(lang, s.author) +
          " · " +
          I18n.t(lang, "carousel.author") +
          "</em>" +
          "</div></article>"
        );
      })
      .join("");

    dotsBox.innerHTML = I18n.scenes
      .map((s, i) => {
        return (
          '<button type="button" class="carousel-dot' +
          (i === slideIndex ? " is-active" : "") +
          '" data-dot="' +
          i +
          '" aria-label="' +
          I18n.localeText(lang, s.name) +
          '"></button>'
        );
      })
      .join("");

    goTo(slideIndex, true);
  }

  function goTo(index, instant) {
    if (!track) return;
    const total = I18n.scenes.length;
    slideIndex = ((index % total) + total) % total;
    if (instant || reduceMotion) {
      track.classList.add("is-instant");
      track.style.transform = "translateX(-" + slideIndex * 100 + "%)";
      void track.offsetHeight;
      track.classList.remove("is-instant");
    } else {
      track.style.transform = "translateX(-" + slideIndex * 100 + "%)";
    }
    dotsBox.querySelectorAll(".carousel-dot").forEach((dot, i) => {
      dot.classList.toggle("is-active", i === slideIndex);
    });
  }

  function next() {
    goTo(slideIndex + 1);
  }
  function prev() {
    goTo(slideIndex - 1);
  }

  function stopAuto() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function startAuto() {
    if (reduceMotion) return;
    stopAuto();
    timer = window.setInterval(next, 5200);
  }

  function bindCarousel() {
    if (!carouselRoot || !track) return;
    const viewport = carouselRoot.querySelector(".carousel-viewport");
    renderCarousel();

    const prevBtn = document.querySelector("[data-carousel-prev]");
    const nextBtn = document.querySelector("[data-carousel-next]");
    if (prevBtn) prevBtn.addEventListener("click", () => { prev(); startAuto(); });
    if (nextBtn) nextBtn.addEventListener("click", () => { next(); startAuto(); });

    if (dotsBox) {
      dotsBox.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-dot]");
        if (!btn) return;
        const i = Number(btn.getAttribute("data-dot"));
        if (!Number.isFinite(i)) return;
        goTo(i);
        startAuto();
      });
    }

    carouselRoot.addEventListener("mouseenter", stopAuto);
    carouselRoot.addEventListener("mouseleave", startAuto);
    carouselRoot.addEventListener("focusin", stopAuto);
    carouselRoot.addEventListener("focusout", startAuto);

    // Mouse drag / touch swipe on the viewport
    let dragging = false;
    let startX = 0;
    let deltaX = 0;
    let dragWidth = 0;

    const onPointerDown = (clientX) => {
      if (!viewport) return;
      dragging = true;
      startX = clientX;
      deltaX = 0;
      dragWidth = viewport.clientWidth || 1;
      viewport.classList.add("is-dragging");
      track.classList.add("is-dragging");
      stopAuto();
    };

    const onPointerMove = (clientX) => {
      if (!dragging) return;
      deltaX = clientX - startX;
      const pct = (deltaX / dragWidth) * 100;
      track.style.transform = "translateX(calc(" + -slideIndex * 100 + "% + " + pct + "%))";
    };

    const onPointerUp = () => {
      if (!dragging) return;
      dragging = false;
      viewport && viewport.classList.remove("is-dragging");
      track.classList.remove("is-dragging");
      const threshold = Math.min(80, dragWidth * 0.18);
      if (deltaX > threshold) prev();
      else if (deltaX < -threshold) next();
      else goTo(slideIndex);
      startAuto();
    };

    if (viewport) {
      viewport.addEventListener("mousedown", (e) => {
        if (e.button !== 0) return;
        e.preventDefault();
        onPointerDown(e.clientX);
      });
      window.addEventListener("mousemove", (e) => onPointerMove(e.clientX));
      window.addEventListener("mouseup", onPointerUp);
    }

    track.addEventListener(
      "touchstart",
      (e) => {
        onPointerDown(e.touches[0].clientX);
      },
      { passive: true }
    );
    track.addEventListener(
      "touchmove",
      (e) => {
        if (!dragging) return;
        onPointerMove(e.touches[0].clientX);
      },
      { passive: true }
    );
    track.addEventListener("touchend", onPointerUp);
    track.addEventListener("touchcancel", onPointerUp);

    startAuto();
  }

  /* ---------- Gallery ---------- */
  function renderGallery() {
    const box = document.querySelector("[data-gallery]");
    if (!box) return;
    box.innerHTML = I18n.scenes
      .map((s) => {
        const tags = (s.tags || [])
          .map((tag) => "<span>" + tag + "</span>")
          .join("");
        return (
          '<article class="gallery-card">' +
          "<figure>" +
          '<div class="gallery-art"><img src="' +
          s.image +
          '" alt="' +
          I18n.localeText(lang, s.name) +
          '" loading="lazy" /></div>' +
          '<figcaption class="gallery-meta">' +
          "<strong>" +
          I18n.localeText(lang, s.name) +
          "</strong>" +
          "<p>" +
          I18n.localeText(lang, s.tagline) +
          "</p>" +
          '<div class="gallery-tags">' +
          '<span class="author">' +
          I18n.localeText(lang, s.author) +
          "</span>" +
          tags +
          "</div>" +
          "</figcaption></figure></article>"
        );
      })
      .join("");
  }

  /* ---------- Nav ---------- */
  function bindNav() {
    const toggle = document.querySelector("[data-nav-toggle]");
    const links = document.querySelector("[data-nav-links]");
    if (toggle && links) {
      toggle.addEventListener("click", () => {
        const open = links.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      links.addEventListener("click", (e) => {
        if (e.target.closest("a")) {
          links.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    }

    // Sticky nav blocks in-page anchors — offset scroll targets.
    // Use layout offsetTop (not getBoundingClientRect) so sticky #top still scrolls to 0.
    const docTop = (el) => {
      let y = 0;
      let node = el;
      while (node) {
        y += node.offsetTop || 0;
        node = node.offsetParent;
      }
      return y;
    };

    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const id = a.getAttribute("href");
        if (!id || id === "#" || id === "#top") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          history.replaceState(null, "", id && id !== "#" ? id : "#top");
          return;
        }
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        const nav = document.querySelector(".site-nav");
        const offset = (nav ? nav.offsetHeight : 64) + 8;
        const isChrome =
          target.id === "top" ||
          target.classList.contains("site-nav") ||
          target === nav;
        const top = isChrome
          ? 0
          : Math.max(0, docTop(target) - offset);
        window.scrollTo({ top, behavior: "smooth" });
        history.replaceState(null, "", id);
      });
    });

    const langBtn = document.querySelector("[data-lang-toggle]");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        setLang(lang === "zh" ? "en" : "zh");
      });
    }
  }

  /* ---------- Reveal ---------- */
  function bindReveal() {
    const nodes = document.querySelectorAll(".reveal");
    if (!nodes.length) return;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    nodes.forEach((n) => io.observe(n));
  }

  /* ---------- Boot ---------- */
  function bootScrollTop() {
    // Refresh always lands at the top, then eases there if the browser restored scroll.
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    const goTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    goTop();
    window.addEventListener("pageshow", goTop);
    window.addEventListener("load", goTop);
  }

  bootScrollTop();
  applyStaticI18n();
  bindNav();
  bindCarousel();
  renderGallery();
  bindReveal();
})();
