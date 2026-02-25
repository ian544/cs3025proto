let currentScreen = 0;

const screens = [
    { render: renderHome, icon: "🏠" },
    { render: renderFindRoom, icon: "🔎" },
    { render: renderAnnouncements, icon: "📢" },
    { render: renderFAQ, icon: "❓" }
];

function nextScreen() {
    currentScreen = (currentScreen + 1) % screens.length;
    renderCurrentScreen();
}

function prevScreen() {
    currentScreen = (currentScreen - 1 + screens.length) % screens.length;
    renderCurrentScreen();
}

function renderCurrentScreen() {
    const screen = screens[currentScreen];

    screen.render();
    updateIndicator(screen.icon);
}

function updateIndicator(icon) {
    document.getElementById("screen-indicator").innerText = icon;
}

function renderHome() {
    document.getElementById("screen-container").innerHTML = `
        <div class="home-screen">
            <h1>Welcome</h1>
            <h2>${new Date().toLocaleTimeString()}</h2>
            <div class="map-wrapper">
                <img src="assets/maps/ITCFloorPlain.png" class="map-image">
            </div>
        </div>
    `;
    
}

function getRoomIcon(type) {
    switch(type) {
        case "Faculty Office": return "👨‍🏫";
        case "Classroom": return "📚";
        case "Washroom": return "🚻";
        default: return "📍";
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
                <span>❓ ${faq.question}</span>
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
    renderFindRoom();
}

let bannerIndex = 0;

function rotateBanner() {

    const banner = document.getElementById("announcement-banner");

    if (!banner || announcements.length === 0) return;

    banner.style.opacity = 0;

    setTimeout(() => {
        banner.innerText = announcements[bannerIndex].title;
        banner.style.opacity = 1;
    }, 600);

    bannerIndex = (bannerIndex + 1) % announcements.length;
}

setInterval(rotateBanner, 8000);
rotateBanner();

let activeFilter = "All";

function applyFilters() {

    const searchInput = document.getElementById("room-search");

    const query = searchInput
        ? searchInput.value.toLowerCase()
        : "";

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

            <div class="room-icon">${getRoomIcon(room.type)}</div>

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

    // Highlight default filter
    document.querySelector(".filter-button").classList.add("active");

    applyFilters();
}

renderCurrentScreen();