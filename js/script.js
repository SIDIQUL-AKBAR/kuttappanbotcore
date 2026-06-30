const commandsData = {
  category1: {
    icon: "🛡️",
    title: "Moderation",
    commands: [
      {
        name: "/ban ",
        description: "Permanently bans a user from the server.",
        permission: "All",
      },
      {
        name: "/kick",
        description: "Removes a user from the server (they can still rejoin).",
        permission: "All",
      },
      {
        name: "/mute",
        description: "Restricts a user from typing or speaking.",
        permission: "All",
      },
      {
        name: "/unmute",
        description: "Removes a mute from a user.",
        permission: "All",
      },
      {
        name: "/warn",
        description: "Issues an official warning to a user.",
        permission: "All",
      },
      {
        name: "/unban",
        description: "Revokes a user's ban using their User ID.",
        permission: "All",
      },
      {
        name: "/purge",
        description: "Bulk deletes a specified number of messages.",
        permission: "All",
      },
      {
        name: "/slowmode",
        description: "Sets a cooldown timer between messages in a channel.",
        permission: "All",
      },
      {
        name: "/lock",
        description: "Prevents members from sending messages in the current channel.",
        permission: "All",
      },
      {
        name: "/unlock",
        description: "Re-opens a locked channel for messages.",
        permission: "All",
      },
      {
        name: "/nickname",
        description: "Changes a specific user's nickname.",
        permission: "All",
      },
      {
        name: "/role",
        description: "Adds or removes a role from a user.",
        permission: "All",
      },
      {
        name: "/modlogs",
        description: "Views the moderation history/logs for a user.",
        permission: "All",
      },
      {
        name: "/timeout",
        description: "Temporarily timeouts a user, preventing interaction.",
        permission: "All",
      },
      {
        name: "/announce",
        description: "Sends a formatted announcement to a specific channel.",
        permission: "All",
      },
    ],
  },
  category2: {
    icon: "⭐",
    title: "Leveling",
    commands: [
      {
        name: "/rank",
        description: "Displays your or another user's current level and XP.",
        permission: "Admin",
      },
      {
        name: "/leaderboard",
        description: "Shows the server’s top XP earners.",
        permission: "Admin",
      },
      {
        name: "/addxp",
        description: "Grants a specific amount of XP to a user.",
        permission: "Admin",
      },
      {
        name: "/removexp",
        description: "Deducts a specific amount of XP from a user.",
        permission: "Admin",
      },
      {
        name: "/setlevel",
        description: "Manually sets a user's level to a specific number.",
        permission: "Admin",
      },
      {
        name: "/resetxp",
        description: "Resets all leveling data or a specific user's XP.",
        permission: "Admin",
      },
    ],
  },
  category3: {
    icon: "🎵",
    title: "Music",
    commands: [
      {
        name: "/play",
        description: "Plays a song or playlist from a link or search query.",
        permission: "All",
      },
      {
        name: "/skip",
        description: "Skips the song currently playing.",
        permission: "All",
      },
      {
        name: "/stop",
        description: "Stops the music completely and clears the queue.",
        permission: "All",
      },
      {
        name: "/queue",
        description: "Displays the list of upcoming songs.",
        permission: "All",
      },
      {
        name: "/nowplaying",
        description: "Shows details about the song currently playing.",
        permission: "All",
      },
      {
        name: "/history",
        description: "Views a list of recently played tracks.",
        permission: "All",
      },
      {
        name: "/volume",
        description: "Adjusts the bot’s audio volume level.",
        permission: "All",
      },
      {
        name: "/pause",
        description: "Pauses the current music playback.",
        permission: "All",
      },
      {
        name: "/resume",
        description: "Resumes playing paused music.",
        permission: "All",
      },
      {
        name: "/shuffle",
        description: "Randomizes the order of tracks in the queue.",
        permission: "All",
      },
    ],
  },
  category4: {
    icon: "💰",
    title: "Economy",
    commands: [
      {
        name: "/balance",
        description: "Checks your or another user's current wallet/bank balance.",
        permission: "All",
      },
      {
        name: "/daily",
        description: "Claims your free daily bonus currency.",
        permission: "All",
      },
       {
        name: "/work",
        description: "Shifts for a job to earn a random amount of currency.",
        permission: "All",
      },
      {
        name: "/pay",
        description: "Transfers a specific amount of your currency to another user.",
        permission: "Mod",
      },
      {
        name: "/richlist",
        description: "Displays the wealthiest users in the server.",
        permission: "All",
      },
    ],
  },
   category5: {
    icon: "🎮",
    title: "Games",
    commands: [
      {
        name: "/rps",
        description: "Play a game of Rock, Paper, Scissors against the bot.",
        permission: "Mod",
      },
      {
        name: "/trivia",
        description: "Answers a multiple-choice trivia question for fun.",
        permission: "Mod",
      },
      {
        name: "/coinflip",
        description: "Flips a coin for a random Heads or Tails result.",
        permission: "Mod",
      },
    ],
  },
   category6: {
    icon: "🎉",
    title: "Giveaways",
    commands: [
      {
        name: "/gstart",
        description: "Starts a new giveaway with a set duration and prize.",
        permission: "Mod",
      },
      {
        name: "/gend",
        description: "Ends an ongoing giveaway early and picks a winner.",
        permission: "Mod",
      },
      {
        name: "/greroll",
        description: "Rolls a new winner for a completed giveaway.",
        permission: "Mod",
      },
      {
        name: "/glist",
        description: "Displays all active giveaways running on the server.",
        permission: "Mod",
      },
    ],
  },
   category7: {
    icon: "🎭",
    title: "Reaction Roles",
    commands: [
      {
        name: "/reactionrole add",
        description: " ",
        permission: "Mod",
      },
      {
        name: "/reactionrole remove",
        description: " ",
        permission: "Mod",
      },
      {
        name: "/reactionrole list",
        description: " ",
        permission: "Mod",
      },
    ],
  },
   category8: {
    icon: "⚙️",
    title: "Setup",
    commands: [
      {
        name: "/setup welcome",
        description: "Configures the custom welcome/leave message channel.",
        permission: "Mod",
      },
      {
        name: "/setup logs",
        description: "Sets up a dedicated channel for moderation and system logs.",
        permission: "Mod",
      },
      {
        name: "/setup automod",
        description: "Configures automated moderation filters (e.g., banned words).",
        permission: "Mod",
      },
      {
        name: "/setup antispam",
        description: "Toggles and configures protection against fast spammers.8",
        permission: "Mod",
      },
      {
        name: "/setup autorole",
        description: "Sets roles to be automatically given to users upon joining.",
        permission: "Mod",
      },
      {
        name: "/setup status",
        description: "Displays the current configuration status of all bot systems.",
        permission: "Mod",
      },
    ],
  },
   category9: {
    icon: "🔧",
    title: "Utility",
    commands: [
      {
        name: "/ping",
        description: " ",
        permission: "Mod",
      },
      {
        name: "/botinfo",
        description: " ",
        permission: "Mod",
      },
      {
        name: "/serverinfo",
        description: " ",
        permission: "Mod",
      },
      {
        name: "/userinfo",
        description: " ",
        permission: "Mod",
      },
       {
        name: "/avatar",
        description: " ",
        permission: "Mod",
      },
      {
        name: "/poll",
        description: " ",
        permission: "Mod",
      },
      {
        name: "/say",
        description: " ",
        permission: "Mod",
      },
      {
        name: "/embed",
        description: " ",
        permission: "Mod",
      },
      {
        name: "/remind",
        description: " ",
        permission: "Mod",
      },
      {
        name: "/dice",
        description: " ",
        permission: "Mod",
      },
      {
        name: "/choose",
        description: " ",
        permission: "Mod",
      },
      {
        name: "/calc",
        description: " ",
        permission: "Mod",
      },
      {
        name: "/cmd",
        description: " ",
        permission: "Mod",
      },
      {
        name: "/activity",
        description: " ",
        permission: "Mod",
      },
      {
        name: "/help",
        description: " ",
        permission: "Mod",
      },
    ],
  },
};

