class Player {
    constructor() {
        this.index = null;  // Player's unique identifier
        this.distance = 0;  // Player's distance from a reference point (if applicable)
        this.name = null;   // Player's name
        this.score = 0;    // Player's score

    }

    getCount() {
        // Get the total count of players from the database
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        // Update the count of players in the database
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        // Update player-specific information in the database
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
         // Get information about all players from the database
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    
}
