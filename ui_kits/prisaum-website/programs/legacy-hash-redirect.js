// legacy-hash-redirect.js
// Old HubSpot site put every programme as an anchor on a single /programs page
// (e.g. /programs#baking). Server 301s can't match a URL fragment (the part after
// "#" is never sent to the server), so we forward those legacy deep links here,
// on the /programs hub, to the new dedicated programme pages.
(function () {
  var map = {
    baking: "baking-confectionery",
    weaving: "weaving",
    gardening: "gardening-horticulture",
    computers: "computer-skills",
    printing: "printing-merchandise",
    housekeeping: "housekeeping",
    platemaking: "eco-friendly-plate-making",
    laundry: "laundry-fabric-care",
    nios: "nios-support",
    "music-therapy": "music-arts-therapy",
    "play-therapy": "play-therapy",
    occupational: "occupational-therapy"
  };
  var h = (location.hash || "").replace(/^#/, "").toLowerCase();
  if (h && map[h]) {
    // production clean URL; in this prototype the page is <slug>.html
    var clean = "/programs/" + map[h];
    var proto = map[h] + ".html";
    location.replace(location.pathname.indexOf(".html") > -1 ? proto : clean);
  }
})();