function createCategoryButton(key, category) {
  return `
        <div class="bg-white/5 rounded-2xl border border-white/10" id="${key}-container">
            <button class="w-full px-8 py-6 flex justify-between items-center text-2xl font-semibold" 
                    onclick="toggleCategory('${key}')">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                        ${category.icon}
                    </div>
                    <span>${category.title}</span>
                </div>
                <svg class="w-6 h-6 transform transition-transform" id="${key}-arrow"
                     xmlns="http:
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            <div class="hidden px-8 pb-6 space-y-4" id="${key}-commands">
                <!-- Commands will be loaded here when category is opened -->
            </div>
        </div>
    `;
}

function createCommandHTML(cmd) {
  return `
        <div class="command-card bg-white/5 p-6 rounded-xl border border-white/10">
            <div class="flex justify-between items-start">
                <div>
                    <h4 class="text-xl font-semibold mb-2">${cmd.name}</h4>
                    <p class="text-white/70">${cmd.description}</p>
                </div>
                <span class="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg text-sm">
                    ${cmd.permission}
                </span>
            </div>
        </div>
    `;
}

const loadedCategories = new Set();

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.opacity = "0";
      setTimeout(() => loader.remove(), 500);
    }
  }, 1000);
});

gsap.registerPlugin(ScrollTrigger);
gsap.from("#hero-heading", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  delay: 0.5,
  ease: "power4.out",
});

