/**
 * Oasis Village — MOBILE-ONLY interactions
 * ---------------------------------------------------------------------------
 * 职责边界（与 desktop 分离）：
 * - main.js 仍负责 i18n / 轮播 / 画廊 / 锚点滚动 / reveal（桌面与移动共用）
 * - 本文件只增强移动端：导航抽屉滚动锁、外点/Esc 关闭、断点切换清理、
 *   跑马灯离屏暂停（省电/省帧）、触控设备上的小优化
 *
 * 约定：
 * - 不修改 main.js 内部逻辑；仅通过 DOM class / 事件协作
 * - 抽屉开关仍由 main.js 的 [data-nav-toggle] 处理，这里只做“周边”增强
 * - 仅在 ≤820px 或粗指针设备上启用需要的逻辑；桌面 resize 回来会清理状态
 */
(function () {
  "use strict";

  /** 与 css/mobile.css 断点保持一致 */
  var MOBILE_MQ = "(max-width: 820px)";
  var mqMobile = window.matchMedia(MOBILE_MQ);

  /* ========================================================================
     1. Nav drawer — 遮罩、滚动锁、外点 / Esc 关闭、断点清理
     ======================================================================== */
  function setupNavDrawer() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var links = document.querySelector("[data-nav-links]");
    if (!toggle || !links) return;

    // 半透明遮罩：点击关闭抽屉（元素由本脚本创建，不进 HTML）
    var scrim = document.createElement("button");
    scrim.type = "button";
    scrim.className = "nav-scrim";
    scrim.setAttribute("aria-label", "Close menu");
    scrim.tabIndex = -1;
    document.body.appendChild(scrim);

    function isOpen() {
      return links.classList.contains("is-open");
    }

    /** 立刻解除滚动锁（不改动 is-open，供锚点跳转前调用） */
    function unlockScroll() {
      document.documentElement.classList.remove("nav-locked");
      document.body.classList.remove("nav-locked");
    }

    // main.js 已绑定 toggle click（仅切 class + aria）。这里做一次状态同步：
    // 若 main 已打开/关闭，补齐 body.lock 与 scrim。
    function syncFromDom() {
      var open = links.classList.contains("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.documentElement.classList.toggle("nav-locked", open);
      document.body.classList.toggle("nav-locked", open);
      scrim.classList.toggle("is-visible", open);
    }

    // 观察 class 变化，保证与 main.js 的 toggle 保持一致（MutationObserver）
    if ("MutationObserver" in window) {
      var mo = new MutationObserver(function () {
        syncFromDom();
      });
      mo.observe(links, { attributes: true, attributeFilter: ["class"] });
    }

    function closeDrawer() {
      links.classList.remove("is-open");
      syncFromDom();
    }

    // 遮罩点击 → 关闭（同时更新 class，main.js 的状态也一致）
    scrim.addEventListener("click", function () {
      closeDrawer();
      toggle.focus();
    });

    // Esc → 关闭
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isOpen()) {
        closeDrawer();
        toggle.focus();
      }
    });

    // 点击抽屉外部（非链接、非 toggle、非遮罩）→ 关闭
    document.addEventListener(
      "click",
      function (e) {
        if (!isOpen()) return;
        if (links.contains(e.target)) return;
        if (toggle.contains(e.target)) return;
        if (scrim.contains(e.target)) return;
        closeDrawer();
      },
      true
    );

    // 锚点跳转前先解锁滚动。
    // main.js 在 target 阶段执行 window.scrollTo；若此时 html/body
    // 仍是 overflow:hidden（nav-locked），平滑滚动会被直接吞掉，
    // 表现为“点了菜单项没反应”。capture 阶段先于 target，故在此解锁。
    links.addEventListener(
      "click",
      function (e) {
        var anchor = e.target && e.target.closest ? e.target.closest("a[href^='#']") : null;
        if (!anchor || !links.contains(anchor)) return;
        unlockScroll();
      },
      true
    );

    // 断点切回桌面（≥821px）：强制收起，避免 resize 后仍 body 锁定
    function onBreakpointChange() {
      if (!mqMobile.matches && isOpen()) {
        closeDrawer();
      }
      syncFromDom();
    }

    if (typeof mqMobile.addEventListener === "function") {
      mqMobile.addEventListener("change", onBreakpointChange);
    } else if (typeof mqMobile.addListener === "function") {
      mqMobile.addListener(onBreakpointChange); // 旧 Safari
    }

    // 初始同步（例如 bfcache 恢复页面时 class 可能残留）
    syncFromDom();
    window.addEventListener("pageshow", syncFromDom);
  }

  /* ========================================================================
     2. Marquee — 离屏暂停（IntersectionObserver）
        仅 CSS 动画；这里用 animation-play-state，不改 main.js 的克隆逻辑
     ======================================================================== */
  function setupMarqueePause() {
    if (!("IntersectionObserver" in window)) return;
    var tracks = document.querySelectorAll("[data-marquee-track]");
    if (!tracks.length) return;

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var track = entry.target;
          // 可见时恢复；不可见时暂停。注意 hover 暂停仍由 CSS 处理。
          if (entry.isIntersecting) {
            track.style.animationPlayState = "";
          } else {
            track.style.animationPlayState = "paused";
          }
        });
      },
      { rootMargin: "80px 0px", threshold: 0.05 }
    );

    tracks.forEach(function (t) {
      io.observe(t);
    });
  }

  /* ========================================================================
     3. Carousel — 触控滑动时暂停自动播放（避免“滑到一半被抢走”）
        通过 DOM 事件在 touch 期间派发 mouseenter/mouseleave 等价状态，
        借用 main.js 已有的 hover 暂停逻辑，不重复实现轮播状态机。
     ======================================================================== */
  function setupCarouselTouchPause() {
    var root = document.querySelector("[data-carousel]");
    if (!root) return;

    var hovering = false;
    function enter() {
      if (hovering) return;
      hovering = true;
      root.dispatchEvent(new Event("mouseenter"));
    }
    function leave() {
      if (!hovering) return;
      hovering = false;
      root.dispatchEvent(new Event("mouseleave"));
    }

    root.addEventListener(
      "touchstart",
      function () {
        enter();
      },
      { passive: true }
    );
    root.addEventListener("touchend", leave, { passive: true });
    root.addEventListener("touchcancel", leave, { passive: true });

    // 纵向滚动离开轮播区域时也恢复自动播放
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) leave();
          });
        },
        { threshold: 0.15 }
      );
      io.observe(root);
    }
  }

  /* ========================================================================
     4. Nav — 纵向滚动时给 sticky 导航加一点实底（可读性）
     ======================================================================== */
  function setupNavScrollState() {
    var nav = document.querySelector(".site-nav");
    if (!nav) return;
    var ticking = false;

    function update() {
      ticking = false;
      // 仅移动端需要“滚动后更实”的导航背景
      if (!mqMobile.matches) {
        nav.classList.remove("is-scrolled");
        return;
      }
      nav.classList.toggle("is-scrolled", window.scrollY > 8);
    }

    window.addEventListener(
      "scroll",
      function () {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(update);
      },
      { passive: true }
    );
    update();
  }

  /* ========================================================================
     Boot — 全部为可选增强；任一失败不影响主站
     ======================================================================== */
  function boot() {
    try {
      setupNavDrawer();
    } catch (_) {
      /* drawer 增强失败不阻断 */
    }
    try {
      setupMarqueePause();
    } catch (_) {}
    try {
      setupCarouselTouchPause();
    } catch (_) {}
    try {
      setupNavScrollState();
    } catch (_) {}
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
