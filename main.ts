function setlevel (lvl: number) {
    gameisstarted = true
    score = 0
    X = 0
    Y = 0
    scorewidth = 16
    if (lvl == 0) {
        createmap(10, 10)
        imagesetmap(img`
            1 1 2 1 1 1 1 2 1 1 
            1 1 2 1 1 1 1 2 1 1 
            1 1 2 1 1 1 1 2 1 1 
            1 1 2 1 1 1 1 2 1 1 
            1 1 2 1 1 1 1 2 1 1 
            1 1 2 1 1 1 1 2 1 1 
            1 1 2 1 1 1 1 2 1 1 
            1 1 2 1 1 1 1 2 1 1 
            1 1 2 1 1 1 1 2 1 1 
            1 1 2 1 1 1 1 2 1 1 
            `, 10, 10)
    } else if (lvl == 1) {
        createmap(10, 10)
        imagesetmap(img`
            5 5 2 5 5 5 5 2 5 5 
            5 5 2 5 5 5 5 2 5 5 
            5 5 2 5 5 5 5 2 5 5 
            5 5 2 5 5 5 5 2 5 5 
            5 5 2 5 5 5 5 2 5 5 
            3 3 4 3 3 3 3 4 3 3 
            5 5 2 5 5 5 5 2 5 5 
            5 5 2 5 5 5 5 2 5 5 
            5 5 2 5 5 5 5 2 5 5 
            5 5 2 5 5 5 5 2 5 5 
            `, 10, 10)
    } else if (lvl == 2) {
        createmap(10, 10)
        imagesetmap(img`
            1 6 2 1 6 6 5 2 6 5 
            6 6 2 6 6 6 6 2 6 6 
            6 6 2 6 6 1 6 2 1 6 
            5 6 2 6 5 6 6 2 6 5 
            6 6 2 6 6 6 6 2 6 6 
            3 3 4 3 3 3 3 4 3 3 
            1 6 2 6 6 6 6 2 6 6 
            6 6 2 6 6 1 6 2 6 1 
            6 6 2 6 6 6 6 2 6 6 
            6 5 2 1 6 6 5 2 1 6 
            `, 10, 10)
    } else if (lvl == 3) {
        createmap(10, 10)
        imagesetmap(assets.image`map1`, 10, 10)
    } else {
    	
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameisstarted) {
        blockSettings.remove("levl")
        blockSettings.clear()
        game.reset()
    }
})
function imagesetmap (map: Image, width: number, height: number) {
    for (let index = 0; index <= width - 1; index++) {
        for (let index2 = 0; index2 <= height - 1; index2++) {
            index32 = map.getPixel(index, index2)
            settileindexat(index, index2, index32)
        }
    }
}
function createmap (width: number, height: number) {
    map = []
    for (let index3 = 0; index3 <= width - 1; index3++) {
        newcolumn = []
        for (let index22 = 0; index22 <= height - 1; index22++) {
            newcolumn.push(0)
        }
        map.push(newcolumn)
    }
}
function settileindexat (col: number, row: number, index: number) {
    map[col][row] = index
}
function gettileindexat (col: number, row: number) {
    return map[col][row]
}
let carX = 0
let car_exists = false
let truck2Y = 0
let truck2exists = false
let truckY = 0
let truck_exists = false
let newcolumn: number[] = []
let map: number[][] = []
let index32 = 0
let Y = 0
let X = 0
let score = 0
let gameisstarted = false
let scorewidth = 0
if (!(blockSettings.exists("levl"))) {
    blockSettings.writeNumber("levl", 0)
}
let level = blockSettings.readNumber("levl")
spriteutils.drawTransparentImage(assets.image`thumbnail`, scene.backgroundImage(), 0, 0)
pauseUntil(() => controller.B.isPressed())
spriteutils.drawTransparentImage(assets.image`objective`, scene.backgroundImage(), 80, 60)
pauseUntil(() => controller.A.isPressed())
let eggX = 8
let eggY = 60
let tiles2 = [
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    5 7 7 7 7 7 7 7 5 7 7 5 7 7 5 7 
    5 7 7 7 7 7 7 7 5 7 7 5 7 7 5 7 
    5 7 7 5 7 7 7 7 7 7 7 5 7 7 7 7 
    5 7 7 5 7 5 7 7 7 7 7 5 7 7 7 7 
    5 7 7 5 7 5 7 7 7 7 7 5 7 7 7 7 
    5 7 7 5 7 5 7 5 7 7 7 5 7 7 5 7 
    7 7 7 5 7 7 7 5 7 7 7 5 7 7 5 7 
    7 7 7 5 7 7 7 5 7 7 7 5 7 7 5 7 
    7 7 7 5 7 7 7 5 7 7 7 7 7 7 5 7 
    7 7 7 5 7 7 7 5 7 7 7 7 7 7 5 7 
    7 7 7 7 7 7 7 5 7 7 7 7 5 7 5 7 
    7 5 7 7 7 7 7 5 7 7 7 7 5 7 7 7 
    7 5 7 7 7 5 7 7 7 7 7 7 5 7 7 7 
    7 7 7 7 7 5 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `,
img`
    c c c c c c c 5 5 c c c c c c c 
    c c c c c c c 5 5 c c c c c c c 
    c c c c c c c 5 5 c c c c c c c 
    c c c c c c c 5 5 c c c c c c c 
    c c c c c c c 5 5 c c c c c c c 
    c c c c c c c 5 5 c c c c c c c 
    c c c c c c c 5 5 c c c c c c c 
    c c c c c c c 5 5 c c c c c c c 
    c c c c c c c 5 5 c c c c c c c 
    c c c c c c c 5 5 c c c c c c c 
    c c c c c c c 5 5 c c c c c c c 
    c c c c c c c 5 5 c c c c c c c 
    c c c c c c c 5 5 c c c c c c c 
    c c c c c c c 5 5 c c c c c c c 
    c c c c c c c 5 5 c c c c c c c 
    c c c c c c c 5 5 c c c c c c c 
    `,
img`
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    `,
assets.image`road3`,
img`
    e e e e e e e e 4 4 e e e e e e 
    e 4 4 e e e e 4 e e 4 e e e e e 
    4 e e 4 e e e e e e e e e e e e 
    e e e e e e e e e e e e 4 4 e e 
    e e e 4 4 e e e e e e 4 e e 4 e 
    e e 4 e e 4 e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e 4 4 e e e e e e e e 
    e e e e e 4 e e 4 e e e e e e e 
    e e e e e e e e e e 4 4 e e e e 
    e e e e e e e e e 4 e e 4 e e e 
    e e e e e e e e e e e e e e e e 
    e e e 4 4 e e e e e e e e e e e 
    e e 4 e e 4 e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    `,
img`
    f f f f f f f f f f f f f f f f 
    f e e e e e e e e e e e e e e e 
    f e f e e e e e e e e e e e f e 
    f e e e e e e e e e e e e e e e 
    f e f e e e e e e e e e e e f e 
    f e e e e e e e e e e e e e e e 
    f f f f f f f f f f f f f f f f 
    e e e e e e e f e e e e e e e e 
    e e e e e f e f e f e e e e e e 
    e e e e e e e f e e e e e e e e 
    e e e e e f e f e f e e e e e e 
    e e e e e e e f e e e e e e e e 
    f f f f f f f f f f f f f f f f 
    f e e e e e e e e e e e e e e f 
    f e f e e e e e e e e e e f e f 
    f e e e e e e e e e e e e e e f 
    `,
img`
    f f f f f f f f f f f f f f f f 
    f b b b b f b b b b b b b b b f 
    f b b b b f b b b b b b b b b f 
    f b b b b f f b b b b b b b b f 
    f b b b b f b f b b b b b b b f 
    f b b b b f b b b b b b b b b f 
    f b b b f b b b b b b b b b b f 
    f b b f b b b b b b b b b b b f 
    f b b f b b b b b b b b b b b f 
    f b b b f b b b b b b b b b b f 
    f b b b b b b b b b b b b b b f 
    f b b b b b b b b b b f b f b f 
    f b b b b b b b b b b b f b b f 
    f b b b b b b b b b b b b f b f 
    f b b b b b b f b b b b b f b f 
    f f f f f f f f f f f f f f f f 
    `,
img`
    f f f f f f f f f f f f f f f f 
    f b b b b b b b b b b b b b b f 
    f b b b b b b b b b b b b b b f 
    f b b b b b b b b b b b b b b f 
    f b b b b b b b b b b b b b b f 
    f b b b b b b b b b b b b b b f 
    f b b b b b b b b b b b b b b f 
    f b b b b b b b b b b b b b b f 
    f b b b b b b b b b b b b b b f 
    f b b b b b b b b b b b b b b f 
    f b b b b b b b b b b b b b b f 
    f b b b b b b b b b b b b b b f 
    f b b b b b b b b b b b b b b f 
    f b b b b b b b b b b b b b b f 
    f b b b b b b b b b b b b b b f 
    f f f f f f f f f f f f f f f f 
    `
]
let eggsdisplay = [
img`
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    2 1 1 1 1 d d 1 1 1 1 1 1 1 1 1 
    2 1 1 1 d d d d 1 1 1 1 1 1 1 1 
    2 1 1 d d 1 d d b 1 1 1 2 2 2 1 
    2 1 1 d 1 1 d d b 1 1 2 2 2 2 2 
    2 1 d d 1 d d d b b 1 2 2 1 2 2 
    2 1 d d d d d d d b 1 2 2 1 2 2 
    2 1 d d d d d d d b 1 2 2 1 2 2 
    2 1 d d d d d d d b 1 2 2 2 2 2 
    2 1 b d d d d d b b 1 1 2 2 2 1 
    2 1 1 b b b b b b 1 1 1 1 1 1 1 
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `,
img`
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    2 1 1 1 1 d d 1 1 1 1 1 1 1 1 1 
    2 1 1 1 d d d d 1 1 1 1 1 1 1 1 
    2 1 1 d d 1 d d b 1 1 1 2 2 2 1 
    2 1 1 d 1 1 d d b 1 1 2 2 2 2 1 
    2 1 d d 1 d d d b b 1 1 2 2 2 1 
    2 1 d d d d d d d b 1 1 2 2 2 1 
    2 1 d d d d d d d b 1 1 2 2 2 1 
    2 1 d d d d d d d b 1 1 2 2 2 1 
    2 1 b d d d d d b b 1 2 2 2 2 2 
    2 1 1 b b b b b b 1 1 1 1 1 1 1 
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `,
img`
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    2 1 1 1 1 d d 1 1 1 1 1 1 1 1 1 
    2 1 1 1 d d d d 1 1 1 1 1 1 1 1 
    2 1 1 d d 1 d d b 1 1 1 2 2 1 1 
    2 1 1 d 1 1 d d b 1 1 2 2 2 2 1 
    2 1 d d 1 d d d b b 1 2 1 2 2 1 
    2 1 d d d d d d d b 1 1 1 2 2 1 
    2 1 d d d d d d d b 1 2 2 2 1 1 
    2 1 d d d d d d d b 1 2 2 1 1 1 
    2 1 b d d d d d b b 1 2 2 2 2 1 
    2 1 1 b b b b b b 1 1 1 1 1 1 1 
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `,
img`
    4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    4 5 5 5 5 d d 5 5 5 5 5 5 5 5 5 
    4 5 5 5 d d d d 5 5 5 5 5 5 5 5 
    4 5 5 d d 1 d d b 5 5 5 4 4 5 5 
    4 5 5 d 1 1 d d b 5 5 4 4 4 4 5 
    4 5 d d 1 d d d b b 5 5 5 4 4 5 
    4 5 d d d d d d d b 5 5 4 4 5 5 
    4 5 d d d d d d d b 5 5 5 4 4 5 
    4 5 d d d d d d d b 5 4 4 4 4 5 
    4 5 b d d d d d b b 5 5 4 4 5 5 
    4 5 5 b b b b b b 5 5 5 5 5 5 5 
    4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    `,
img`
    4555555555555555555555555555555555555555555555555
    4555555555555555555555555555555555555555555555555
    4555555555555555555555555555555555555555555555555
    4555555555555555555555555555555555555555555555555
    4555555555555555555555555555555555555555555555555
    454455544544445445544544554454444544445544555aaa5
    454455544554455444544544454454455544554544555a5a5
    454455544554455444444544444454445544554544555aaa5
    454454544554455444444544444454455544445544555a5a5
    454444444554455445444544544454455544545555555a5a5
    454445444544445445544544554454444544554544555a5a5
    4555555555555555555555555555555555555555555555555
    4555555555555555555555555555555555555555555555555
    4555555555555555555555555555555555555555555555555
    4555555555555555555555555555555555555555555555555
    4444444444444444444444444444444444444444444444444
    `,
img`
    4555555555555555555555555555555555555555555555555
    4555555555555555555555555555555555555555555555555
    4555555555555555555555555555555555555555555555555
    4555555555555555555555555555555555555555555555555
    4555555555555555555555555555555555555555555555555
    454455544544445445544544554454444544445544555aaa5
    454455544554455444544544454454455544554544555a5a5
    454455544554455444444544444454445544554544555aaa5
    454454544554455444444544444454455544445544555a5a5
    454444444554455445444544544454455544545555555a5a5
    454445444544445445544544554454444544554544555a5a5
    4555555555555555555555555555555555555555555555555
    4555555555555555555555555555555555555555555555555
    4555555555555555555555555555555555555555555555555
    4555555555555555555555555555555555555555555555555
    4444444444444444444444444444444444444444444444444
    `,
img`
    45555555555555555555555555555555555555
    45555555555555555555555555555555555555
    45555555555555555555555555555555555555
    45555555555555555555555555555555555555
    45555555555555555555555555555555555555
    4544555444445444454444544445544555aaa5
    4544555445445445554455544554544555a5a5
    4544555445445445554445544554544555aaa5
    4544555445445444454455544445544555a5a5
    4544555445445554454455544545555555a5a5
    4544445444445444454444544554544555a5a5
    45555555555555555555555555555555555555
    45555555555555555555555555555555555555
    45555555555555555555555555555555555555
    45555555555555555555555555555555555555
    44444444444444444444444444444444444444
    `,
img`
    45555555555555555555555555555555555555
    45555555555555555555555555555555555555
    45555555555555555555555555555555555555
    45555555555555555555555555555555555555
    45555555555555555555555555555555555555
    4544555444445444454444544445544555aaa5
    4544555445445445554455544554544555a5a5
    4544555445445445554445544554544555aaa5
    4544555445445444454455544445544555a5a5
    4544555445445554454455544545555555a5a5
    4544445444445444454444544554544555a5a5
    45555555555555555555555555555555555555
    45555555555555555555555555555555555555
    45555555555555555555555555555555555555
    45555555555555555555555555555555555555
    44444444444444444444444444444444444444
    `
]
scorewidth = 16
setlevel(level)
game.onUpdate(function () {
    scene.setBackgroundImage(image.create(160, 120))
    for (let index4 = 0; index4 <= map.length - 1; index4++) {
        for (let index23 = 0; index23 <= map[index4].length - 1; index23++) {
            spriteutils.drawTransparentImage(tiles2[gettileindexat(index4, index23)], scene.backgroundImage(), index4 * 16 - scene.cameraProperty(CameraProperty.Left), index23 * 16 - scene.cameraProperty(CameraProperty.Top))
        }
    }
    if (level == 1 || level == 2) {
        spriteutils.drawTransparentImage(img`
            . 1 1 1 1 1 . . . . . . 
            . 1 2 1 2 1 . . . . . . 
            . 1 2 2 2 1 . . . . . . 
            . 1 e e e 1 . . . . . . 
            1 1 e f e 1 . . . 1 1 1 
            1 4 e e e 1 1 1 1 1 e 1 
            1 1 e e e e e e e e e 1 
            . 1 e e e e e e e e e 1 
            . 1 1 e e e e e e e e 1 
            . . 1 1 e e e e e e 1 1 
            . . . 1 1 4 1 1 4 1 1 . 
            . . . . 1 4 1 1 4 1 . . 
            . . . 1 4 4 1 4 4 1 . . 
            . . . 1 1 1 1 1 1 1 . . 
            `, scene.backgroundImage(), X, Y)
    } else {
        spriteutils.drawTransparentImage(assets.image`chicken`, scene.backgroundImage(), X, Y)
    }
    spriteutils.drawTransparentImage(assets.image`egg`, scene.backgroundImage(), eggX, eggY)
    if (level == 0 || level == 1 || (level == 2 || level == 3)) {
        if (truck_exists) {
            spriteutils.drawTransparentImage(assets.image`truck1`, scene.backgroundImage(), 32, truckY)
            for (let index = 0; index < 4; index++) {
                truckY += 1
            }
            timer.after(700, function () {
                truck_exists = false
            })
        } else {
            if (Math.percentChance(1)) {
                truckY = -10
                spriteutils.drawTransparentImage(assets.image`truck1`, scene.backgroundImage(), 32, truckY)
                truck_exists = true
                for (let index = 0; index < 4; index++) {
                    truckY += 1
                }
            }
        }
        if (truck2exists) {
            spriteutils.drawTransparentImage(assets.image`truck2`, scene.backgroundImage(), 112, truck2Y)
            for (let index = 0; index < 4; index++) {
                truck2Y += 1
            }
            timer.after(700, function () {
                truck2exists = false
            })
        } else {
            if (Math.percentChance(1)) {
                truck2Y = -10
                spriteutils.drawTransparentImage(assets.image`truck2`, scene.backgroundImage(), 112, truck2Y)
                truck2exists = true
                for (let index = 0; index < 4; index++) {
                    truck2Y += 1
                }
            }
        }
    }
    if (level == 1 || level == 2) {
        if (car_exists) {
            spriteutils.drawTransparentImage(assets.image`car1`, scene.backgroundImage(), carX, 80)
            for (let index = 0; index < 4; index++) {
                carX += 1
            }
            timer.after(900, function () {
                car_exists = false
            })
        } else {
            if (Math.percentChance(1)) {
                carX = -10
                spriteutils.drawTransparentImage(assets.image`car1`, scene.backgroundImage(), carX, 80)
                car_exists = true
                for (let index = 0; index < 4; index++) {
                    carX += 1
                }
            }
        }
    }
    spriteutils.drawTransparentImage(eggsdisplay[score], scene.backgroundImage(), scene.cameraProperty(CameraProperty.Right) - scorewidth, scene.cameraProperty(CameraProperty.Top))
})
game.onUpdate(function () {
    if (controller.left.isPressed()) {
        if (X > 0) {
            X += -2
        }
    }
    if (controller.right.isPressed()) {
        if (X < 150) {
            X += 2
        }
    }
    if (controller.down.isPressed()) {
        if (Y < 108) {
            Y += 2
        }
    }
    if (controller.up.isPressed()) {
        if (Y > 0) {
            Y += -2
        }
    }
    if (Math.percentChance(25)) {
        if (eggY < 108) {
            eggY += 2
        }
    } else if (Math.percentChance(25)) {
        if (eggY > 0) {
            eggY += -2
        }
    } else if (Math.percentChance(25)) {
        if (eggX < 150) {
            eggX += 2
        }
    } else {
        if (eggX > 0) {
            eggX += -2
        }
    }
})
game.onUpdate(function () {
    if (X == eggX && Y == eggY) {
        score += 1
        eggX = 80
        eggY = 60
    }
    if (X > 27 && X < 44 && (Y == truckY && truck_exists)) {
        score = 6
    }
    if (X > 107 && X < 125 && (Y == truck2Y && truck2exists)) {
        score = 6
    }
    if (Y < 91 && Y > 70 && (X == carX && car_exists)) {
        score = 6
    }
    if (score == 4) {
        scorewidth = 49
        timer.after(30, function () {
            score += 1
        })
    }
    if (score == 5) {
        pauseUntil(() => controller.A.isPressed())
        level += 1
        setlevel(level)
    }
    if (score == 6) {
        scorewidth = 38
        timer.after(30, function () {
            score += 1
        })
    }
    if (score == 7) {
        pauseUntil(() => controller.A.isPressed())
        game.reset()
    }
})
forever(function () {
    blockSettings.writeNumber("levl", level)
    level = blockSettings.readNumber("levl")
})
