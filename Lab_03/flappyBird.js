const cvs = document.getElementById("bird-canvas");
const ctx = cvs.getContext("2d");

let frames = 0;
const DEGREE = Math.PI / 180;

const sprite = new Image();
const bgImg = new Image();
bgImg.src = "assets/background-day.png";
const fgImg = new Image();
fgImg.src = "assets/base.png";
const birdDown = new Image();
birdDown.src = "assets/yellowbird-downflap.png";
const birdMid = new Image();
birdMid.src = "assets/yellowbird-midflap.png";
const birdUp = new Image();
birdUp.src = "assets/yellowbird-upflap.png";
const pipeNorth = new Image();
pipeNorth.src = "assets/pipe-green.png";
const pipeSouth = new Image();
pipeSouth.src = "assets/pipe-green.png";
const gameOverImg = new Image();
gameOverImg.src = "assets/gameover.png";
const messageImg = new Image();
messageImg.src = "assets/message.png";

const scoreImages = [];
for (let i = 0; i < 10; i++) {
  scoreImages[i] = new Image();
  scoreImages[i].src = `assets/${i}.png`;
}

const SCORE_S = new Audio("assets/point.ogg");
const FLAP_S = new Audio("assets/wing.ogg");
const HIT_S = new Audio("assets/hit.wav");
const DIE_S = new Audio("assets/die.wav");

const state = {
  current: 0,
  getReady: 0,
  game: 1,
  falling: 2,
  over: 3,
};

const startBtn = document.getElementById("restart-btn");
const gameOverScreen = document.getElementById("game-over-screen");
const highScoreList = document.getElementById("high-score-list");

document.addEventListener("keydown", function (evt) {
  if (evt.code === "Space") {
    switch (state.current) {
      case state.getReady:
        state.current = state.game;
        break;
      case state.game:
        bird.flap();
        break;
      case state.over:
        resetGame();
        break;
    }
  }
});

startBtn.addEventListener("click", resetGame);

function resetGame() {
  bird.speed = 0;
  bird.rotation = 0;
  pipes.position = [];
  score.value = 0;
  frames = 0;
  state.current = state.getReady;
  gameOverScreen.classList.add("hidden");
}

const bg = {
  x: 0,
  y: 0,
  w: 320,
  h: 480,
  draw: function () {
    ctx.drawImage(bgImg, this.x, this.y, this.w, this.h);
  },
};

const fg = {
  x: 0,
  y: cvs.height - 112,
  w: 336,
  h: 112,
  dx: 2,
  draw: function () {
    ctx.drawImage(fgImg, this.x, this.y, this.w, this.h);
    ctx.drawImage(fgImg, this.x + this.w, this.y, this.w, this.h);
  },
  update: function () {
    if (state.current === state.game) {
      this.x = (this.x - this.dx) % (this.w / 2);
    }
  },
};

const bird = {
  animation: [birdDown, birdMid, birdUp, birdMid],
  x: 50,
  y: 150,
  w: 34,
  h: 24,
  frame: 0,
  speed: 0,
  gravity: 0.25,
  jump: 4.6,
  rotation: 0,
  radius: 12,

  draw: function () {
    let birdSprite = this.animation[this.frame];

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.drawImage(birdSprite, -this.w / 2, -this.h / 2, this.w, this.h);
    ctx.restore();
  },

  flap: function () {
    this.speed = -this.jump;
    this.rotation = -25 * DEGREE;
    FLAP_S.currentTime = 0;
    FLAP_S.play();
  },

  update: function () {
    const period = state.current === state.getReady ? 10 : 5;
    this.frame += frames % period === 0 ? 1 : 0;
    this.frame = this.frame % this.animation.length;

    if (state.current === state.getReady) {
      this.y = 150;
      this.rotation = 0 * DEGREE;
    } else {
      this.speed += this.gravity;
      this.y += this.speed;

      if (this.y + this.h / 2 >= cvs.height - fg.h) {
        this.y = cvs.height - fg.h - this.h / 2;

        if (state.current === state.game) {
          state.current = state.over;
          DIE_S.play();
          showGameOver();
        } else if (state.current === state.falling) {
          state.current = state.over;
          DIE_S.play();
          showGameOver();
        }
      }

      if (this.speed >= this.jump) {
        this.rotation += 5 * DEGREE;
        if (state.current === state.falling) {
          this.rotation = 90 * DEGREE;
        } else {
          if (this.rotation >= 90 * DEGREE) this.rotation = 90 * DEGREE;
        }
      } else {
        this.rotation = -25 * DEGREE;
      }
    }
  },
};

