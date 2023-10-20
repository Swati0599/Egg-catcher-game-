let chickenXPositions = [200, 400, 600, 800];
let chickenFrameCounts = [20, 30, 50, 60];
let chickens = [];
let eggXPositions = [200, 400, 600, 800];

function assignRandomFrameCounts() {
    for (let i = 0; i < 4; i++) {
       // Assign a random frame count between 20 and 60 for each chicken
      chickenFrameCounts[i] = Math.round(random(20, 60)); 
    }
  }

class Game{
    constructor(){
        // Constructor for the Game class

    }
    getState() {
        // Retrieve game state from the database
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        // Update the game state in the database
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
        // Start the game
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    
    plank = createSprite(500,160,1000,10)   
    plank.shapeColor="#964B00"

    //plank.addImage(plank_img);
    //plank.scale=0.5

    /*chicken1 = createSprite(800,120,10,10)
    chicken1.addImage(chicken_img)
    chicken1.scale = 0.5

    chicken2 = createSprite(600,120,10,10)
    chicken2.addImage(chicken_img)
    chicken2.scale = 0.5

    chicken3 = createSprite(400,120,10,10)
    chicken3.addImage(chicken_img)
    chicken3.scale = 0.5

    chicken4 = createSprite(200,120,10,10)
    chicken4.addImage(chicken_img)
    chicken4.scale = 0.5*/

    // Add other game elements (chickens, players, etc.) here
    for (let i = 0; i < 4; i++) {
        let chicken = createSprite(chickenXPositions[i], 120, 10, 10);
        chicken.addImage(chicken_img);
        chicken.scale = 0.5;
        // Add the chicken sprite to the array
        chickens.push(chicken); 
      }



    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    //player1.debug=true
    player1.setCollider("rectangle",0,0,150,100)
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    player2.setCollider("rectangle",0,0,150,100)

    players=[player1,player2];

        }
    
    play(){
                // Main game loop
                form.hide();
                assignRandomFrameCounts()
                 // Other game logic
                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                        fill("black");
                        textSize(25);
                        textFont("cursive"); // Change the font family here
                        text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
                         textSize(25);
                         fill("white");
                         text("Player 1 :" +allPlayers.player1.score,50,50);
                         text("Player 2 :" + allPlayers.player2.score, 50, 100);
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                for (let i = 0; i < 4; i++) {
                    if (frameCount % chickenFrameCounts[i] === 0) {
                        // Create eggs for each chicken based on their frame count
                        let egg = createSprite(eggXPositions[i], 150, 10, 10);
                        egg.addImage(egg_img);
                        egg.scale = 0.5;
                        // Set the vertical velocity as per your requirements
                        egg.velocityY = 6; 
                        eggGroup.add(egg);
                    }
                  }
                 
                  if (player.index !== null) {
                      for (var i = 0; i < eggGroup.length; i++) {
                          if (eggGroup.get(i).isTouching(players)) {
                              eggGroup.get(i).destroy();
                              player.score =player.score+1;
                              player.update();
                              
                          }
                          
                      }
                  }   

    }

    end(){
       console.log("Game Ended");
    }
}