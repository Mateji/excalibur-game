import * as ex from 'excalibur';

export class Player extends ex.Actor {
  constructor() {
    super();
    this.setWidth(25);
    this.setHeight(25);
    this.x = 150;
    this.y = 150;
    this.color = new ex.Color(255, 255, 255);
  }

  public update(engine, delta) {
    console.log(delta);
    if (engine.input.keyboard.isHeld(ex.Input.Keys.A) || engine.input.keyboard.isHeld(ex.Input.Keys.Left)) {
      this.moveLeft(delta);
    }
    if (engine.input.keyboard.isHeld(ex.Input.Keys.D) || engine.input.keyboard.isHeld(ex.Input.Keys.Right)) {
      this.moveRight(delta);
    }
    if (engine.input.keyboard.isHeld(ex.Input.Keys.W) || engine.input.keyboard.isHeld(ex.Input.Keys.Up)) {
      this.moveUp(delta);
    }
    if (engine.input.keyboard.isHeld(ex.Input.Keys.S) || engine.input.keyboard.isHeld(ex.Input.Keys.Down)) {
      this.moveDown(delta);
    }
  }

  moveLeft(delta) {
    this.x -= 1 * delta;
  }

  moveRight(delta) {
    this.x += 1 * delta;
  }

  moveUp(delta) {
    this.y -= 1 * delta;
  }

  moveDown(delta) {
    this.y += 1 * delta;
  }
}