gsap.from("#hero-subheading", {
  opacity: 0,
  y: 30,
  duration: 1.2,
  delay: 0.7,
  ease: "power4.out",
});

gsap.from("#hero-button1", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1,
  ease: "power4.out",
});

gsap.from("#hero-button2", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1.2,
  ease: "power4.out",
});

gsap.from("#hero-logo", {
  opacity: 0,
  scale: 0.8,
  duration: 1.5,
  delay: 0.5,
  ease: "power4.out",
});

function initHeroAnimations() {
  const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

  timeline
    .from("#hero h1", {
      opacity: 0,
      y: 100,
      duration: 1,
    })
    .from(
      "#hero p",
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
      },
      "-=0.5",
    )
    .from(
      "#hero button",
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
      },
      "-=0.5",
    )
    .from(
      "#hero img",
      {
        opacity: 0,
        x: 100,
        duration: 1,
      },
      "-=0.5",
    );
}

function initFeaturesAnimations() {
  const cards = gsap.utils.toArray(".feature-card");

  cards.forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      rotation: 5,
      duration: 0.8,
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      },
    });
  });
}

function toggleCategory(category) {
  const container = document.getElementById(`${category}-commands`);
  const arrow = document.getElementById(`${category}-arrow`);
  const cards = container.querySelectorAll(".command-card");

  if (container.classList.contains("hidden")) {
    container.classList.remove("hidden");

    arrow.classList.add("rotate");

    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 100);
    });
  } else {
    cards.forEach((card) => {
      card.classList.remove("show");
    });

    arrow.classList.remove("rotate");

    setTimeout(() => {
      container.classList.add("hidden");
    }, 300);
  }
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      const navHeight = document.querySelector("nav").offsetHeight;

      if (target) {
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        if (this.getAttribute("href") === "#commands") {
          gsap.to("#commands", {
            backgroundColor: "rgba(79, 70, 229, 0.1)",
            duration: 0.3,
            yoyo: true,
            repeat: 1,
          });
        }
      }
    });
  });
}

function initScrollAnimations() {
  gsap.to("nav", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "+=100",
      toggleClass: { targets: "nav", className: "nav-blur" },
      scrub: true,
    },
  });

  gsap.from("#commands .bg-white\\/5", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#commands",
      start: "top center+=100",
      toggleActions: "play none none reverse",
    },
  });
}

document.addEventListener("DOMContentLoaded", initializeWebsite);

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.opacity = "0";
      setTimeout(() => loader.remove(), 500);
    }
  }, 1000);
});

gsap.registerPlugin(ScrollTrigger);
gsap.from("#hero-heading", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  delay: 0.5,
  ease: "power4.out",
});

gsap.from("#hero-subheading", {
  opacity: 0,
  y: 30,
  duration: 1.2,
  delay: 0.7,
  ease: "power4.out",
});

gsap.from("#hero-button1", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1,
  ease: "power4.out",
});

gsap.from("#hero-button2", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1.2,
  ease: "power4.out",
});

