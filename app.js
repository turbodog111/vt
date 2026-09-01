(() => {
  const VP = "https://turbodog111.github.io/vp/demos";
  const FORSAKEN = "videos/forsaken";

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

  const FORSAKEN_HOUSES = [
    {
      id: "forsaken-survivors",
      title: "Forsaken Survivors",
      by: "Roblox Forsaken",
      note: "12 characters · 10+ min each",
      folder: "survivors",
      roster: [
        ["007n7", "007n7"],
        ["Builderman", "Builderman"],
        ["Chance", "Chance"],
        ["Dusekkar", "Dusekkar"],
        ["Elliot", "Elliot"],
        ["Guest_1337", "Guest 1337"],
        ["Jane_Doe", "Jane Doe"],
        ["Noob", "Noob"],
        ["Shedletsky", "Shedletsky"],
        ["Taph", "Taph"],
        ["Two_Time", "Two Time"],
        ["Veeronica", "Veeronica"]
      ]
    },
    {
      id: "forsaken-killers",
      title: "Forsaken Killers",
      by: "Roblox Forsaken",
      note: "8 characters · 10+ min each",
      folder: "killers",
      roster: [
        ["1x1x1x1", "1x1x1x1"],
        ["Azure", "Azure"],
        ["c00lkidd", "c00lkidd"],
        ["Guest_666", "Guest 666"],
        ["John_Doe", "John Doe"],
        ["Noli", "Noli"],
        ["Nosferatu", "Nosferatu"],
        ["Slasher", "Slasher"]
      ]
    }
  ];

  const houses = document.getElementById("houses");
  const lobby = document.getElementById("lobby");
  const lead = document.getElementById("lead");
  const wrap = document.getElementById("stage-wrap");
  const stage = document.getElementById("stage");
  const player = document.getElementById("player");
  const back = document.getElementById("back");
  const lobbyBack = document.getElementById("lobby-back");

  let view = "lobby";
  let activeHouse = null;

  function card(eyebrow, title, note, onClick) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "house";
    button.innerHTML =
      `<div class="eyebrow">${eyebrow}</div>` +
      `<h2>${title}</h2>` +
      `<p class="edition">${note}</p>`;
    button.addEventListener("click", onClick);
    return button;
  }

  function renderLobby() {
    view = "lobby";
    activeHouse = null;
    lead.textContent = "Pick a house. Music theatres still use vp. Forsaken plays mp4s from this repo.";
    lobbyBack.classList.add("hidden");
    houses.replaceChildren();
    for (const house of FORSAKEN_HOUSES) {
      houses.appendChild(card(house.by, house.title, house.note, () => renderRoster(house)));
    }
    for (const house of HOUSES) {
      houses.appendChild(card(house.by, house.title, house.note, () => openVp(house.id)));
    }
  }

  function renderRoster(house) {
    view = "roster";
    activeHouse = house;
    lead.textContent = `${house.title}. Each clip is that character for at least 10 minutes.`;
    lobbyBack.classList.remove("hidden");
    houses.replaceChildren();
    for (const [file, title] of house.roster) {
      houses.appendChild(card(house.title, title, "Gameplay · commentary", () => openMp4(house.folder, file, title)));
    }
  }

  function openVp(id) {
    view = "stage";
    player.pause();
    player.removeAttribute("src");
    player.querySelectorAll("track").forEach((t) => t.remove());
    player.classList.add("hidden");
    stage.classList.remove("hidden");
    stage.src = `${VP}/${id}/`;
    lobby.classList.add("hidden");
    wrap.classList.remove("hidden");
    back.textContent = "← Lobby";
  }

  function openMp4(folder, stem, title) {
    view = "stage";
    stage.src = "about:blank";
    stage.classList.add("hidden");
    player.querySelectorAll("track").forEach((t) => t.remove());
    const base = `${FORSAKEN}/${folder}/${stem}`;
    player.src = `${base}.mp4`;
    const track = document.createElement("track");
    track.kind = "subtitles";
    track.label = "English";
    track.srclang = "en";
    track.src = `${base}.en.vtt`;
    player.appendChild(track);
    player.classList.remove("hidden");
    player.play().catch(() => {});
    lobby.classList.add("hidden");
    wrap.classList.remove("hidden");
    back.textContent = `← ${title}`;
  }

  function closeStage() {
    stage.src = "about:blank";
    player.pause();
    player.removeAttribute("src");
    player.querySelectorAll("track").forEach((t) => t.remove());
    wrap.classList.add("hidden");
    lobby.classList.remove("hidden");
    if (activeHouse) renderRoster(activeHouse);
    else renderLobby();
  }

  back.addEventListener("click", () => {
    if (view === "stage" && activeHouse) {
      closeStage();
      return;
    }
    if (view === "roster") {
      renderLobby();
      return;
    }
    closeStage();
  });
  lobbyBack.addEventListener("click", renderLobby);

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (view === "stage") closeStage();
    else if (view === "roster") renderLobby();
  });

  renderLobby();
})();
