kaboom({
  background: [0, 0, 0],
  scale: 2,
});

loadSprite("player", "assets/player_walk.png", {
  sliceX: 4,   // number of frames in the row
  anims: {
    walk: { from: 0, to: 3, speed: 8, loop: true },
    idle: { from: 0, to: 0, speed: 1, loop: true }
  }
});

const player = add([
  sprite("player"),
  pos(80, 80),
  area(),
  scale(2),
]);

onKeyDown("left", () => {
  player.move(-120, 0);
  player.flipX(true);
  player.play("walk");
});

onKeyDown("right", () => {
  player.move(120, 0);
  player.flipX(false);
  player.play("walk");
});

onKeyRelease(() => {
  player.play("idle");
});

go("main");
