sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.startCountdown(10)
    info.changeScoreBy(1)
    ice_cream.setPosition(randint(10, 120), randint(10, 120))
})
let ice_cream: Sprite = null
ice_cream = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . 3 9 9 9 3 . . . . . . 
    . . . . . . 9 9 9 . . . . . . . 
    . . . . . . . 9 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
scene.setBackgroundColor(13)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . 5 5 d d d 5 5 . . . . . 
    . . . . 5 d f f d f f 5 . . . . 
    . . . . 5 5 f 5 d 5 f 5 . . . . 
    . . . . . 5 5 d d b 5 5 . . . . 
    . . . . . 5 5 d f d 5 5 . . . . 
    . . . . . . 5 . . . 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
