let currentScreen = 0;

const screens = [
    { render: renderHome, icon: "🏠" },
    { render: renderFindRoom, icon: "🔎" },
    { render: renderAnnouncements, icon: "📢" }
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
        </div>
    `;
}

function renderFindRoom() {
    const roomList = rooms.map(r => `
        <div class="room-item" onclick="showDirections('${r.id}')">
            ${r.id}
        </div>
    `).join("");

    document.getElementById("screen-container").innerHTML = `
        <div>
            <h1>Find a Room</h1>
            ${roomList}
        </div>
    `;
}

function renderAnnouncements() {
    const content = announcements.map(a => `
        <div class="card">
            <h2>${a.title}</h2>
            <p>${a.time}</p>
            <p>${a.description}</p>
        </div>
    `).join("");

    document.getElementById("screen-container").innerHTML = content;
}

function showDirections(roomId) {
    document.getElementById("screen-container").innerHTML = `
        <div>
            <h1>Directions to ${roomId}</h1>

            <iframe
                width="500"
                height="400"
                style="border:0"
                loading="lazy"
                allowfullscreen
                src="https://www.google.com/maps?q=UNB+Fredericton&output=embed">
            </iframe>

            <p>Turn left, then proceed straight</p>

            <button onclick="renderCurrentScreen()">Back</button>
        </div>
    `;
}

renderCurrentScreen();