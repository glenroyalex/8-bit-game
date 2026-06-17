kaboom({
  background: [0, 0, 0],
  scale: 2,
});

loadSprite("player", "assets/player.png", {
  sliceX: 4,
  anims: {
    idle: { from: 0, to: 1, speed: 4, loop: true },
    walk: { from: 2, to: 3, speed: 8, loop: true },
  }
});

const player = add([
  sprite("player"),
  pos(80, 80),
  area(),
  scale(2),
]);

  onKeyDown("left", () => player.move(-120, 0));
onKeyDown("right", () => player.move(120, 0));
onKeyDown("up", () => player.move(0, -120));
onKeyDown("down", () => player.move(0, 120));
});

go("main");
