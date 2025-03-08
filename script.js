// script.js
const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");

let snakeBody = [{ x: 200, y: 200 }]; // Snake body parts
let foodPosition = { x: 100, y: 100 };
let direction = { x: 0, y: 0 }; // Snake movement direction
let score = 0;

// Move food to a random position
function moveFood() {
  foodPosition.x = Math.floor(Math.random() * 19) * 20; // Align with grid
  foodPosition.y = Math.floor(Math.random() * 19) * 20;
  document.getElementById("food").style.left = foodPosition.x + "px";
  document.getElementById("food").style.top = foodPosition.y + "px";
}

// Update the snake's position and check game logic
function updateGame() {
  // Move the snake
  const head = { x: snakeBody[0].x + direction.x, y: snakeBody[0].y + direction.y };

  // Check if the snake hits the border
  if (head.x < 0 || head.y < 0 || head.x >= 400 || head.y >= 400) {
    alert(`Game Over! Your Score: ${score}`);
    resetGame();
    return;
  }

  // Check if the snake eats the food
  if (head.x === foodPosition.x && head.y === foodPosition.y) {
    score++;
    scoreDisplay.textContent = "Score: " + score;
    moveFood();
  } else {
    // Remove the last part of the snake if it doesn't grow
    snakeBody.pop();
  }

  // Add the new head to the snake
  snakeBody.unshift(head);

  // Update the snake's appearance
  renderSnake();
}

// Render the snake on the screen
function renderSnake() {
  const snakeElements = document.querySelectorAll(".snake-part");
  snakeElements.forEach((part) => part.remove());

  snakeBody.forEach((segment) => {
    const part = document.createElement("div");
    part.style.position = "absolute";
    part.style.width = "20px";
    part.style.height = "20px";
    part.style.backgroundColor = "#27ae60";
    part.style.border = "2px solid #16a085";
    part.style.left = segment.x + "px";
    part.style.top = segment.y + "px";
    part.classList.add("snake-part");
    gameArea.appendChild(part);
  });
}

// Reset the game
function resetGame() {
  snakeBody = [{ x: 200, y: 200 }];
  direction = { x: 0, y: 0 };
  score = 0;
  scoreDisplay.textContent = "Score: 0";
  moveFood();
}

// Listen for arrow key inputs
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" && direction.y === 0) {
    direction = { x: 0, y: -20 };
  } else if (e.key === "ArrowDown" && direction.y === 0) {
    direction = { x: 0, y: 20 };
  } else if (e.key === "ArrowLeft" && direction.x === 0) {
    direction = { x: -20, y: 0 };
  } else if (e.key === "ArrowRight" && direction.x === 0) {
    direction = { x: 20, y: 0 };
  }
});

// Initialize the game
moveFood();
setInterval(updateGame, 150);
function moveFood() {
  const food = document.getElementById("food");

  // Randomly position the food
  foodPosition.x = Math.floor(Math.random() * 19) * 20; // Align with grid
  foodPosition.y = Math.floor(Math.random() * 19) * 20;
  food.style.left = foodPosition.x + "px";
  food.style.top = foodPosition.y + "px";

  // Add a visual effect (scale animation)
  food.classList.add("eat-effect");
  setTimeout(() => food.classList.remove("eat-effect"), 300);
}
// Generate a random gradient color
function getRandomGradient() {
  const colors = [
    ["#ff7e5f", "#feb47b"],
    ["#6a11cb", "#2575fc"],
    ["#43cea2", "#185a9d"],
    ["#ff512f", "#dd2476"],
    ["#1f4037", "#99f2c8"],
    ["#2c3e50", "#fd746c"],
    ["#1d4350", "#a43931"],
  ];
  const gradient = colors[Math.floor(Math.random() * colors.length)];
  return `linear-gradient(145deg, ${gradient[0]}, ${gradient[1]})`;
}