gsap.from("#hero-logo", {
  opacity: 0,
  scale: 0.8,
  duration: 1.5,
  delay: 0.5,
  ease: "power4.out",
});

function initHeroAnimations() {
  const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

  timeline
    .from("#hero h1", {
      opacity: 0,
      y: 100,
      duration: 1,
    })
    .from(
      "#hero p",
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
      },
      "-=0.5",
    )
    .from(
      "#hero button",
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
      },
      "-=0.5",
    )
    .from(
      "#hero img",
      {
        opacity: 0,
        x: 100,
        duration: 1,
      },
      "-=0.5",
    );
}

function initFeaturesAnimations() {
  const cards = gsap.utils.toArray(".feature-card");

  cards.forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      rotation: 5,
      duration: 0.8,
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      },
    });
  });
}

function toggleCategory(category) {
  const commandsDiv = document.getElementById(`${category}-commands`);
  const arrow = document.getElementById(`${category}-arrow`);

  if (!loadedCategories.has(category)) {
    const commandsHTML = commandsData[category].commands
      .map((cmd) => createCommandHTML(cmd))
      .join("");
    commandsDiv.innerHTML = commandsHTML;
    loadedCategories.add(category);
  }

  commandsDiv.classList.toggle("hidden");
  arrow.classList.toggle("rotate-180");
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      const navHeight = document.querySelector("nav").offsetHeight;

      if (target) {
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        if (this.getAttribute("href") === "#commands") {
          gsap.to("#commands", {
            backgroundColor: "rgba(79, 70, 229, 0.1)",
            duration: 0.3,
            yoyo: true,
            repeat: 1,
          });
        }
      }
    });
  });
}

function initScrollAnimations() {
  gsap.to("nav", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "+=100",
      toggleClass: { targets: "nav", className: "nav-blur" },
      scrub: true,
    },
  });

  gsap.from("#commands .bg-white\\/5", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#commands",
      start: "top center+=100",
      toggleActions: "play none none reverse",
    },
  });
}

function initializeWebsite() {
  initHeroAnimations();
  initFeaturesAnimations();
  initScrollAnimations();
  initSmoothScroll();

  const ctaButtons = document.querySelectorAll(".gradient-bg");
  ctaButtons.forEach((button) => button.classList.add("pulse-on-hover"));

  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card) => card.classList.add("shine-effect"));
}
async function updateGitHubStats() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/redolenthalo/discord-bot-website-template",
    );
    const data = await response.json();

    document.getElementById("stars-count").textContent =
      `${data.stargazers_count} Stars`;
    document.getElementById("forks-count").textContent =
      `${data.forks_count} Forks`;
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
  }
}

updateGitHubStats();
setInterval(updateGitHubStats, 300000);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.onscroll = function () {
  const button = document.querySelector('[onclick="scrollToTop()"]');
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    button.style.opacity = "1";
    button.style.pointerEvents = "auto";
  } else {
    button.style.opacity = "0";
    button.style.pointerEvents = "none";
  }
};

document.addEventListener("DOMContentLoaded", initializeWebsite);
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("commands-container");

  const categoriesHTML = Object.entries(commandsData)
    .map(([key, category]) => createCategoryButton(key, category))
    .join("");

  container.innerHTML = categoriesHTML;
});

function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = document.querySelector(".menu-icon");
  const menuButton = document.querySelector(".md\\:hidden button");

  if (mobileMenu.classList.contains("hidden")) {
    // Show menu
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("animate-fade-in");
    menuIcon.setAttribute("d", "M6 18L18 6M6 6l12 12");
  } else {
    // Hide menu
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("animate-fade-in");
    menuIcon.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
  }

  // Stop event propagation
  event.stopPropagation();
}

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuButton = document.querySelector(".md\\:hidden button");

  // Only close if menu is open and click is outside menu and button
  if (
    !mobileMenu.classList.contains("hidden") &&
    !mobileMenu.contains(e.target) &&
    !menuButton.contains(e.target)
  ) {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("animate-fade-in");
    document
      .querySelector(".menu-icon")
      .setAttribute("d", "M4 6h16M4 12h16M4 18h16");
  }
});

// Prevent menu from closing when clicking inside
document.getElementById("mobileMenu")?.addEventListener("click", (e) => {
  e.stopPropagation();
});
