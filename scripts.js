// Function to update player ratings in database
function updateRatings(player1, player2, winner) {
// Connect to database and retrieve player ratings
let player1Rating = getPlayerRatingFromDB(player1);
let player2Rating = getPlayerRatingFromDB(player2);

// Determine higher and lower rated players
let higherRatedPlayer, lowerRatedPlayer;
if (player1Rating > player2Rating) {
higherRatedPlayer = player1Rating;
lowerRatedPlayer = player2Rating;
} else {
higherRatedPlayer = player2Rating;
lowerRatedPlayer = player1Rating;
}

// Determine if higher rated player won the match
let higherRatedPlayerWins;
if (winner === "player1" && higherRatedPlayer === player1Rating) {
higherRatedPlayerWins = true;
} else if (winner === "player2" && higherRatedPlayer === player2Rating) {
higherRatedPlayerWins = true;
} else {
higherRatedPlayerWins = false;
}

// Calculate rating changes
let newRatings = calculateRatingChange(higherRatedPlayer, lowerRatedPlayer, higherRatedPlayerWins);

// Update player ratings in database
updatePlayerRatingInDB(player1, newRatings[0]);
updatePlayerRatingInDB(player2, newRatings[1]);

// Update player ratings on page
document.getElementById("player1-rating").innerHTML = "Rating de Jugador 1: " + newRatings[0];
document.getElementById("player2-rating").innerHTML = "Rating de Jugador 2: " + newRatings[1];
}
// Form submission event listener
document.getElementById("rating-form").addEventListener("submit", function(event) {
event.preventDefault();
// Get form values
let player1 = document.getElementById("player1").value;
let player2 = document.getElementById("player2").value;
let winner = document.getElementById("winner").value;
// Update player ratings in database
updateRatings(player1, player2, winner);
});
