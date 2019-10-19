import player from './player.js';
import enemy from './enemy.js';

export default class Game extends Phaser.Scene {
  constructor()
  {
    super({ key: 'main' });
    this.squarePixels = 100;
  }

  preload()
  {
    this.load.image('player', './sprites/player.png');
    this.load.image('bg', './sprites/background.png');
    this.load.image('basicEnemy', './sprites/basicEnemy.png');
    this.cursors = this.input.keyboard.addKeys('W,A,S,D');
  }

  create()
  {
    //this.world.setBounds(0, 0, 800, 2000);
    //this.cameras.main.setViewport(0, 1000, 800, 1000);
    this.background = this.add.image(0, 0, 'bg');
    this.background.scaleX *= 10;
    this.background.scaleY *= 10;
    this.player = new player(this, 400, 950, this.squarePixels, this.squarePixels);
    this.enemy = new enemy(this, 500, 500, this.squarePixels, this.squarePixels, 3);
  }

  update(time, delta)
  {   
    if (Phaser.Input.Keyboard.JustDown(this.cursors.W))
    {
      let movedPixels = 0;
      while(movedPixels < this.squarePixels)
      {
        this.player.y--;
        this.enemy.Move();
        movedPixels++;
      }
    }
    
    else if (Phaser.Input.Keyboard.JustDown(this.cursors.S))
    {
      let movedPixels = 0;
      while(movedPixels < this.squarePixels)
      {
        this.player.y++;
        this.enemy.Move();
        movedPixels++;
      }
    }

    else if (Phaser.Input.Keyboard.JustDown(this.cursors.A))
    {
      let movedPixels = 0;
      while(movedPixels < this.squarePixels)
      {
        this.player.x--;
        this.enemy.Move();
        movedPixels++;
      }
    }

    else if (Phaser.Input.Keyboard.JustDown(this.cursors.D))
    {
      let movedPixels = 0;
      while(movedPixels < this.squarePixels)
      {
        this.player.x++;
        this.enemy.Move();
        movedPixels++;
      }
    }
  }
}