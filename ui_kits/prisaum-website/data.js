/* Shared data + helpers for the Prisaum Seva website kit.
   Content drawn from prisaum.com; imagery is now self-hosted under /assets/site
   (migrated off HubSpot). */

// Resolve /assets/site/<file> relative to THIS script's own location, so the
// same map works from the homepage and from deeper /programs/ pages alike.
const _dataScript =
  (document.currentScript && document.currentScript.src && document.currentScript) ||
  [...document.querySelectorAll("script")].find((s) => s.src && /(^|\/)data\.js(\?|$)/.test(s.src));
const _ASSET_BASE = _dataScript
  ? new URL("../../assets/site/", _dataScript.src).href
  : "../../assets/site/";
function asset(file) { return _ASSET_BASE + file; }

const IMG = {
  logoColor: asset("logo-color.png"),
  logoReversed: asset("logo-reversed.png"),
  hero: asset("hero.png"),
  howWeBegan: asset("how-we-began.png"),
  whomWeServe: asset("whom-we-serve.png"),
  whatWeOffer: asset("what-we-offer.png"),
  icGuidance: asset("ic-guidance.png"),
  icTraining: asset("ic-training.png"),
  icCert: asset("ic-cert.png"),
  icCareer: asset("ic-career.png"),
};

// Vocational training programmes — every entry has a dedicated SEO page (slug).
const VOCATIONAL = [
  { icon: "cookie", title: "Baking & Confectionery", desc: "Baking, decoration, packaging and safe kitchen practice.", slug: "baking-confectionery" },
  { icon: "grid-3x3", title: "Weaving", desc: "Handloom skills that build focus and fine motor control.", slug: "weaving" },
  { icon: "sprout", title: "Gardening & Horticulture", desc: "Nursery, crop care and landscape maintenance.", slug: "gardening-horticulture" },
  { icon: "monitor", title: "Computer Skills", desc: "Digital literacy, data entry and online communication.", slug: "computer-skills" },
  { icon: "printer", title: "Printing & Merchandise", desc: "Print production and merchandise finishing.", slug: "printing-merchandise" },
  { icon: "sparkles", title: "Self Grooming & Hygiene", desc: "Personal care routines for confident daily living.", slug: "self-grooming-hygiene" },
  { icon: "house", title: "Housekeeping", desc: "Facility care and organised, independent living.", slug: "housekeeping" },
  { icon: "leaf", title: "Eco-Friendly Plate Making", desc: "Biodegradable plate production from natural material.", slug: "eco-friendly-plate-making" },
  { icon: "shirt", title: "Laundry & Fabric Care", desc: "Garment care, washing and pressing skills.", slug: "laundry-fabric-care" },
];

// Educational & therapeutic programmes — each with a dedicated SEO page (slug).
const THERAPEUTIC = [
  { icon: "book-open", title: "NIOS Support", desc: "Open-school coaching toward state certification.", slug: "nios-support" },
  { icon: "music", title: "Music & Expressive Arts Therapy", desc: "Expression and regulation through the arts.", slug: "music-arts-therapy" },
  { icon: "blocks", title: "Play Therapy", desc: "Structured play that builds social confidence.", slug: "play-therapy" },
  { icon: "smile", title: "Recreational Learning", desc: "Joyful, learner-led group activities.", slug: "recreational-learning" },
  { icon: "activity", title: "Occupational Therapy", desc: "Skill-building for everyday independence.", slug: "occupational-therapy" },
  { icon: "heart-handshake", title: "Life Skills Training", desc: "Social, communication and self-help skills.", slug: "life-skills-training" },
];

// Vocational services (uses the brand's own spot icons)
const SERVICES = [
  { img: "icGuidance", title: "Assessment & Vocational Guidance" },
  { img: "icTraining", title: "Educational & Vocational Training" },
  { img: "icCert", title: "NIOS / State Subjects Coaching" },
  { img: "icCareer", title: "Career Counselling for Trainees & Parents" },
];

const ABOUT = [
  { img: "howWeBegan", title: "How We Began",
    body: "This educational programme teaches vocational job-development skills while practising life and social skills, guided by our staff and professional artists." },
  { img: "whomWeServe", title: "Whom We Serve",
    body: "We support adults with intellectual disabilities who need a higher level of care, offering respite for caregivers through our centre-based service." },
  { img: "whatWeOffer", title: "What We Offer",
    body: "Professional care, personalised support and tailored interventions from our Allied Health team — building independence and well-being." },
];

const ADMISSIONS = [
  "Intellectual Disabilities", "Autism", "Mental Health Conditions",
  "Learning Disabilities (LD)", "Slow Learning Abilities", "Down Syndrome",
];

function Ico({ name, size = 20, ...rest }) {
  return React.createElement("i", { "data-lucide": name, style: { width: size, height: size, display: "inline-flex" }, ...rest });
}

function refreshIcons() {
  if (window.lucide && window.lucide.createIcons) {
    window.lucide.createIcons({ attrs: { "stroke-width": 2 } });
  }
}

Object.assign(window, { asset, IMG, VOCATIONAL, THERAPEUTIC, SERVICES, ABOUT, ADMISSIONS, Ico, refreshIcons });
