(function () {
  "use strict";

  // ==========================================================================
  // 1. ATMOSPHERIC LUXURY PRELOADER CONTROLLER (RAPID & THEME-ALIGNED)
  // ==========================================================================
  const preloader = document.getElementById("atmospheric-preloader");
  const progressBar = document.getElementById("loader-progress-bar");
  const percentageText = document.getElementById("loader-percentage");
  const statusMsg = document.getElementById("loader-status-msg");
  const iconContainer = document.getElementById("loader-icon-container");
  const metaPhase = document.getElementById("loader-meta-phase");
  const teleCoords = document.getElementById("loader-tele-coords");
  const teleBaro = document.getElementById("loader-tele-baro");

  const loaderPhases = [
    {
      targetPct: 28,
      msg: "Calibrating Doppler radar & telemetry sensors...",
      phase: "SENSOR CALIBRATION",
      coords: "28.61° N, 77.20° E",
      baro: "1013.25 hPa",
      icon: "sun",
      iconClass: "w-10 h-10 text-amber-400 anim-sun-rot",
    },
    {
      targetPct: 58,
      msg: "Synchronizing orbital satellite feeds...",
      phase: "ORBITAL TELEMETRY",
      coords: "35.67° N, 139.65° E",
      baro: "1011.80 hPa",
      icon: "cloud-sun",
      iconClass: "w-10 h-10 text-sky-400 anim-cloud-move",
    },
    {
      targetPct: 84,
      msg: "Processing barometric & isobars vector matrix...",
      phase: "ISOBAR COMPILATION",
      coords: "40.71° N, 74.00° W",
      baro: "1015.40 hPa",
      icon: "cloud-rain",
      iconClass: "w-10 h-10 text-blue-400",
    },
    {
      targetPct: 96,
      msg: "Engaging neural atmospheric copilot...",
      phase: "COPILOT ENGAGED",
      coords: "51.50° N, 0.12° W",
      baro: "1014.10 hPa",
      icon: "cloud-lightning",
      iconClass: "w-10 h-10 text-purple-400",
    },
    {
      targetPct: 100,
      msg: "Weather Atlas online. Launching telemetry station!",
      phase: "TELEMETRY LOCKED",
      coords: "GLOBAL FEED ACTIVE",
      baro: "STABLE 1013 hPa",
      icon: "check-circle-2",
      iconClass: "w-10 h-10 text-emerald-400",
    },
  ];

  let currentLoaderProgress = 0;
  let activePhaseIndex = 0;
  let lastIcon = "";

  function animateLoader() {
    if (!preloader || preloader.classList.contains("loaded")) return;

    if (activePhaseIndex < loaderPhases.length) {
      const currentTarget = loaderPhases[activePhaseIndex];

      // Fast, smooth step calculation
      if (currentLoaderProgress < currentTarget.targetPct) {
        // Fast progress increment for snappy loading experience
        const delta = Math.max(2, Math.ceil((currentTarget.targetPct - currentLoaderProgress) * 0.22));
        currentLoaderProgress = Math.min(currentTarget.targetPct, currentLoaderProgress + delta);
      } else {
        activePhaseIndex++;
      }

      // Update UI elements
      if (progressBar) progressBar.style.width = `${currentLoaderProgress}%`;
      if (percentageText) percentageText.textContent = `${currentLoaderProgress}%`;
      preloader.setAttribute("aria-valuenow", currentLoaderProgress);

      if (currentTarget) {
        if (statusMsg && statusMsg.textContent !== currentTarget.msg) {
          statusMsg.textContent = currentTarget.msg;
        }
        if (metaPhase && metaPhase.textContent !== currentTarget.phase) {
          metaPhase.textContent = currentTarget.phase;
        }
        if (teleCoords && currentTarget.coords) {
          teleCoords.textContent = currentTarget.coords;
        }
        if (teleBaro && currentTarget.baro) {
          teleBaro.textContent = currentTarget.baro;
        }
        if (iconContainer && lastIcon !== currentTarget.icon) {
          lastIcon = currentTarget.icon;
          iconContainer.innerHTML = `<i data-lucide="${currentTarget.icon}" class="${currentTarget.iconClass}"></i>`;
          if (typeof lucide !== "undefined" && lucide.createIcons) {
            lucide.createIcons();
          }
        }
      }
    }

    if (currentLoaderProgress < 100) {
      requestAnimationFrame(animateLoader);
    } else {
      // Snappy completion exit (fast, satisfying transition)
      setTimeout(() => {
        if (preloader) preloader.classList.add("loaded");
      }, 200);
    }
  }

  // Kick off the fast loader animation
  requestAnimationFrame(animateLoader);

  // Fast failsafe timeout (1.8s) so the user is never kept waiting
  setTimeout(() => {
    if (preloader && !preloader.classList.contains("loaded")) {
      currentLoaderProgress = 100;
      if (progressBar) progressBar.style.width = "100%";
      if (percentageText) percentageText.textContent = "100%";
      preloader.classList.add("loaded");
    }
  }, 1800);

  // ==========================================================================
  // 2. UNMISTAKABLY SMOOTH LENIS ENGINE (HIGH-PERFORMANCE, FAST & BUTTERY)
  // ==========================================================================
  let lenis = null;

  function initSmoothScrollEngine() {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    // Ensure Lenis class is attached to html
    document.documentElement.classList.add("lenis");

    // Check if official Lenis library loaded from CDN
    if (typeof Lenis !== "undefined") {
      try {
        lenis = new Lenis({
          duration: 0.85, // Fast, snappy and responsive smooth scrolling
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // High performance exponential easing
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1.25, // Snappy & fast wheel reaction
          touchMultiplier: 1.6,
          infinite: false,
        });

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        window.lenis = lenis;
        return;
      } catch (err) {
        console.warn(
          "Lenis CDN instance error, activating built-in physics engine:",
          err,
        );
      }
    }

    // BUILT-IN SILKY SMOOTH INERTIA ENGINE (Guaranteed fallback inside sandboxed iframes)
    engageSelfContainedSmoothEngine();
  }

  function engageSelfContainedSmoothEngine() {
    let currentY = window.pageYOffset || document.documentElement.scrollTop;
    let targetY = currentY;
    let isMoving = false;

    function step() {
      const diff = targetY - currentY;
      if (Math.abs(diff) > 0.5) {
        currentY += diff * 0.095; // Physics dampening
        window.scrollTo(0, Math.round(currentY));
        requestAnimationFrame(step);
      } else {
        currentY = targetY;
        window.scrollTo(0, currentY);
        isMoving = false;
      }
    }

    window.addEventListener(
      "wheel",
      (e) => {
        // If dashboard is open or user is interacting with horizontal scroll, don't hijack
        const dashboardModal = document.getElementById("oripio-app-viewport");
        if (dashboardModal && !dashboardModal.hidden) return;
        if (e.target.closest("#dash-hourly-scroll, [data-lenis-prevent]"))
          return;

        e.preventDefault();
        const maxScroll = Math.max(
          0,
          document.documentElement.scrollHeight - window.innerHeight,
        );
        targetY = Math.max(0, Math.min(maxScroll, targetY + e.deltaY * 1.35));

        if (!isMoving) {
          isMoving = true;
          requestAnimationFrame(step);
        }
      },
      { passive: false },
    );

    // Synchronize on native scroll events
    window.addEventListener(
      "scroll",
      () => {
        if (!isMoving) {
          currentY = window.pageYOffset || document.documentElement.scrollTop;
          targetY = currentY;
        }
      },
      { passive: true },
    );
  }

  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", initSmoothScrollEngine);
  } else {
    initSmoothScrollEngine();
  }

  // Unified smooth scroll helper for buttons and links
  window.smoothScrollToTarget = function (targetEl, offset = -70) {
    if (!targetEl) return;
    if (lenis) {
      lenis.scrollTo(targetEl, { offset: offset, duration: 0.85 });
    } else {
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetEl.getBoundingClientRect().top;
      const targetPos = elementRect - bodyRect + offset;
      window.scrollTo({
        top: targetPos,
        behavior: "smooth",
      });
    }
  };

  // Wire all anchor tags
  document
    .querySelectorAll('a[href^="#"].nav-anchor, a[href^="#"].skip-link')
    .forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId && targetId !== "#") {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            window.smoothScrollToTarget(targetEl, -60);
          }
        }
      });
    });

  window.jumpToCondition = function (key) {
    selectCondition(key);
    const el = document.getElementById("interactive-display");
    if (el) {
      window.smoothScrollToTarget(el, -60);
    }
  };

  // ==========================================================================
  // 3. 60FPS PREMIUM MICRO-LERP CURSOR FOLLOWER
  // ==========================================================================
  const cursorDot = document.getElementById("cursor-dot");
  const cursorFollower = document.getElementById("cursor-follower");

  let mouseX = -100;
  let mouseY = -100;
  let followerX = -100;
  let followerY = -100;
  let isCursorInitialized = false;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isCursorInitialized) {
      followerX = mouseX;
      followerY = mouseY;
      isCursorInitialized = true;
      if (cursorDot) cursorDot.style.opacity = "1";
      if (cursorFollower) cursorFollower.style.opacity = "1";
    }

    if (cursorDot) {
      cursorDot.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
    }
  });

  function renderCursorFollower() {
    if (isCursorInitialized && cursorFollower) {
      followerX += (mouseX - followerX) * 0.16;
      followerY += (mouseY - followerY) * 0.16;
      const offset = document.body.classList.contains("is-hovering") ? 26 : 17;
      cursorFollower.style.transform = `translate3d(${followerX - offset}px, ${followerY - offset}px, 0)`;
    }
    requestAnimationFrame(renderCursorFollower);
  }
  requestAnimationFrame(renderCursorFollower);

  // Add interactive hover state when hovering interactive elements
  const interactiveSelector =
    'a, button, input, select, textarea, .cat-pill, .condition-card, [role="button"]';
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.add("is-hovering");
    }
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.remove("is-hovering");
    }
  });

  // ==========================================================================
  // 4. USER PROFILE & PERSONALIZATION LOGIC
  // ==========================================================================
  const DEFAULT_USER_NAME = "Jatin Joshi";
  let currentUserName =
    localStorage.getItem("kroma_user_name") || DEFAULT_USER_NAME;

  function getInitials(name) {
    if (!name) return "JJ";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  function getGreeting() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Good Morning,";
    if (hour >= 12 && hour < 17) return "Good Afternoon,";
    if (hour >= 17 && hour < 21) return "Good Evening,";
    return "Good Night,";
  }

  function updateProfileUI() {
    const initials = getInitials(currentUserName);
    const greeting = getGreeting();

    const nameDisplay = document.getElementById("dash-user-name");
    const nameSide = document.getElementById("dash-user-name-side");
    const avatarDisplay = document.getElementById("dash-user-avatar");
    const avatarSide = document.getElementById("dash-user-avatar-side");
    const greetingDisplay = document.getElementById("dash-greeting-text");

    if (nameDisplay) nameDisplay.textContent = currentUserName;
    if (nameSide) nameSide.textContent = currentUserName;
    if (avatarDisplay) avatarDisplay.textContent = initials;
    if (avatarSide) avatarSide.textContent = initials;
    if (greetingDisplay) greetingDisplay.textContent = greeting;
  }

  const profileModal = document.getElementById("user-profile-modal");
  const inputUserName = document.getElementById("input-user-name");

  function openProfileModal() {
    if (!profileModal) return;
    if (inputUserName) inputUserName.value = currentUserName;
    profileModal.classList.remove("hidden");
    if (inputUserName) inputUserName.focus();
  }

  function closeProfileModal() {
    if (!profileModal) return;
    profileModal.classList.add("hidden");
  }

  document
    .getElementById("dash-user-modal-trigger")
    ?.addEventListener("click", openProfileModal);
  document
    .getElementById("nav-user-profile-btn")
    ?.addEventListener("click", openProfileModal);
  document
    .getElementById("modal-close-btn")
    ?.addEventListener("click", closeProfileModal);
  document
    .getElementById("modal-cancel-btn")
    ?.addEventListener("click", closeProfileModal);

  document.getElementById("modal-save-btn")?.addEventListener("click", () => {
    if (inputUserName) {
      const val = inputUserName.value.trim();
      if (val) {
        currentUserName = val;
        localStorage.setItem("kroma_user_name", currentUserName);
        updateProfileUI();
      }
    }
    closeProfileModal();
  });

  inputUserName?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") document.getElementById("modal-save-btn")?.click();
  });

  updateProfileUI();

  // ==========================================================================
  // 5. COLLAPSIBLE SIDEBAR
  // ==========================================================================
  const sidebar = document.getElementById("dash-sidebar");
  const sidebarToggleBtn = document.getElementById("sidebar-toggle-btn");
  const topbarSidebarToggle = document.getElementById("topbar-sidebar-toggle");
  let isSidebarCollapsed =
    localStorage.getItem("kroma_sidebar_collapsed") === "true";

  function applySidebarState() {
    if (isSidebarCollapsed) {
      sidebar.classList.add("collapsed");
      if (sidebarToggleBtn)
        sidebarToggleBtn.innerHTML = `<i data-lucide="panel-left-open" class="w-5 h-5"></i>`;
    } else {
      sidebar.classList.remove("collapsed");
      if (sidebarToggleBtn)
        sidebarToggleBtn.innerHTML = `<i data-lucide="panel-left-close" class="w-5 h-5"></i>`;
    }
    localStorage.setItem(
      "kroma_sidebar_collapsed",
      isSidebarCollapsed ? "true" : "false",
    );
    lucide.createIcons();
  }

  sidebarToggleBtn.addEventListener("click", () => {
    isSidebarCollapsed = !isSidebarCollapsed;
    applySidebarState();
  });
  topbarSidebarToggle.addEventListener("click", () => {
    isSidebarCollapsed = !isSidebarCollapsed;
    applySidebarState();
  });
  applySidebarState();

  // 6. Mobile Menu Drawer
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenuDrawer = document.getElementById("mobile-menu-drawer");
  mobileMenuToggle.addEventListener("click", () => {
    const isExp = mobileMenuToggle.getAttribute("aria-expanded") === "true";
    mobileMenuToggle.setAttribute("aria-expanded", !isExp);
    mobileMenuDrawer.classList.toggle("hidden");
  });
  mobileMenuDrawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuDrawer.classList.add("hidden");
      mobileMenuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // 7. Weather Atlas Taxonomy Dataset
  const WEATHER_CONDITIONS = [
    {
      key: "sunny",
      name: "Sunny",
      category: "Clear Skies",
      desc: "Unobstructed sunshine with crystal-clear horizontal visibility.",
      a11y: "Bright shining sun symbol",
      icon: "sun",
      color: "text-amber-500",
    },
    {
      key: "partly-cloudy",
      name: "Partly Cloudy",
      category: "Clouds",
      desc: "Scattered cumulus clouds with intermittent sunny spells.",
      a11y: "Sun partially obscured by cloud",
      icon: "cloud-sun",
      color: "text-sky-500",
    },
    {
      key: "cloudy",
      name: "Cloudy",
      category: "Clouds",
      desc: "Predominantly covered sky with diffused light coverage.",
      a11y: "Full cloud formation",
      icon: "cloud",
      color: "text-slate-400",
    },
    {
      key: "overcast",
      name: "Overcast",
      category: "Clouds",
      desc: "Heavy uniform stratus layer concealing solar disc completely.",
      a11y: "Dense overcast clouds",
      icon: "clouds",
      color: "text-slate-500",
    },
    {
      key: "drizzle",
      name: "Drizzle",
      category: "Precipitation",
      desc: "Fine, misty droplet precipitation falling at steady rate.",
      a11y: "Cloud with fine drizzle",
      icon: "cloud-drizzle",
      color: "text-cyan-400",
    },
    {
      key: "rainy",
      name: "Rainy",
      category: "Precipitation",
      desc: "Steady liquid rainfall generating pooling accumulation.",
      a11y: "Rain cloud with active rain streaks",
      icon: "cloud-rain",
      color: "text-blue-500",
    },
    {
      key: "thunderstorm",
      name: "Thunderstorm",
      category: "Precipitation",
      desc: "Intense convective squalls accompanied by electrical discharges.",
      a11y: "Storm cloud with lightning",
      icon: "cloud-lightning",
      color: "text-purple-500",
    },
    {
      key: "snowy",
      name: "Snowy",
      category: "Precipitation",
      desc: "Freezing precipitation depositing delicate stellar crystals.",
      a11y: "Snow cloud releasing snowflakes",
      icon: "snowflake",
      color: "text-sky-300",
    },
    {
      key: "foggy",
      name: "Foggy",
      category: "Atmospheric",
      desc: "Dense ground mist reducing horizontal range below 1,000 meters.",
      a11y: "Horizontal mist layers",
      icon: "cloud-fog",
      color: "text-slate-400",
    },
    {
      key: "windy",
      name: "Windy",
      category: "Wind",
      desc: "High-velocity air currents producing sustained surface pressure.",
      a11y: "Wind current swirls",
      icon: "wind",
      color: "text-emerald-500",
    },
    {
      key: "hail",
      name: "Hail",
      category: "Precipitation",
      desc: "Frozen ice pellets falling violently during severe updrafts.",
      a11y: "Hailstorm cloud with ice pellets",
      icon: "cloud-hail",
      color: "text-cyan-500",
    },
    {
      key: "clear-night",
      name: "Clear Night",
      category: "Clear Skies",
      desc: "Quiet nocturnal skies with crisp celestial star observation.",
      a11y: "Crescent moon in clear sky",
      icon: "moon",
      color: "text-indigo-400",
    },
  ];

  let selectedAtlasKey = "partly-cloudy";
  let activeCategoryFilter = "all";

  const atlasSelect = document.getElementById("atlas-condition-select");
  const atlasCardsGrid = document.getElementById("atlas-cards-grid");
  const atlasSearch = document.getElementById("atlas-search");
  const quickChipsContainer = document.getElementById("quick-chips-container");

  function initAtlas() {
    atlasSelect.innerHTML = "";
    WEATHER_CONDITIONS.forEach((c) => {
      const opt = document.createElement("option");
      opt.value = c.key;
      opt.textContent = `${c.name} (${c.category})`;
      atlasSelect.appendChild(opt);
    });
    atlasSelect.value = selectedAtlasKey;

    renderAtlasShowcase(selectedAtlasKey);
    renderQuickChips();
    renderAtlasGrid();
    updateCategoryCounts();
  }

  function renderAtlasShowcase(key) {
    const item =
      WEATHER_CONDITIONS.find((c) => c.key === key) || WEATHER_CONDITIONS[0];
    document.getElementById("atlas-showcase-icon").innerHTML =
      `<i data-lucide="${item.icon}" class="w-24 h-24 ${item.color}"></i>`;
    document.getElementById("atlas-showcase-cat").textContent =
      item.category.toUpperCase();
    document.getElementById("atlas-showcase-title").textContent = item.name;
    document.getElementById("atlas-showcase-desc").textContent = item.desc;
    document.getElementById("atlas-showcase-key").textContent = item.key;
    document.getElementById("atlas-showcase-a11y").textContent = item.a11y;
    document.getElementById("a11y-status").textContent =
      `Showing condition ${item.name}`;
    lucide.createIcons();
  }

  function renderQuickChips() {
    quickChipsContainer.innerHTML = "";
    WEATHER_CONDITIONS.forEach((c) => {
      const chip = document.createElement("button");
      const isSelected = c.key === selectedAtlasKey;
      chip.className = `flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all hover-lift ${
        isSelected
          ? "bg-orange-500 text-white shadow-md"
          : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
      }`;
      chip.innerHTML = `<i data-lucide="${c.icon}" class="w-3.5 h-3.5"></i><span>${c.name}</span>`;
      chip.addEventListener("click", () => {
        selectCondition(c.key);
      });
      quickChipsContainer.appendChild(chip);
    });
  }

  function renderAtlasGrid(query = "") {
    atlasCardsGrid.innerHTML = "";
    const q = query.trim().toLowerCase();

    let matches = WEATHER_CONDITIONS.filter((c) => {
      const matchesQuery =
        c.name.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q);
      const matchesCat =
        activeCategoryFilter === "all" || c.category === activeCategoryFilter;
      return matchesQuery && matchesCat;
    });

    if (matches.length === 0) {
      atlasCardsGrid.innerHTML = `<div class="col-span-full py-12 text-center text-sm text-slate-400">No weather conditions match your search query or filter.</div>`;
      return;
    }

    matches.forEach((c) => {
      const card = document.createElement("div");
      const isSelected = c.key === selectedAtlasKey;
      card.className = `condition-card p-5 rounded-2xl border transition-all cursor-pointer hover-lift ${
        isSelected
          ? "bg-orange-50 dark:bg-orange-950/40 border-orange-500 shadow-md ring-2 ring-orange-500/20"
          : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-orange-400"
      }`;
      card.innerHTML = `
            <div class="flex items-center justify-between mb-3">
              <i data-lucide="${c.icon}" class="w-8 h-8 ${c.color}"></i>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 uppercase">${c.category}</span>
            </div>
            <strong class="block text-base font-extrabold text-slate-900 dark:text-white">${c.name}</strong>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">${c.desc}</p>
          `;
      card.addEventListener("click", () => {
        selectCondition(c.key);
        const el = document.getElementById("interactive-display");
        if (el) {
          if (lenis) {
            lenis.scrollTo(el, { offset: -70 });
          } else {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
      atlasCardsGrid.appendChild(card);
    });
    lucide.createIcons();
  }

  function selectCondition(key) {
    selectedAtlasKey = key;
    atlasSelect.value = key;
    renderAtlasShowcase(key);
    renderQuickChips();
    renderAtlasGrid(atlasSearch.value);
  }

  atlasSelect.addEventListener("change", (e) =>
    selectCondition(e.target.value),
  );
  atlasSearch.addEventListener("input", (e) => renderAtlasGrid(e.target.value));

  // Category Pill Filters
  const catPills = document.querySelectorAll(".cat-pill");
  catPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      catPills.forEach((p) => {
        p.className =
          "cat-pill px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-orange-500 hover:text-white transition-all hover-lift";
      });
      pill.className =
        "cat-pill active px-4 py-2 rounded-xl text-xs font-extrabold bg-orange-500 text-white shadow-md hover-lift";
      activeCategoryFilter = pill.getAttribute("data-category");
      renderAtlasGrid(atlasSearch.value);
    });
  });

  document
    .getElementById("reset-cat-filter-btn")
    .addEventListener("click", () => {
      document.querySelector('.cat-pill[data-category="all"]').click();
    });

  function updateCategoryCounts() {
    document.getElementById("count-all").textContent =
      WEATHER_CONDITIONS.length;
    document.getElementById("count-clear").textContent =
      WEATHER_CONDITIONS.filter((c) => c.category === "Clear Skies").length;
    document.getElementById("count-clouds").textContent =
      WEATHER_CONDITIONS.filter((c) => c.category === "Clouds").length;
    document.getElementById("count-precip").textContent =
      WEATHER_CONDITIONS.filter((c) => c.category === "Precipitation").length;
    document.getElementById("count-atmo").textContent =
      WEATHER_CONDITIONS.filter((c) => c.category === "Atmospheric").length;
    document.getElementById("count-wind").textContent =
      WEATHER_CONDITIONS.filter((c) => c.category === "Wind").length;
  }

  // FAQ Accordion
  const faqTriggers = document.querySelectorAll(".faq-trigger");
  faqTriggers.forEach((btn) => {
    btn.addEventListener("click", () => {
      const isExp = btn.getAttribute("aria-expanded") === "true";
      const targetId = btn.getAttribute("aria-controls");
      const panel = document.getElementById(targetId);

      btn.setAttribute("aria-expanded", !isExp);
      if (panel) {
        if (isExp) {
          panel.setAttribute("hidden", "");
        } else {
          panel.removeAttribute("hidden");
        }
      }
    });
  });

  // 8. Theme Engine
  function toggleTheme() {
    const cur = document.documentElement.getAttribute("data-theme") || "light";
    const next = cur === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("kroma-theme", next);
    lucide.createIcons();
  }
  document
    .getElementById("theme-btn-global")
    .addEventListener("click", toggleTheme);
  document
    .getElementById("btn-dash-theme")
    .addEventListener("click", toggleTheme);

  const savedTheme =
    localStorage.getItem("kroma-theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  document.documentElement.setAttribute("data-theme", savedTheme);

  // 9. Fullscreen Dashboard Navigation Tabs
  const navButtons = document.querySelectorAll(".nav-tab-btn");
  const viewPanels = document.querySelectorAll(".dash-view-panel");

  window.switchNavTab = function (tabId) {
    navButtons.forEach((btn) => {
      if (btn.getAttribute("data-tab") === tabId) {
        btn.className =
          "nav-tab-btn active w-full flex items-center gap-3.5 px-3.5 py-3 rounded-2xl text-sm font-bold transition-all text-orange-600 bg-orange-50 dark:bg-orange-950/50 dark:text-orange-400";
      } else {
        btn.className =
          "nav-tab-btn w-full flex items-center gap-3.5 px-3.5 py-3 rounded-2xl text-sm font-semibold transition-all text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800";
      }
    });

    viewPanels.forEach((panel) => {
      if (panel.id === `view-${tabId}`) {
        panel.classList.remove("hidden");
      } else {
        panel.classList.add("hidden");
      }
    });

    lucide.createIcons();
    document.getElementById("dash-main-scroll").scrollTop = 0;
  };

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () =>
      switchNavTab(btn.getAttribute("data-tab")),
    );
  });

  // 10. Open-Meteo Real-Time Telemetry & Dynamics (Pune Default)
  const oripioViewport = document.getElementById("oripio-app-viewport");
  let isMetric = true;
  let activeCity = {
    name: "Pune",
    region: "Maharashtra",
    country: "India",
    lat: 18.5204,
    lon: 73.8567,
  };
  let liveWeatherData = null;

  const WMO_MAP = {
    0: { name: "Clear Sky", type: "sunny", icon: "sun" },
    1: { name: "Mainly Clear", type: "sunny", icon: "sun" },
    2: { name: "Partly Cloudy", type: "clouds", icon: "cloud-sun" },
    3: { name: "Overcast", type: "clouds", icon: "cloud" },
    45: { name: "Foggy Mist", type: "clouds", icon: "cloud-fog" },
    51: { name: "Light Drizzle", type: "rainy", icon: "cloud-drizzle" },
    61: { name: "Rain Showers", type: "rainy", icon: "cloud-rain" },
    63: { name: "Moderate Rain", type: "rainy", icon: "cloud-rain" },
    65: { name: "Heavy Downpour", type: "rainy", icon: "cloud-rain" },
    71: { name: "Snowfall", type: "snow", icon: "snowflake" },
    95: { name: "Thunderstorm", type: "thunder", icon: "cloud-lightning" },
  };

  function formatTemp(deg) {
    if (deg === null || deg === undefined) return "--";
    return isMetric
      ? Math.round(deg) + "°C"
      : Math.round((deg * 9) / 5 + 32) + "°F";
  }
  function formatRaw(deg) {
    if (deg === null || deg === undefined) return "--°";
    return isMetric
      ? Math.round(deg) + "°"
      : Math.round((deg * 9) / 5 + 32) + "°";
  }

  async function fetchTelemetry(lat, lon, cityName, countryName) {
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,visibility,surface_pressure,wind_speed_10m&hourly=temperature_2m,precipitation_probability,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code,uv_index_max&timezone=auto`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Telemetry query stalled");
      const data = await res.json();
      liveWeatherData = data;
      activeCity.lat = lat;
      activeCity.lon = lon;
      if (cityName) activeCity.name = cityName;
      if (countryName) activeCity.country = countryName;

      renderDashboardUI();
      triggerGeminiBriefing();
    } catch (e) {
      liveWeatherData = {
        current: {
          temperature_2m: 28,
          apparent_temperature: 29,
          relative_humidity_2m: 52,
          weather_code: 0,
          visibility: 10000,
          wind_speed_10m: 14,
          is_day: 1,
        },
        hourly: {
          time: Array.from({ length: 24 }, (_, i) => {
            const d = new Date();
            d.setHours(d.getHours() + i);
            return d.toISOString();
          }),
          temperature_2m: [
            28, 27, 26, 25, 24, 23, 22, 23, 25, 27, 29, 31, 31, 30, 29, 28, 27,
            26, 25, 24, 23, 22, 22, 21,
          ],
          weather_code: [
            0, 0, 1, 1, 2, 2, 0, 0, 0, 1, 1, 0, 0, 2, 2, 3, 61, 61, 2, 1, 0, 0,
            0, 0,
          ],
          precipitation_probability: [
            0, 5, 10, 12, 15, 8, 0, 0, 0, 0, 5, 10, 15, 35, 45, 60, 75, 40, 20,
            10, 5, 0, 0, 0,
          ],
          wind_speed_10m: [
            14, 13, 11, 10, 9, 9, 8, 10, 12, 15, 17, 18, 17, 16, 15, 14, 15, 13,
            11, 10, 9, 9, 8, 8,
          ],
        },
        daily: {
          time: Array.from({ length: 14 }, (_, i) => {
            const d = new Date();
            d.setDate(d.getDate() + i);
            return d.toISOString();
          }),
          temperature_2m_max: [
            31, 30, 29, 32, 33, 31, 29, 30, 31, 28, 29, 30, 31, 32,
          ],
          temperature_2m_min: [
            20, 21, 19, 21, 22, 20, 19, 20, 20, 18, 19, 20, 21, 21,
          ],
          weather_code: [0, 1, 2, 0, 0, 61, 2, 0, 1, 61, 2, 0, 0, 1],
          uv_index_max: [
            6.5, 6.2, 5.8, 7.1, 7.0, 4.5, 6.0, 6.4, 6.6, 5.1, 5.9, 6.8, 6.9,
            7.0,
          ],
        },
      };
      renderDashboardUI();
      triggerGeminiBriefing();
    }
  }

  function renderDashboardUI() {
    if (!liveWeatherData || !liveWeatherData.current) return;
    const cur = liveWeatherData.current;
    const daily = liveWeatherData.daily;
    const hourly = liveWeatherData.hourly;
    const meta = WMO_MAP[cur.weather_code] || {
      name: "Clear",
      type: "sunny",
      icon: "sun",
    };

    applyAtmosphereScene(meta.type, cur.is_day);

    document.getElementById("dash-hero-city").textContent =
      `${activeCity.name}, ${activeCity.country || activeCity.region || ""}`;
    document.getElementById("dash-hero-title").textContent = meta.name;
    document.getElementById("dash-hero-temp").textContent = formatTemp(
      cur.temperature_2m,
    );
    document.getElementById("dash-hero-feels").textContent = formatTemp(
      cur.apparent_temperature,
    );
    document.getElementById("dash-hero-vis").textContent = cur.visibility
      ? (cur.visibility / 1000).toFixed(1) + " Km"
      : "10.0 Km";
    document.getElementById("dash-hero-hum").textContent =
      `${cur.relative_humidity_2m}%`;
    document.getElementById("dash-hero-wind").textContent =
      `${Math.round(cur.wind_speed_10m)} km/h`;
    const uv = daily?.uv_index_max?.[0]
      ? daily.uv_index_max[0].toFixed(1)
      : "6.4";
    document.getElementById("dash-hero-uv").textContent =
      `${uv} ${uv > 6 ? "High" : "Moderate"}`;

    document.getElementById("pin-val-pune").textContent = formatTemp(
      cur.temperature_2m,
    );
    document.getElementById("map-pill-temp").textContent = formatTemp(
      cur.temperature_2m,
    );
    document.getElementById("map-pill-city").textContent =
      `${activeCity.name} Active`;
    document.getElementById("map-pill-cond").textContent = meta.name;
    document.getElementById("radar-center-city").textContent =
      `${activeCity.name} Telemetry Cell`;

    document.getElementById("dash-navy-hum").textContent =
      `${cur.relative_humidity_2m}%`;

    if (hourly && hourly.temperature_2m) {
      document.getElementById("traj-temp-morn").textContent = formatRaw(
        hourly.temperature_2m[8] || 22,
      );
      document.getElementById("traj-temp-noon").textContent = formatRaw(
        hourly.temperature_2m[14] || 29,
      );
      document.getElementById("traj-temp-eve").textContent = formatRaw(
        hourly.temperature_2m[18] || 25,
      );
      document.getElementById("traj-temp-night").textContent = formatRaw(
        hourly.temperature_2m[22] || 20,
      );
    }

    document.getElementById("dash-tomorrow-city").textContent =
      `${activeCity.name}, ${activeCity.country || ""}`;
    if (daily && daily.temperature_2m_max?.[1]) {
      document.getElementById("dash-tomorrow-temp").textContent = formatTemp(
        daily.temperature_2m_max[1],
      );
      const codeTmrw = daily.weather_code ? daily.weather_code[1] : 0;
      document.getElementById("dash-tomorrow-cond").textContent = (
        WMO_MAP[codeTmrw] || meta
      ).name;
    }

    renderModernHourlyReel(hourly);
    renderExtended14Day(daily);

    lucide.createIcons();
  }

  function renderModernHourlyReel(hourly) {
    const container = document.getElementById("dash-hourly-scroll");
    container.innerHTML = "";
    if (!hourly || !hourly.time) return;

    const count = Math.min(24, hourly.time.length);
    const temps = [];

    for (let i = 0; i < count; i++) {
      const t = hourly.temperature_2m[i];
      temps.push(t);

      const hourDate = new Date(hourly.time[i]);
      const isNow = i === 0;
      const hourLabel = isNow
        ? "Now"
        : hourDate.toLocaleTimeString([], { hour: "numeric", hour12: true });
      const code = hourly.weather_code[i];
      const m = WMO_MAP[code] || { name: "Clear", type: "sunny", icon: "sun" };
      const pop = hourly.precipitation_probability
        ? hourly.precipitation_probability[i]
        : 0;
      const wind = hourly.wind_speed_10m
        ? Math.round(hourly.wind_speed_10m[i])
        : 12;

      const card = document.createElement("div");
      card.className = `flex-shrink-0 w-28 p-3.5 rounded-2xl flex flex-col items-center justify-between transition-all duration-300 relative group select-none hover-lift ${
        isNow
          ? "bg-gradient-to-b from-orange-500/15 via-white dark:via-slate-800 to-white dark:to-slate-800 border-2 border-orange-500 shadow-lg shadow-orange-500/15 -translate-y-1"
          : "bg-white/80 dark:bg-slate-800/70 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 hover:border-orange-400 hover:-translate-y-1 shadow-sm"
      }`;

      card.innerHTML = `
            <div class="flex items-center gap-1.5 mb-1">
              ${isNow ? '<span class="w-2 h-2 rounded-full bg-emerald-500 anim-live-pulse shadow-[0_0_8px_#10b981]"></span>' : ""}
              <span class="text-xs font-black tracking-tight ${isNow ? "text-orange-500" : "text-slate-600 dark:text-slate-300"}">${hourLabel}</span>
            </div>
            <div class="my-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-700/50">
              <i data-lucide="${m.icon}" class="w-6 h-6 ${m.type === "sunny" ? "text-amber-500" : m.type === "rainy" ? "text-sky-500" : m.type === "thunder" ? "text-purple-400" : "text-slate-400"}"></i>
            </div>
            <div class="text-lg font-black tracking-tight text-slate-900 dark:text-white my-0.5">${formatRaw(t)}</div>
            <div class="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${pop > 25 ? "bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400" : "bg-slate-100 dark:bg-slate-700/60 text-slate-400"}">
              <i data-lucide="droplet" class="w-2.5 h-2.5"></i><span>${pop}%</span>
            </div>
            <div class="mt-2 text-[10px] font-mono text-slate-400 flex items-center gap-1">
              <i data-lucide="wind" class="w-2.5 h-2.5"></i><span>${wind} km/h</span>
            </div>
          `;
      container.appendChild(card);
    }

    drawHourlySparkline(temps);
    updateChevronStates();
  }

  function drawHourlySparkline(temps) {
    if (!temps || temps.length < 2) return;
    const minT = Math.min(...temps);
    const maxT = Math.max(...temps);
    const range = maxT - minT || 1;
    const width = 1000;
    const height = 45;

    const points = temps.map((t, i) => {
      const x = (i / (temps.length - 1)) * width;
      const y = height - ((t - minT) / range) * (height - 12) - 6;
      return { x, y };
    });

    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const mx = (p0.x + p1.x) / 2;
      d += ` C ${mx} ${p0.y}, ${mx} ${p1.y}, ${p1.x} ${p1.y}`;
    }

    const fillD = `${d} L ${width} ${height + 10} L 0 ${height + 10} Z`;
    document.getElementById("sparkline-stroke").setAttribute("d", d);
    document.getElementById("sparkline-fill").setAttribute("d", fillD);
  }

  const scrollContainer = document.getElementById("dash-hourly-scroll");
  const prevBtn = document.getElementById("hourly-scroll-prev");
  const nextBtn = document.getElementById("hourly-scroll-next");

  function updateChevronStates() {
    if (!scrollContainer) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
    prevBtn.disabled = scrollLeft <= 5;
    nextBtn.disabled = scrollLeft >= scrollWidth - clientWidth - 5;
  }

  prevBtn.addEventListener("click", () =>
    scrollContainer.scrollBy({ left: -340, behavior: "smooth" }),
  );
  nextBtn.addEventListener("click", () =>
    scrollContainer.scrollBy({ left: 340, behavior: "smooth" }),
  );
  scrollContainer.addEventListener("scroll", updateChevronStates, {
    passive: true,
  });

  scrollContainer.addEventListener(
    "wheel",
    (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY;
      }
    },
    { passive: false },
  );

  let isDown = false;
  let startX, scrollLeftVal;
  scrollContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeftVal = scrollContainer.scrollLeft;
  });
  scrollContainer.addEventListener("mouseleave", () => {
    isDown = false;
  });
  scrollContainer.addEventListener("mouseup", () => {
    isDown = false;
  });
  scrollContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainer.scrollLeft = scrollLeftVal - walk;
  });

  function renderExtended14Day(daily) {
    const grid = document.getElementById("extended-14day-grid");
    grid.innerHTML = "";
    if (!daily || !daily.temperature_2m_max) return;

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const total = Math.min(14, daily.temperature_2m_max.length);

    for (let i = 0; i < total; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      const dayName =
        i === 0 ? "Today" : i === 1 ? "Tomorrow" : days[d.getDay()];
      const dateStr = d.toLocaleDateString([], {
        month: "short",
        day: "numeric",
      });
      const code = daily.weather_code ? daily.weather_code[i] : 0;
      const meta = WMO_MAP[code] || { name: "Clear", icon: "sun" };
      const maxT = formatRaw(daily.temperature_2m_max[i]);
      const minT = formatRaw(daily.temperature_2m_min[i]);

      const col = document.createElement("div");
      col.className =
        "p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md text-center space-y-2 flex flex-col justify-between hover-lift";
      col.innerHTML = `
            <div>
              <span class="block text-xs font-black text-slate-900 dark:text-white">${dayName}</span>
              <span class="text-[10px] text-slate-400">${dateStr}</span>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 my-1 mx-auto w-fit">
              <i data-lucide="${meta.icon}" class="w-6 h-6 text-orange-500"></i>
            </div>
            <div>
              <span class="text-sm font-black text-slate-900 dark:text-white block">${maxT}</span>
              <span class="text-xs text-slate-400 block">${minT}</span>
            </div>
          `;
      grid.appendChild(col);
    }
  }

  function applyAtmosphereScene(type, isDay = 1) {
    const heroCard = document.getElementById("dash-hero-card");
    const scene = document.getElementById("hero-anim-scene");
    let bgGrad = "var(--hero-sunny)";

    if (!isDay && (type === "sunny" || type === "clouds")) {
      bgGrad = "var(--hero-night)";
      scene.innerHTML = `
            <svg viewBox="0 0 200 200" fill="none">
              <path d="M140 60 A40 40 0 1 1 95 135 A48 48 0 0 0 140 60 Z" fill="#fef08a" filter="drop-shadow(0 0 16px rgba(254,240,138,0.5))"/>
              <circle cx="50" cy="50" r="2" fill="#ffffff" class="anim-sun-rot"/>
              <circle cx="70" cy="30" r="3" fill="#ffffff"/>
            </svg>`;
    } else if (type === "rainy") {
      bgGrad = "var(--hero-rainy)";
      scene.innerHTML = `
            <svg viewBox="0 0 200 200" fill="none">
              <path class="anim-cloud-move" d="M45 100 C45 82 63 70 82 74 C88 60 108 60 118 72 C128 70 142 80 140 95 C150 102 150 118 140 126 L45 126 Z" fill="#93c5fd"/>
              <g stroke="#38bdf8" stroke-width="3" stroke-linecap="round">
                <line class="anim-rain-1" x1="50" y1="135" x2="45" y2="155"/>
                <line class="anim-rain-2" x1="80" y1="135" x2="75" y2="155"/>
                <line class="anim-rain-1" x1="110" y1="135" x2="105" y2="155"/>
              </g>
            </svg>`;
    } else if (type === "thunder") {
      bgGrad = "var(--hero-thunder)";
      scene.innerHTML = `
            <svg viewBox="0 0 200 200" fill="none">
              <path class="anim-cloud-move" d="M45 90 C45 72 65 62 85 66 C92 50 115 50 125 62 C138 60 150 72 148 88 C158 96 158 112 148 120 L45 120 Z" fill="#475569"/>
              <polygon class="anim-bolt" points="98 115 80 145 102 145 86 180 122 132 104 132 118 115" fill="#facc15"/>
            </svg>`;
    } else if (type === "snow") {
      bgGrad = "var(--hero-snow)";
      scene.innerHTML = `
            <svg viewBox="0 0 200 200" fill="none">
              <path class="anim-cloud-move" d="M45 100 C45 82 63 70 82 74 C88 60 108 60 118 72 C128 70 142 80 140 95 C150 102 150 118 140 126 L45 126 Z" fill="#bae6fd"/>
              <circle class="anim-flake-1" cx="60" cy="145" r="4" fill="#ffffff"/>
              <circle class="anim-flake-2" cx="90" cy="148" r="4" fill="#ffffff"/>
            </svg>`;
    } else {
      bgGrad = "var(--hero-sunny)";
      scene.innerHTML = `
            <svg viewBox="0 0 200 200" fill="none">
              <defs>
                <radialGradient id="sunBloom" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#fef08a"/>
                  <stop offset="60%" stop-color="#f59e0b"/>
                  <stop offset="100%" stop-color="#ea580c"/>
                </radialGradient>
              </defs>
              <g class="anim-sun-rot">
                <circle cx="140" cy="75" r="32" fill="url(#sunBloom)"/>
                <line x1="140" y1="32" x2="140" y2="18" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
                <line x1="172" y1="43" x2="182" y2="33" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
                <line x1="183" y1="75" x2="197" y2="75" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
              </g>
              <path class="anim-cloud-move" d="M50 120 C50 102 68 88 88 92 C95 78 116 78 126 90 C138 88 152 100 150 115 C160 122 160 138 150 146 L50 146 Z" fill="#ffffff" opacity="0.95"/>
            </svg>`;
    }

    heroCard.style.background = bgGrad;
  }

  // 11. Gemini AI Features
  async function callGemini(sysPrompt, userQuery) {
    const apiKey = "";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const payload = {
      contents: [{ parts: [{ text: userQuery }] }],
      systemInstruction: { parts: [{ text: sysPrompt }] },
    };

    const delays = [1000, 2000, 4000];
    for (let i = 0; i <= delays.length; i++) {
      try {
        const res = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          const data = await res.json();
          return data.candidates?.[0]?.content?.parts?.[0]?.text || null;
        }
      } catch (e) {}
      if (i < delays.length) await new Promise((r) => setTimeout(r, delays[i]));
    }
    return null;
  }

  async function triggerGeminiBriefing() {
    const cur = liveWeatherData?.current;
    const tempC = cur ? Math.round(cur.temperature_2m) : 28;
    const cond = WMO_MAP[cur?.weather_code]?.name || "Clear";
    const hum = cur ? cur.relative_humidity_2m : 52;
    const wind = cur ? cur.wind_speed_10m : 14;

    const sys = `You are a certified meteorologist and personal planner. Return raw JSON (NO CODE FENCES, NO MARKDOWN).
Format: {"wardrobe": "string", "activity": "string", "health": "string"}`;
    const q = `Location: ${activeCity.name}, ${activeCity.country}. Temp: ${tempC}°C, Weather: ${cond}, Humidity: ${hum}%, Wind: ${wind} km/h.`;

    try {
      const raw = await callGemini(sys, q);
      if (raw) {
        const clean = raw
          .replace(/```json/gi, "")
          .replace(/```/g, "")
          .trim();
        const p = JSON.parse(clean);
        if (p.wardrobe)
          document.getElementById("ai-wardrobe").textContent = p.wardrobe;
        if (p.activity)
          document.getElementById("ai-activity").textContent = p.activity;
        if (p.health)
          document.getElementById("ai-health").textContent = p.health;
      }
    } catch (e) {
      document.getElementById("ai-wardrobe").textContent =
        tempC > 26
          ? `Light breathable linen or cotton recommended for ${activeCity.name}'s warm ${cond} day.`
          : `Layer with a windbreaker for cool conditions in ${activeCity.name}.`;
      document.getElementById("ai-activity").textContent =
        `Best window for jogging and outdoor sports is early morning before noon heat.`;
      document.getElementById("ai-health").textContent =
        `Keep a 2.5L water flask accessible and wear sunscreen for UV protection.`;
    }
  }

  window.askCopilot = async function (query) {
    const inputFull = document.getElementById("copilot-full-input");
    const replyBox = document.getElementById("copilot-full-reply");
    const text = query || inputFull.value.trim();
    if (!text) return;

    replyBox.textContent = `Consulting Gemini 2.5 Flash for ${currentUserName}...`;
    const cur = liveWeatherData?.current;
    const tempC = cur ? Math.round(cur.temperature_2m) : 28;
    const cond = WMO_MAP[cur?.weather_code]?.name || "Clear";

    const sys =
      "You are Gemini Weather Copilot. Answer user inquiries directly in 2 helpful sentences using the provided current telemetry.";
    const userQ = `User: ${currentUserName}. City: ${activeCity.name}. Temp: ${tempC}°C, Weather: ${cond}. Question: "${text}"`;

    try {
      const res = await callGemini(sys, userQ);
      replyBox.textContent =
        res ||
        `Conditions in ${activeCity.name} are currently ${cond} at ${tempC}°C. Stay prepared!`;
    } catch (e) {
      replyBox.textContent = `Based on current ${cond} in ${activeCity.name} (${tempC}°C), conditions remain favorable.`;
    }
  };

  document
    .getElementById("copilot-full-submit")
    .addEventListener("click", () => askCopilot());
  document
    .getElementById("copilot-full-input")
    .addEventListener("keydown", (e) => {
      if (e.key === "Enter") askCopilot();
    });

  // 12. City Search & Geolocation
  window.quickSelectCity = function (name, lat, lon, country) {
    fetchTelemetry(lat, lon, name, country);
  };

  async function handleCitySearch() {
    const input = document.getElementById("dash-city-search");
    const query = input.value.trim();
    if (!query) return;

    try {
      const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1&language=en&format=json`,
      );
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        const loc = data.results[0];
        fetchTelemetry(loc.latitude, loc.longitude, loc.name, loc.country);
        input.value = "";
      }
    } catch (e) {}
  }
  document
    .getElementById("dash-search-submit")
    .addEventListener("click", handleCitySearch);
  document
    .getElementById("dash-city-search")
    .addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleCitySearch();
    });

  document.getElementById("btn-dash-gps").addEventListener("click", () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        fetchTelemetry(
          pos.coords.latitude,
          pos.coords.longitude,
          "Local Station",
          "GPS",
        ),
      () => quickSelectCity("Pune", 18.5204, 73.8567, "India"),
      { timeout: 7000 },
    );
  });

  // Unit Toggle
  function toggleUnit() {
    isMetric = !isMetric;
    const label = isMetric ? "°C" : "°F";
    document.getElementById("btn-dash-unit").textContent = label;
    document.getElementById("settings-unit-toggle").textContent = isMetric
      ? "Metric (°C)"
      : "Imperial (°F)";
    renderDashboardUI();
  }
  document
    .getElementById("btn-dash-unit")
    .addEventListener("click", toggleUnit);
  document
    .getElementById("settings-unit-toggle")
    .addEventListener("click", toggleUnit);

  // Dashboard Viewport Open / Close
  window.openDashboard = function () {
    oripioViewport.hidden = false;
    document.body.style.overflow = "hidden";
    if (lenis) lenis.stop();
    if (!liveWeatherData) {
      fetchTelemetry(
        activeCity.lat,
        activeCity.lon,
        activeCity.name,
        activeCity.country,
      );
    } else {
      renderDashboardUI();
    }
  };

  window.closeDashboard = function () {
    oripioViewport.hidden = true;
    document.body.style.overflow = "";
    if (lenis) lenis.start();
  };

  document
    .getElementById("open-dash-cta")
    .addEventListener("click", openDashboard);
  document
    .getElementById("hero-launch-dash")
    .addEventListener("click", openDashboard);
  document
    .getElementById("btn-dash-back-top")
    .addEventListener("click", closeDashboard);
  document
    .getElementById("dash-exit-btn")
    .addEventListener("click", closeDashboard);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!profileModal.classList.contains("hidden")) {
        closeProfileModal();
      } else if (!oripioViewport.hidden) {
        closeDashboard();
      }
    }
  });

  document.getElementById("btn-reset-cache").addEventListener("click", () => {
    localStorage.removeItem("kroma_user_name");
    localStorage.removeItem("kroma-theme");
    currentUserName = DEFAULT_USER_NAME;
    updateProfileUI();
    alert("Local profile preferences have been restored to defaults.");
  });

  // Boot application
  initAtlas();
  fetchTelemetry(
    activeCity.lat,
    activeCity.lon,
    activeCity.name,
    activeCity.country,
  );

  // Back to top smooth scroll with Lenis integration
  const backToTopBtn = document.getElementById("footer-back-to-top");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      if (lenis) {
        lenis.scrollTo(0, { duration: 0.85 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }
})();
