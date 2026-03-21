let currentScreen = 0;

const screens = [
  { render: renderHome,          iconFile: "2.png", alt: "Home" },
  { render: renderFindRoom,      iconFile: "3.png", alt: "Find Room" },
  { render: renderAnnouncements, iconFile: "1.png", alt: "Announcements" },
  { render: renderFAQ,           iconFile: "4.png", alt: "FAQ" }
];

function goToScreen(index) {
  currentScreen = index;
  renderCurrentScreen();
}

function updateMenuActive() {
  for (let i = 0; i < screens.length; i++) {
    const btn = document.getElementById(`menu-${i}`);
    if (!btn) continue;
    btn.classList.toggle("active", i === currentScreen);
  }
}

function renderCurrentScreen() {
  const screen = screens[currentScreen];
  screen.render();
  updateMenuActive();
}

let currentFloorIndex = 0;

const floors = [
  { name: "C", src: "assets/maps/ITCFloorPlain.png" },
  { name: "D", src: "assets/maps/ITDFloorPlain3.png" } // <-- change to your real D-floor filename
];

function changeFloor(direction) {
  currentFloorIndex = (currentFloorIndex + direction + floors.length) % floors.length;

  const mapImg = document.getElementById("home-map-image");
  const label = document.getElementById("floor-label");

  if (mapImg) mapImg.src = floors[currentFloorIndex].src;
  if (label) label.innerText = `Floor ${floors[currentFloorIndex].name}`;
}

function renderHome() {
  const floor = floors[currentFloorIndex];

  document.getElementById("screen-container").innerHTML = `
    <div class="home-screen">
      <h1>Welcome</h1>
      <h2>${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</h2>

      <div class="home-map-wrap">
        <img id="home-map-image" src="${floor.src}" class="map-image" alt="Floor Map">

        <div class="floor-controls">
          <div class="floor-label" id="floor-label">Floor ${floor.name}</div> 
            <button class="floor-btn" onclick="changeFloor(1)">
            <img class="floor-icon" src="img/11.png" alt="Up floor">
            </button>
            <button class="floor-btn" onclick="changeFloor(-1)">
            <img class="floor-icon" src="img/10.png" alt="Down floor">
            </button>
        </div>
      </div>
    </div>
  `;
}

function getRoomIconFile(type) {
  switch (type) {
    case "Faculty Office": return "6.png";
    case "Classroom":      return "5.png";
    case "Washroom":       return "7.png";
    default:               return "4.png";
  }
}

function renderAnnouncements() {
  const announcementList = announcements.map((a, index) => `
    <div class="announcement-card" onclick="toggleAnnouncement(${index})">
      <div class="announcement-header">
        <div>
          <div class="announcement-title">${a.title}</div>
          <div class="announcement-time">${a.time}</div>
        </div>
        <div class="announcement-arrow">▼</div>
      </div>

      <div class="announcement-details" id="announcement-${index}">
        ${a.description}
      </div>
    </div>
  `).join("");

  document.getElementById("screen-container").innerHTML = `
    <div class="announcement-list">
      <h1>Announcements</h1>
      ${announcementList}
    </div>
  `;
}

function toggleAnnouncement(index) {
  const details = document.getElementById(`announcement-${index}`);
  details.classList.toggle("announcement-visible");
}

function renderFAQ() {
  const faqList = faqs.map((faq, index) => `
    <div class="faq-card" onclick="toggleFAQ(${index})">
      <div class="faq-question">
        <span class="faq-question-left">
          <img class="ui-icon faq-icon" src="img/4.png" alt="FAQ">
          ${faq.question}
        </span>
        <span class="faq-arrow">▼</span>
      </div>

      <div class="faq-answer" id="faq-${index}">
        ${faq.answer}
      </div>
    </div>
  `).join("");

  document.getElementById("screen-container").innerHTML = `
    <div class="faq-list">
      <h1>Frequently Asked Questions</h1>
      ${faqList}
    </div>
  `;
}

