kaboom({
  background: [0, 255, 0],   // bright green
  scale: 2,
});

loadSprite("player", "assets/player_walk.png", {
  sliceX: 10,
  anims: {
    walk: { from: 0, to: 1, speed: 8, loop: true },
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