const pipes = {
  position: [],
  w: 52,
  h: 320,
  gap: 110,
  dx: 2,
  maxYPos: -150,

  draw: function () {
    for (let i = 0; i < this.position.length; i++) {
      let p = this.position[i];
      let topY = p.y;
      let bottomY = p.y + this.h + this.gap;

      ctx.save();
      ctx.translate(p.x + this.w, topY + this.h);
      ctx.rotate(Math.PI);
      ctx.drawImage(pipeNorth, 0, 0, this.w, this.h);
      ctx.restore();

      ctx.drawImage(pipeSouth, p.x, bottomY, this.w, this.h);
    }
  },

  update: function () {
    if (state.current !== state.game) return;

    if (frames % 100 === 0) {
      this.position.push({
        x: cvs.width,
        y: this.maxYPos * (Math.random() + 1),
      });
    }

    for (let i = 0; i < this.position.length; i++) {
      let p = this.position[i];

      p.x -= this.dx;

      if (p.x + this.w <= 0) {
        this.position.shift();
        continue;
      }

      let bottomPipeY = p.y + this.h + this.gap;

      let birdLeft = bird.x - bird.w / 2 + 5;
      let birdRight = bird.x + bird.w / 2 - 5;
      let birdTop = bird.y - bird.h / 2 + 5;
      let birdBottom = bird.y + bird.h / 2 - 5;

      if (
        birdRight > p.x &&
        birdLeft < p.x + this.w &&
        (birdTop < p.y + this.h || birdBottom > bottomPipeY)
      ) {
        state.current = state.falling;
        HIT_S.play();
      }

      if (p.x + this.w < bird.x && !p.passed) {
        score.value += 1;
        p.passed = true;
        SCORE_S.currentTime = 0;
        SCORE_S.play();
        score.best = Math.max(score.value, score.best);
      }
    }
  },
};

const score = {
  best: localStorage.getItem("flappy_best") || 0,
  value: 0,

  draw: function () {
    ctx.fillStyle = "#FFF";
    ctx.strokeStyle = "#000";

    if (state.current === state.game || state.current === state.falling) {
      let scoreStr = this.value.toString();
      let totalWidth = 0;

      for (let char of scoreStr) {
        totalWidth += 24;
      }

      let currentX = cvs.width - totalWidth - 10;

      for (let char of scoreStr) {
        let imgIndex = parseInt(char);

        ctx.drawImage(scoreImages[imgIndex], currentX, 10);

        currentX += 24;
      }
    }
  },

  saveHighScore: function () {
    let highScores =
      JSON.parse(localStorage.getItem("flappy_highscores")) || [];

    highScores.push(this.value);
    highScores.sort((a, b) => b - a);
    highScores = highScores.slice(0, 5);

    localStorage.setItem("flappy_highscores", JSON.stringify(highScores));
    localStorage.setItem("flappy_best", highScores[0]);
    this.best = highScores[0];

    return highScores;
  },
};

const message = {
  draw: function () {
    if (state.current === state.getReady) {
      ctx.drawImage(messageImg, cvs.width / 2 - 92, cvs.height / 2 - 133);
    }
  },
};

const gameOverMsg = {
  draw: function () {
    if (state.current === state.over) {
      ctx.drawImage(gameOverImg, cvs.width / 2 - 96, 80);
    }
  },
};

function showGameOver() {
  score.saveHighScore();

  const currentScoreEl = document.getElementById("current-score-display");
  const bestScoreEl = document.getElementById("best-score-display");

  currentScoreEl.innerText = score.value;
  bestScoreEl.innerText = score.best;

  gameOverScreen.classList.remove("hidden");
}

function draw() {
  ctx.fillStyle = "#70c5ce";
  ctx.fillRect(0, 0, cvs.width, cvs.height);

  bg.draw();
  pipes.draw();
  fg.draw();
  bird.draw();
  message.draw();
  gameOverMsg.draw();
  score.draw();
}

function update() {
  bird.update();
  fg.update();
  pipes.update();
}

function loop() {
  update();
  draw();
  frames++;
  requestAnimationFrame(loop);
}

loop();