function toggleFAQ(index) {
  const answer = document.getElementById(`faq-${index}`);
  answer.classList.toggle("faq-visible");
}

function showDirections(roomId) {
  const imagePath = `assets/maps/${roomId}.png`;

  document.getElementById("screen-container").innerHTML = `
    <div class="directions-screen">
      <h1>Directions to ${roomId}</h1>
      <img src="${imagePath}" class="directions-map">
      <button onclick="goBack()">Back</button>
    </div>
  `;
}

function goBack() {
  // Go back to Find Room tab
  goToScreen(1);
}

let bannerIndex = 0;

function rotateBanner() {
  const titleEl = document.getElementById("banner-title");
  const banner = document.getElementById("announcement-banner");

  if (!banner || !titleEl || announcements.length === 0) return;

  banner.style.opacity = 0;

  setTimeout(() => {
    titleEl.innerText = announcements[bannerIndex].title;
    banner.style.opacity = 1;
  }, 600);

  bannerIndex = (bannerIndex + 1) % announcements.length;
}
setInterval(rotateBanner, 8000);
rotateBanner();

let activeFilter = "All";

function resetFindRoomState() {
  activeFilter = "All";

  const searchInput = document.getElementById("room-search");
  if (searchInput) searchInput.value = "";

  document.querySelectorAll(".filter-button")
    .forEach(btn => btn.classList.remove("active"));

  const firstBtn = document.querySelector(".filter-button");
  if (firstBtn) firstBtn.classList.add("active");

  renderRoomResults(rooms);
}

function applyFilters() {
  const searchInput = document.getElementById("room-search");
  const query = searchInput ? searchInput.value.toLowerCase() : "";

  const filteredRooms = rooms.filter(room => {
    const matchesSearch =
      room.id.toLowerCase().includes(query) ||
      (room.owner && room.owner.toLowerCase().includes(query));

    const matchesType =
      activeFilter === "All" || room.type === activeFilter;

    return matchesSearch && matchesType;
  });

  renderRoomResults(filteredRooms);
}

function setFilter(filter, buttonElement) {
  activeFilter = filter;

  document.querySelectorAll(".filter-button")
    .forEach(btn => btn.classList.remove("active"));

  if (buttonElement) {
    buttonElement.classList.add("active");
  }

  applyFilters();
}

function renderRoomResults(roomList) {
  const resultsContainer = document.getElementById("room-results");
  if (!resultsContainer) return;

  const resultsHTML = roomList.map(room => `
    <div class="room-card" onclick="showDirections('${room.id}')">
      <div class="room-icon">
        <img class="ui-icon room-icon-img" src="img/${getRoomIconFile(room.type)}" alt="${room.type}">
      </div>

      <div class="room-info">
        <div class="room-title">${room.id}</div>
        <div class="room-type">${room.type}</div>
        <div class="room-owner">
          ${room.owner ? room.owner : ""}
        </div>
      </div>
    </div>
  `).join("");

  resultsContainer.innerHTML =
    resultsHTML || `<p class="no-results">No rooms found</p>`;
}

function renderFindRoom() {
  document.getElementById("screen-container").innerHTML = `
    <div class="room-list">
      <h1>Find a Room</h1>

      <input 
        type="text"
        id="room-search"
        placeholder="Search room or instructor..."
        oninput="applyFilters()"
        class="search-bar"
      >

      <div class="filter-controls">
        <button class="filter-button" onclick="setFilter('All', this)">All</button>
        <button class="filter-button" onclick="setFilter('Faculty Office', this)">Offices</button>
        <button class="filter-button" onclick="setFilter('Classroom', this)">Classrooms</button>
        <button class="filter-button" onclick="setFilter('Washroom', this)">Washrooms</button>
      </div>

      <div id="room-results"></div>
    </div>
  `;

  // kiosk-style reset whenever you enter Find Room
  resetFindRoomState();
}

renderCurrentScreen();