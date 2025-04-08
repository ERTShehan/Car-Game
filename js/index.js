let game = {
  score: 0,
  level: 1,
  speed: 5,
  roadSpeed: 5,
  isRunning: false,
  scoreInterval: null,
};

function PlayerCar(selector) {
  this.$el = $(selector);
  this.moveLeft = () => {
    let pos = this.$el.position().left;
    if (pos > 0) this.$el.css("left", pos - 10);
  };
  this.moveRight = () => {
    let pos = this.$el.position().left;
    if (pos < 350) this.$el.css("left", pos + 10);
  };
  this.moveUp = () => {
    let pos = this.$el.position().top;
    if (pos > 0) this.$el.css("top", pos - 10);
  };
  this.moveDown = () => {
    let pos = this.$el.position().top;
    if (pos < 500) this.$el.css("top", pos + 10);
  };
}

function SystemCar(selector) {
  this.$el = $(selector);
  this.reset = () => {
    let left = Math.floor(Math.random() * 350);
    this.$el.css({ top: -120, left: left });
  };
  this.move = () => {
    let top = this.$el.position().top;
    if (top > 600) {
      this.reset();
    } else {
      this.$el.css("top", top + game.speed);
    }
  };
}

function animateRoad() {
  let road1 = $("#road1");
  let road2 = $("#road2");
  
  let road1Pos = road1.position().top;
  let road2Pos = road2.position().top;
  
  road1.css("top", road1Pos + game.roadSpeed);
  road2.css("top", road2Pos + game.roadSpeed);
  
  if (road1Pos > 600) {
    road1.css("top", -600);
  }
  if (road2Pos > 600) {
    road2.css("top", -600);
  }
}

$(function () {
  let player = new PlayerCar("#playerCar");
  let systemCar = new SystemCar("#systemCar");

  $("#startButton").click(function () {
    $("#startScreen").hide();
    game.isRunning = true;
    game.score = 0;
    game.level = 1;
    game.speed = 5;
    game.roadSpeed = 5;
    $("#score").text(game.score);
    $("#level").text(game.level);

    game.scoreInterval = setInterval(function () {
      game.score += 1;
      $("#score").text(game.score);

      if (game.score % 200 === 0) {
        game.level++;
        game.speed += 1;
        game.roadSpeed += 1;
        $("#level").text(game.level);
      }
    }, 100);

    systemCar.reset();
    gameLoop();
  });

  $(document).on("keydown", function (e) {
    if (!game.isRunning) return;
    if (e.key === "ArrowLeft") player.moveLeft();
    if (e.key === "ArrowRight") player.moveRight();
    if (e.key === "ArrowUp") player.moveUp();
    if (e.key === "ArrowDown") player.moveDown();
    if (e.key === "Escape") {
      game.isRunning = false;
      clearInterval(game.scoreInterval);
      alert("Game Paused! Press OK to continue.");
      game.isRunning = true;
      game.scoreInterval = setInterval(function () {
        game.score += 1;
        $("#score").text(game.score);
      }, 100);
    }
  });

  function checkCollision() {
    let p = $("#playerCar");
    let s = $("#systemCar");
    let pPos = p.position();
    let sPos = s.position();

    return !(
      pPos.top + p.height() < sPos.top ||
      pPos.top > sPos.top + s.height() ||
      pPos.left + p.width() < sPos.left ||
      pPos.left > sPos.left + s.width()
    );
  }

  function gameLoop() {
    if (!game.isRunning) return;
    systemCar.move();
    animateRoad();

    if (checkCollision()) {
      game.isRunning = false;
      clearInterval(game.scoreInterval);
      alert("Game Over! Final Score: " + game.score);
      location.reload();
    } else {
      requestAnimationFrame(gameLoop);
    }
  }
});