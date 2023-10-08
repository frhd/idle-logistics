// script.js
let money = 0;
let deliveryCost = 1;
let deliveryReward = 2;

function startDelivery() {
    if (money >= deliveryCost) {
        money += deliveryReward - deliveryCost;
        updateStatusDisplay();
    } else {
        alert("Not enough money for delivery!");
    }
}

function purchaseUpgrade() {
    if (money >= 5) {
        deliveryReward += 2;
        money -= 5;
        updateStatusDisplay();
    } else {
        alert("Not enough money for upgrade!");
    }
}

function updateStatusDisplay() {
    document.getElementById("status-display").innerHTML = `Money: $${money}<br>Delivery Reward: $${deliveryReward}`;
}

// Initial status update
updateStatusDisplay();
