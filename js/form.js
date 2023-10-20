class Form {
    constructor() {
      // Form elements
      Form.welcomeDisplayed = false;
      // Set the initial value as "Your Name"
      this.input = createInput("Your Name");
      this.button = createButton('Play');
      this.title = createElement('h2', "EGG CATCHER");
      // Welcome message
      this.welcome = createElement('h3', '');
      // Track if the form is displayed
      this.formDisplayed = true;
      // Set the maximum character limit
      let maxCharacterLimit = 10;
      // Add an input event handler to limit the character input
      this.input.input(this.limitInput.bind(this));
    }
  
    // Function to limit input to a maximum character count
    limitInput() {
      let value = this.input.value(); // Get the current input value
      let maxCharacterLimit = 10; // Set the maximum character limit
      if (value.length > maxCharacterLimit) {
        // If the length exceeds the limit, truncate the input text
        value = value.substring(0, maxCharacterLimit);
        this.input.value(value); // Update the input with the truncated value
      }
    }
  
    hide() {
      // Hide form elements
      this.button.hide();
      this.input.hide();
      this.title.hide();
      this.welcome.hide();
      this.formDisplayed = false;
    }
  
    display() {
      // Title
      this.title.html("EGG CATCHER"); // Use .html to change the text
      this.title.style('font-size', '70px');
      this.title.style("font-family", "Times New Roman");
      this.title.style('color', 'black');
      this.title.position(600, 200);
  
      // Input
      this.input.style('background', 'lavender');
      this.input.size(200, 30);
      this.input.style('border-radius', '10px');
      this.input.position(780, 390);
  
      // Label for character limit
      let characterLimitLabel = createP('Enter max 10 characters');
      characterLimitLabel.style('color', '#808080');
      characterLimitLabel.position(800, 425);
  
      // Button
      this.button.style('border-radius', '10px');
      this.button.size(100, 30);
      this.button.position(840, 470);
      this.button.style('background-color', 'brown');
  
      // Clear the input value when it receives focus
      this.input.mousePressed(() => {
        this.input.value('');
      });
  
      // Callback when the button is pressed
      this.button.mousePressed(() => {
        this.input.hide();
        this.button.hide();
        this.title.hide();
        characterLimitLabel.hide();
        player.name = this.input.value();
        playerCount += 1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.welcome.html("Welcome " + player.name);
        this.welcome.position(800, 200);
        this.welcome.style('color', 'black');
        this.welcome.style('font-size', '30px');
      });
    }
  }
  