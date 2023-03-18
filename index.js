function markAllRead() {
    // Obtaining all cards
    const notificationCards = [...document.querySelectorAll(".notifications-card")];
    notificationCards.forEach(card => {
        // Changing all cards
        const cardBadge = card.querySelector(".badge");

        card.classList.add("notifications-card--read");

        // Not all cards have bagdes, using optional chaining
        cardBadge?.classList.add("not-show");
    });

    notificationCounter.innerText = 0;
}

function countNotifications() {
    // Changing notifications
    notificationCounter.innerText = [...document.querySelectorAll(".notifications-card .badge")].length;
}

function markNotificationRead(event) {
    const card = event.target.closest(".notifications-card");
    const badge = card.querySelector(".badge");

    card.classList.add("notifications-card--read");
    // Not all cards have bagdes, using optional chaining
    badge?.classList.add("not-show");

    const currentNotifications = Number(notificationCounter.innerText);

    // The card has a badge to remove
    if (currentNotifications > 0 && badge) {
        notificationCounter.innerText = currentNotifications - 1;
    }
}

const btnAllRead = document.querySelector(".notifications-bar p");
const notificationMarkers = [...document.querySelectorAll(".notifications-card .notification__person")];
let notificationCounter = document.querySelector(".notifications-bar .notifications div");



btnAllRead.addEventListener("click", markAllRead);
notificationMarkers.forEach(marker => {
    marker.addEventListener("click", markNotificationRead);
});

// Setting notifications for first time
countNotifications();