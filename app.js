(() => {
  const VP = "https://turbodog111.github.io/vp/demos";

  const HOUSES = [
    { id: "compass-theater", title: "Compass", by: "Paul Owen Music / Mili", note: "Sky / mirror sea" },
    { id: "psalm-theater", title: "Psalm 8 (Halle)", by: "Phil Wickham", note: "Firmament" },
    { id: "violet-theater", title: "Through Patches of Violet", by: "Paul Owen Music / Mili", note: "Mirror fracture" },
    { id: "waiting-theater", title: "Waiting for Tomorrow", by: "Kasane Teto", note: "Clock room" },
    { id: "hero-rie-theater", title: "Hero", by: "Himemiya Rie", note: "Green hills" },
    { id: "one-more-bite-theater", title: "One More Bite", by: "MiliSen feat. Kasane Teto", note: "Appetite" },
    { id: "encore-en-theater", title: "Encore Dance", by: "Moonlit Star", note: "English" },
    { id: "encore-jp-theater", title: "Encore Dance", by: "MIMI", note: "Japanese" },
    { id: "celebration-theater", title: "CELEBRATION", by: "Forrest Frank", note: "Mirror starburst" },
    { id: "okay-theater", title: "OKAY!", by: "Forrest Frank", note: "Signal lift" },
    { id: "window-view-en-theater", title: "Window View", by: "Moonlit Star", note: "English" },
    { id: "window-view-jp-theater", title: "Window View", by: "Farewell225", note: "Japanese" }
  ];

  const houses = document.getElementById("houses");
  const lobby = document.getElementById("lobby");
  const wrap = document.getElementById("stage-wrap");
  const stage = document.getElementById("stage");
  const back = document.getElementById("back");

  for (const house of HOUSES) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "house";
    button.innerHTML =
      `<div class="eyebrow">${house.by}</div>` +
      `<h2>${house.title}</h2>` +
      `<p class="edition">${house.note}</p>`;
    button.addEventListener("click", () => openHouse(house.id));
    houses.appendChild(button);
  }

  function openHouse(id) {
    stage.src = `${VP}/${id}/`;
    lobby.classList.add("hidden");
    wrap.classList.remove("hidden");
  }

  function closeHouse() {
    stage.src = "about:blank";
    wrap.classList.add("hidden");
    lobby.classList.remove("hidden");
  }

  back.addEventListener("click", closeHouse);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !wrap.classList.contains("hidden")) closeHouse();
  });
})();
