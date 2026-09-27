const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");

    const isMenuOpen = !mobileMenu.classList.contains("hidden");

    menuToggle.setAttribute("aria-expanded", isMenuOpen);

    menuToggle.setAttribute("aria-label", isMenuOpen ? "Close navigation menu" : "Open navigation menu");
});

const mobileNavLinks = document.querySelectorAll("#mobile-menu a");

mobileNavLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});

// Scripture Character

const scriptureCharacter = document.getElementById("scripture-character");

const scripturePopup = document.getElementById("scripture-popup");

const scriptureText = document.getElementById("scripture-text");

const scriptureReference = document.getElementById("scripture-reference");

const scriptures = [
    {
        text: "Be strong and courageous. Do not be afraid; do not be discouraged.",
        reference: "Joshua 1:9",
    },

    {
        text: "The Lord is my shepherd; I lack nothing.",
        reference: "Psalm 23:1",
    },

    {
        text: "I can do all things through Christ who strengthens me.",
        reference: "Philippians 4:13",
    },

    {
        text: "Cast all your anxiety on Him because He cares for you.",
        reference: "1 Peter 5:7",
    },

    {
        text: "Be still, and know that I am God.",
        reference: "Psalm 46:10",
    },
];

scriptureCharacter.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * scriptures.length);

    const scripture = scriptures[randomIndex];

    scriptureText.textContent = `"${scripture.text}"`;

    scriptureReference.textContent = scripture.reference;

    scripturePopup.classList.remove("hidden");

    setTimeout(function () {
        scripturePopup.classList.add("hidden");
    }, 5000);
});
