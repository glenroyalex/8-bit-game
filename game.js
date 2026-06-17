kaboom({
  background: [0, 0, 0],
  scale: 2,
});

loadSprite("eyes", "assets/eyes.png");

scene("main", () => {
  const player = add([
  sprite("eyes"),
  pos(80, 80),
  area(),
  scale(4), // makes the tiny sprite visible
]);

  onKeyDown("left", () => player.move(-120, 0));
  onKeyDown("right", () => player.move(120, 0));
  onKeyDown("up", () => player.move(0, -120));
  onKeyDown("down", () => player.move(0, 120));
});

go("main");
