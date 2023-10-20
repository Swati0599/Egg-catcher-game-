var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var player_img;
var player1score =0;
var player2score =0;
var plank,plank_img;
var chicken1,chicken2,chicken3,chicken4,chicken5,chicken_img;
var egg,egg_img,eggGroup;

function preload(){
  back_img = loadImage("Assets/background1.jpg");
  player_img = loadImage("Assets/Basket.png");
  plank_img = loadImage("Assets/log.png")
  chicken_img = loadImage("Assets/Chicken.png");
  egg_img =loadImage("Assets/Egg.png");
  eggGroup = new Group();
}

function setup() {
  createCanvas(1000, 600); // Create a canvas for the game
  database = firebase.database(); // Initialize the database connection
  game = new Game(); // Create a game object
  game.getState(); // Get the current game state from the database
  game.start(); // Start the game
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);// If there are 2 players, update the game state to 1 (playing)
   }
   if (gameState === 1) {
    clear(); // Clear the canvas
    game.play(); // Start the game
   }
   if (gameState === 2) {
    game.end(); // If the game state is 2, end the game
   }
}