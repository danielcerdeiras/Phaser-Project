export default class Block extends Phaser.GameObjects.Sprite{

    constructor(scene,x,y,width,height,sprite){
        super(scene, (x * width + width / 2), (y * height + height / 2), sprite);
        this.scene.add.existing(this);
        this.posX = x;
        this.posY = y;
        this.displayWidth = width;
        this.displayHeight = height;
    }
}