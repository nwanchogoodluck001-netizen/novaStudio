/**
 * NovaStudios - Centralized Admin Core Engine
 * Manages localStorage persistence, zero-demo-data state, analytics logging,
 * active navigation shells, and global utility toasts.
 */

// Strict localStorage Keys
const NOVA_STORAGE_KEYS = {
  USERS: 'novastudios_users',
  NOVELS: 'novastudios_novels',
  ANALYTICS: 'novastudios_analytics',
  ADSENSE: 'novastudios_adsense',
  SETTINGS: 'novastudios_settings'
};

/* =========================================================================
   1. STORAGE GETTERS & SETTERS (Strict Zero-Demo-Data)
   ========================================================================= */

/** Get all registered users (starts cleanly at empty array []) */
function getStoredUsers() {
  try {
    const raw = localStorage.getItem(NOVA_STORAGE_KEYS.USERS);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Error reading stored users:", e);
    return [];
  }
}

/** Save users array */
function saveStoredUsers(users) {
  try {
    localStorage.setItem(NOVA_STORAGE_KEYS.USERS, JSON.stringify(users || []));
  } catch (e) {
    console.error("Error saving users:", e);
  }
}

/** Get all novels (starts cleanly at empty array []) */
function getStoredNovels() {
  try {
    const raw = localStorage.getItem(NOVA_STORAGE_KEYS.NOVELS);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Error reading stored novels:", e);
    return [];
  }
}

/** Save novels array */
function saveStoredNovels(novels) {
  try {
    localStorage.setItem(NOVA_STORAGE_KEYS.NOVELS, JSON.stringify(novels || []));
  } catch (e) {
    console.error("Error saving novels:", e);
  }
}

/** Get clean zero-initialized analytics structure */
function getStoredAnalytics() {
  const zeroStructure = {
    daily: {
      labels: ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00", "23:59"],
      readers: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      audio: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      videoDownloads: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    weekly: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      readers: [0, 0, 0, 0, 0, 0, 0],
      audio: [0, 0, 0, 0, 0, 0, 0],
      videoDownloads: [0, 0, 0, 0, 0, 0, 0]
    },
    yearly: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      readers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      audio: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      videoDownloads: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    events: []
  };

  try {
    const raw = localStorage.getItem(NOVA_STORAGE_KEYS.ANALYTICS);
    return raw ? JSON.parse(raw) : zeroStructure;
  } catch (e) {
    return zeroStructure;
  }
}

/** Save analytics object */
function saveStoredAnalytics(data) {
  try {
    localStorage.setItem(NOVA_STORAGE_KEYS.ANALYTICS, JSON.stringify(data));
  } catch (e) {
    console.error("Error saving analytics:", e);
  }
}

/** Get AdSense configuration (starts cleanly with empty defaults) */
function getStoredAdSense() {
  const defaults = {
    enabled: false,
    publisherId: "",
    slotHome: "",
    slotReader: "",
    slotPreRoll: "",
    autoAdsScript: ""
  };
  try {
    const raw = localStorage.getItem(NOVA_STORAGE_KEYS.ADSENSE);
    return raw ? JSON.parse(raw) : defaults;
  } catch (e) {
    return defaults;
  }
}

/** Save AdSense configuration */
function saveStoredAdSense(cfg) {
  try {
    localStorage.setItem(NOVA_STORAGE_KEYS.ADSENSE, JSON.stringify(cfg));
  } catch (e) {
    console.error("Error saving AdSense config:", e);
  }
}

/** Get platform settings */
function getStoredSettings() {
  const defaults = {
    siteName: "NovaStudios",
    supportEmail: "support@novastudios.com",
    maintenanceMode: false,
    cdnEndpoint: "https://cdn.novastudios.com",
    allowRegistration: true,
    maxUploadSizeMb: 500
  };
  try {
    const raw = localStorage.getItem(NOVA_STORAGE_KEYS.SETTINGS);
    return raw ? JSON.parse(raw) : defaults;
  } catch (e) {
    return defaults;
  }
}