// Move food to a random position with random color
function moveFood() {
  const food = document.getElementById("food");

  // Random position
  foodPosition.x = Math.floor(Math.random() * 19) * 20; // Align with grid
  foodPosition.y = Math.floor(Math.random() * 19) * 20;
  food.style.left = foodPosition.x + "px";
  food.style.top = foodPosition.y + "px";

  // Assign random gradient color
  food.style.background = getRandomGradient();

  // Add hover effect (glow)
  food.classList.add("food-hover");
  setTimeout(() => food.classList.remove("food-hover"), 100);
}
// Render the snake on the screen
function renderSnake() {
  const snakeElements = document.querySelectorAll(".snake-part, .snake-head");
  snakeElements.forEach((part) => part.remove());

  snakeBody.forEach((segment, index) => {
    const part = document.createElement("div");
    part.style.position = "absolute";
    part.style.width = "20px";
    part.style.height = "20px";
    part.style.backgroundColor = "#27ae60";  // Default snake body color
    part.style.border = "2px solid #16a085";  // Snake scale border
    part.style.borderRadius = "50%";  // Circular shape

    // If it's the head, add eyes and special styles
    if (index === 0) {
      part.classList.add("snake-head");
      
      // Add eyes to the snake's head
      const leftEye = document.createElement("div");
      const rightEye = document.createElement("div");

      leftEye.style.position = "absolute";
      rightEye.style.position = "absolute";
      leftEye.style.width = "5px";
      leftEye.style.height = "5px";
      rightEye.style.width = "5px";
      rightEye.style.height = "5px";
      leftEye.style.backgroundColor = "#fff";  // White for eyes
      rightEye.style.backgroundColor = "#fff";  // White for eyes
      leftEye.style.borderRadius = "50%";
      rightEye.style.borderRadius = "50%";

      // Positioning the eyes on the head
      leftEye.style.top = "5px";
      leftEye.style.left = "4px";  // Left eye
      rightEye.style.top = "5px";
      rightEye.style.right = "4px";  // Right eye

      part.appendChild(leftEye);
      part.appendChild(rightEye);
    } else {
      part.classList.add("snake-part");
    }

    part.style.left = segment.x + "px";
    part.style.top = segment.y + "px";

    gameArea.appendChild(part);
  });
}
// Render the snake on the screen
function renderSnake() {
  const snakeElements = document.querySelectorAll(".snake-part, .snake-head");
  snakeElements.forEach((part) => part.remove());

  snakeBody.forEach((segment, index) => {
    const part = document.createElement("div");
    part.style.position = "absolute";
    part.style.width = "20px";
    part.style.height = "20px";
    part.style.backgroundColor = "#27ae60";  // Default snake body color
    part.style.border = "2px solid #16a085";  // Snake scale border
    part.style.borderRadius = "50%";  // Circular shape

    // If it's the head, add eyes, tongue, and special styles
    if (index === 0) {
      part.classList.add("snake-head");
      
      // Add eyes to the snake's head
      const leftEye = document.createElement("div");
      const rightEye = document.createElement("div");

      leftEye.style.position = "absolute";
      rightEye.style.position = "absolute";
      leftEye.style.width = "5px";
      leftEye.style.height = "5px";
      rightEye.style.width = "5px";
      rightEye.style.height = "5px";
      leftEye.style.backgroundColor = "#fff";  // White for eyes
      rightEye.style.backgroundColor = "#fff";  // White for eyes
      leftEye.style.borderRadius = "50%";
      rightEye.style.borderRadius = "50%";

      // Positioning the eyes on the head
      leftEye.style.top = "5px";
      leftEye.style.left = "4px";  // Left eye
      rightEye.style.top = "5px";
      rightEye.style.right = "4px";  // Right eye

      part.appendChild(leftEye);
      part.appendChild(rightEye);

      // Add red tongue to the snake's head
      const tongue = document.createElement("div");
      tongue.style.position = "absolute";
      tongue.style.width = "8px";  // Width of the tongue
      tongue.style.height = "10px"; // Height of the tongue
      tongue.style.backgroundColor = "#e74c3c";  // Red color for the tongue
      tongue.style.transform = "rotate(45deg)";  // Rotate to make it a tongue-like shape
      tongue.style.left = "6px";  // Position the tongue a bit below the eyes
      tongue.style.top = "14px";  // Position the tongue below the eyes

      part.appendChild(tongue);
    } else {
      part.classList.add("snake-part");
    }

    part.style.left = segment.x + "px";
    part.style.top = segment.y + "px";

    gameArea.appendChild(part);
  });
}

