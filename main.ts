namespace SpriteKind {
    export const help = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.tileKindAt(TileDirection.Right, sprites.dungeon.darkGroundCenter)) {
        mySprite.vx = -150
    }
    if (mySprite.tileKindAt(TileDirection.Left, sprites.dungeon.darkGroundCenter)) {
        mySprite.vx = 150
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, sprites.dungeon.darkGroundCenter)) {
        mySprite.vy = -120
    }
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, sprites.dungeon.darkGroundCenter)) {
        mySprite.vy = -200
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    game.setDialogFrame(img`
        . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 5 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 5 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 5 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 5 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 5 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 5 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 5 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 5 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 5 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 5 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 5 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 5 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `)
    game.setDialogCursor(img`
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 f 2 2 2 2 2 2 . . 
        . 2 2 2 2 2 f 2 f 2 2 2 2 2 2 . 
        2 2 2 2 2 f 2 2 2 f 2 2 2 2 2 2 
        2 2 2 2 f 2 2 2 2 2 f 2 2 2 2 2 
        2 2 2 f 2 2 2 2 2 2 2 f 2 2 2 2 
        2 2 2 f 2 2 2 2 2 2 2 f 2 2 2 2 
        2 2 2 f f f f f f f f f 2 2 2 2 
        2 2 2 f 2 2 2 2 2 2 2 f 2 2 2 2 
        2 2 2 f 2 2 2 2 2 2 2 f 2 2 2 2 
        2 2 2 f 2 2 2 2 2 2 2 f 2 2 2 2 
        2 2 2 f 2 2 2 2 2 2 2 f 2 2 2 2 
        2 2 2 f 2 2 2 2 2 2 2 f 2 2 2 2 
        2 2 2 f 2 2 2 2 2 2 2 f 2 2 2 . 
        . 2 2 f 2 2 2 2 2 2 2 f 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        `)
    game.showLongText("password: 649427986", DialogLayout.Top)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile2`)) {
        start.destroy()
        mySprite.vx = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    info.changeScoreBy(1)
})
let start: Sprite = null
let mySprite: Sprite = null
// Enter password here.
let Enter_Password = 0
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 1 1 1 1 2 2 1 1 1 1 2 . . 
    . 2 2 1 1 f f 2 2 f f 1 1 2 2 . 
    2 2 2 1 1 f f 2 2 f f 1 1 2 2 2 
    2 2 2 1 1 f f 2 2 f f 1 1 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 f f f f f f f f f f 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    `, SpriteKind.Player)
start = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    2 2 2 . 2 2 . . 2 2 . 2 2 . 2 2 
    2 . 2 . 2 . 2 . 2 . . 2 . . 2 . 
    2 2 2 . 2 2 . . 2 2 . 2 2 . 2 2 
    2 . . . 2 . 2 . 2 . . . 2 . . 2 
    2 . . . 2 . 2 . 2 2 . 2 2 . 2 2 
    . . . . . . . . . . . . . . . . 
    2 2 . 2 2 2 . 2 . . 2 2 . 2 2 2 
    2 . . . 2 . 2 . 2 . 2 . 2 . 2 . 
    2 2 . . 2 . 2 2 2 . 2 2 . . 2 . 
    . 2 . . 2 . 2 . 2 . 2 . 2 . 2 . 
    2 2 . . 2 . 2 . 2 . 2 . 2 . 2 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.help)
tiles.placeOnRandomTile(start, assets.tile`myTile0`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
mySprite.ay = 350
if (Enter_Password == 649427986) {
    controller.moveSprite(mySprite, 0, 100)
}