/** Save platform settings */
function saveStoredSettings(settings) {
  try {
    localStorage.setItem(NOVA_STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  } catch (e) {
    console.error("Error saving settings:", e);
  }
}

/* =========================================================================
   2. REAL ACTIVITY RECORDER
   Safely logs actual reading, audio streaming, or video downloading events
   ========================================================================= */
function recordActivityEvent(type, metadata = {}) {
  const analytics = getStoredAnalytics();
  const now = new Date();
  const hour = now.getHours();
  const dayIndex = (now.getDay() + 6) % 7; // 0=Mon, 6=Sun
  const monthIndex = now.getMonth();

  // Find nearest 3-hour daily bucket (0, 3, 6, 9, 12, 15, 18, 21, 23)
  const hourBuckets = [0, 3, 6, 9, 12, 15, 18, 21, 23];
  let bucketIndex = 0;
  let minDiff = 24;
  hourBuckets.forEach((b, idx) => {
    const diff = Math.abs(b - hour);
    if (diff < minDiff) {
      minDiff = diff;
      bucketIndex = idx;
    }
  });

  const eventRecord = {
    type: type, // 'read' | 'audio' | 'video' | 'download'
    title: metadata.title || "Unknown Novel",
    timestamp: now.toISOString(),
    formattedTime: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  if (!analytics.events) analytics.events = [];
  analytics.events.unshift(eventRecord);
  if (analytics.events.length > 50) analytics.events.pop(); // keep last 50 events

  // Increment respective bucket in daily, weekly, yearly
  if (type === 'read') {
    analytics.daily.readers[bucketIndex] = (analytics.daily.readers[bucketIndex] || 0) + 1;
    analytics.weekly.readers[dayIndex] = (analytics.weekly.readers[dayIndex] || 0) + 1;
    analytics.yearly.readers[monthIndex] = (analytics.yearly.readers[monthIndex] || 0) + 1;
  } else if (type === 'audio') {
    analytics.daily.audio[bucketIndex] = (analytics.daily.audio[bucketIndex] || 0) + 1;
    analytics.weekly.audio[dayIndex] = (analytics.weekly.audio[dayIndex] || 0) + 1;
    analytics.yearly.audio[monthIndex] = (analytics.yearly.audio[monthIndex] || 0) + 1;
  } else if (type === 'video' || type === 'download') {
    analytics.daily.videoDownloads[bucketIndex] = (analytics.daily.videoDownloads[bucketIndex] || 0) + 1;
    analytics.weekly.videoDownloads[dayIndex] = (analytics.weekly.videoDownloads[dayIndex] || 0) + 1;
    analytics.yearly.videoDownloads[monthIndex] = (analytics.yearly.videoDownloads[monthIndex] || 0) + 1;
  }

  saveStoredAnalytics(analytics);
  return analytics;
}

/* =========================================================================
   3. GLOBAL TOAST NOTIFICATION HELPER
   ========================================================================= */
function showAdminToast(message, type = 'success') {
  let toastContainer = document.getElementById("adminToastContainer");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "adminToastContainer";
    toastContainer.className = "fixed bottom-20 right-4 sm:right-8 z-50 pointer-events-none transition-all duration-300 opacity-0 transform translate-y-3";
    toastContainer.innerHTML = `
      <div class="px-4 py-3 rounded-2xl bg-[#18181B] border border-white/20 text-white text-xs font-semibold shadow-2xl flex items-center gap-2.5">
        <div id="toastIconContainer" class="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
          <i data-lucide="check-circle" class="w-4 h-4"></i>
        </div>
        <span id="adminToastMessage">Notification</span>
      </div>
    `;
    document.body.appendChild(toastContainer);
    if (typeof lucide !== "undefined") lucide.createIcons();
  }

  const msgEl = document.getElementById("adminToastMessage");
  const iconBox = document.getElementById("toastIconContainer");
  if (msgEl) msgEl.textContent = message;

  if (iconBox) {
    if (type === 'error') {
      iconBox.className = "w-6 h-6 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center";
      iconBox.innerHTML = '<i data-lucide="alert-circle" class="w-4 h-4"></i>';
    } else if (type === 'warning') {
      iconBox.className = "w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center";
      iconBox.innerHTML = '<i data-lucide="alert-triangle" class="w-4 h-4"></i>';
    } else {
      iconBox.className = "w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center";
      iconBox.innerHTML = '<i data-lucide="check-circle" class="w-4 h-4"></i>';
    }
    if (typeof lucide !== "undefined") lucide.createIcons();
  }

  toastContainer.classList.remove("opacity-0", "translate-y-3");
  toastContainer.classList.add("opacity-100", "translate-y-0");

  clearTimeout(window.__adminToastTimer);
  window.__adminToastTimer = setTimeout(() => {
    toastContainer.classList.remove("opacity-100", "translate-y-0");
    toastContainer.classList.add("opacity-0", "translate-y-3");
  }, 2800);
}

/* =========================================================================
   4. SHARED SIDEBAR & NAVIGATION ACTIVE LINK HIGHLIGHTER
   ========================================================================= */
function initAdminNavigation(activePageKey) {
  // Highlights active navigation link based on current HTML file
  const pageMap = {
    'overview': 'nav-overview',
    'upload': 'nav-upload',
    'novels': 'nav-novels',
    'users': 'nav-users',
    'adsense': 'nav-adsense',
    'settings': 'nav-settings'
  };

  const activeId = pageMap[activePageKey];
  if (activeId) {
    const el = document.getElementById(activeId);
    if (el) {
      el.className = "flex items-center gap-3.5 px-3.5 py-3 rounded-xl bg-nova-crimson/10 text-white font-semibold border-l-4 border-nova-crimson";
    }
  }

  // Update AdSense status pill in sidebar if present
  const ads = getStoredAdSense();
  const sideStatus = document.getElementById("sidebarAdStatus");
  if (sideStatus) {
    if (ads.enabled && ads.publisherId) {
      sideStatus.textContent = "ACTIVE";
      sideStatus.className = "text-emerald-400 font-mono font-bold";
    } else {
      sideStatus.textContent = "INACTIVE";
      sideStatus.className = "text-nova-muted font-mono font-bold";
    }
  }

  // Bind mobile drawer toggle
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  if (mobileBtn && mobileDrawer) {
    mobileBtn.onclick = () => {
      mobileDrawer.classList.toggle("opacity-0");
      mobileDrawer.classList.toggle("pointer-events-none");
    };
  }
}

// Global Exports
window.NOVA_STORAGE_KEYS = NOVA_STORAGE_KEYS;
window.getStoredUsers = getStoredUsers;
window.saveStoredUsers = saveStoredUsers;
window.getStoredNovels = getStoredNovels;
window.saveStoredNovels = saveStoredNovels;
window.getStoredAnalytics = getStoredAnalytics;
window.saveStoredAnalytics = saveStoredAnalytics;
window.getStoredAdSense = getStoredAdSense;
window.saveStoredAdSense = saveStoredAdSense;
window.getStoredSettings = getStoredSettings;
window.saveStoredSettings = saveStoredSettings;
window.recordActivityEvent = recordActivityEvent;
window.showAdminToast = showAdminToast;
window.initAdminNavigation = initAdminNavigation;
