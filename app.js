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

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.97622582608!2d-66.64156790551854!3d45.94876876930392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca4220efd3cc45b%3A0x64f17146ff9984f2!2sUNB%20Faculty%20of%20Computer%20Science!5e0!3m2!1sen!2sca!4v1771893364977!5m2!1sen!2sca" 
            width="600" 
            height="450" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>

            <button onclick="renderCurrentScreen()">Back</button>
        </div>
    `;
}

renderCurrentScreen();