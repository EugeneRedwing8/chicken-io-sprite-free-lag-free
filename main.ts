function gettile2indexat (col: number, row: number) {
    return map2[col][row]
}
function setlevel (lvl: number) {
    gameisstarted = true
    score = 0
    X = 0
    Y = 0
    scorewidth = 16
    if (lvl == 0) {
        createmap(10, 10)
        imagesetmap(img`
            7 7 f 7 7 7 7 f 7 7 
            7 7 f 7 7 7 7 f 7 7 
            7 7 f 7 7 7 7 f 7 7 
            7 7 f 7 7 7 7 f 7 7 
            7 7 f 7 7 7 7 f 7 7 
            7 7 f 7 7 7 7 f 7 7 
            7 7 f 7 7 7 7 f 7 7 
            7 7 f 7 7 7 7 f 7 7 
            7 7 f 7 7 7 7 f 7 7 
            7 7 f 7 7 7 7 f 7 7 
            `, 10, 10)
    } else if (lvl == 1) {
        createmap(10, 10)
        imagesetmap(img`
            e e f e e e e f e e 
            e e f e e e e f e e 
            e e f e e e e f e e 
            e e f e e e e f e e 
            e e f e e e e f e e 
            c c b c c c c b c c 
            e e f e e e e f e e 
            e e f e e e e f e e 
            e e f e e e e f e e 
            e e f e e e e f e e 
            `, 10, 10)
    } else if (lvl == 2) {
        createmap(10, 10)
        imagesetmap(img`
            7 d f 7 d d e f d e 
            d d f d d d d f d d 
            d d f d d 7 d f 7 d 
            e d f d e d d f d e 
            d d f d d d d f d d 
            c c b c c c c b c c 
            7 d f d d d d f d d 
            d d f d d 7 d f d 7 
            d d f d d d d f d d 
            d e f 7 d d e f 7 d 
            `, 10, 10)
    } else if (lvl == 3) {
        createmap(10, 10)
        imagesetmap(assets.image`map1`, 10, 10)
        setlayer2(lvl)
    }
}
function createmap2 (width: number, height: number) {
    map2 = []
    for (let index5 = 0; index5 <= width - 1; index5++) {
        newcolumn2 = []
        for (let index6 = 0; index6 <= height - 1; index6++) {
            newcolumn2.push(0)
        }
        map2.push(newcolumn2)
    }
}
function settile2indexat (col: number, row: number, index: number) {
    map2[col][row] = index
}
function imagesetmap (map: Image, width: number, height: number) {
    for (let index = 0; index <= width - 1; index++) {
        for (let index2 = 0; index2 <= height - 1; index2++) {
            index3 = map.getPixel(index, index2)
            settileindexat(index, index2, index3)
        }
    }
}
function setlayer2 (lvl: number) {
    if (lvl == 3) {
        createmap2(10, 10)
        imagesetmap2(img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            9 9 9 9 9 9 9 9 9 9 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, 10, 10)
    }
}
function createmap (width: number, height: number) {
    map = []
    for (let index3 = 0; index3 <= width - 1; index3++) {
        newcolumn = []
        for (let index4 = 0; index4 <= height - 1; index4++) {
            newcolumn.push(0)
        }
        map.push(newcolumn)
    }
}
function settileindexat (col: number, row: number, index: number) {
    map[col][row] = index
}
function imagesetmap2 (map: Image, width: number, height: number) {
    for (let index = 0; index <= width - 1; index++) {
        for (let index2 = 0; index2 <= height - 1; index2++) {
            index3 = map.getPixel(index, index2)
            settile2indexat(index, index2, index3)
        }
    }
}
function gettileindexat (col: number, row: number) {
    return map[col][row]
}
let imagenum = 0
let dir = 0
let carX = 0
let car_exists = false
let truck2Y = 0
let truck2exists = false
let truckY = 0
let truck_exists = false
let image2: Image = null
let newcolumn: number[] = []
let map: number[][] = []
let index3 = 0
let newcolumn2: number[] = []
let Y = 0
let X = 0
let score = 0
let gameisstarted = false
let map2: number[][] = []
let scorewidth = 0
if (!(blockSettings.exists("levl"))) {
    blockSettings.writeNumber("levl", 0)
}
let level = blockSettings.readNumber("levl")
music.stopAllSounds()
music.play(music.createSong(hex`0078000408020200001c00010a006400f401640000040000000000000000000000000005000004380020002400021da524002800021da528002c00021da52c003000021da530003400021da534003800021da538003c00021da53c004000021d2406001c00010a006400f401640000040000000000000000000000000000000002380000000400021da504000800021da508000c00021da50c001000021da510001400021da514001800021da518001c00021da51c002000021da5`), music.PlaybackMode.LoopingInBackground)
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
assets.image`transparent`,
assets.image`transparent`,
assets.image`transparent`,
assets.image`transparent`,
assets.image`transparent`,
assets.image`transparent`,
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
    . e e e . e e e . e e e . e e e 
    d e 4 e d e 4 e d e 4 e d e 4 e 
    d e 4 e d e 4 e d e 4 e d e 4 e 
    . e 4 e . e 4 e . e 4 e . e 4 e 
    . e 4 e . e 4 e . e 4 e . e 4 e 
    . e 4 e . e 4 e . e 4 e . e 4 e 
    . e 4 e . e 4 e . e 4 e . e 4 e 
    . e 4 e . e 4 e . e 4 e . e 4 e 
    . e 4 e . e 4 e . e 4 e . e 4 e 
    . e 4 e . e 4 e . e 4 e . e 4 e 
    . e 4 e . e 4 e . e 4 e . e 4 e 
    . e 4 e . e 4 e . e 4 e . e 4 e 
    . e 4 e . e 4 e . e 4 e . e 4 e 
    d e 4 e d e 4 e d e 4 e d e 4 e 
    d e 4 e d e 4 e d e 4 e d e 4 e 
    . e e e . e e e . e e e . e e e 
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
    `,
assets.image`road3`,
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
menu.addmenuoption("RESET GAME", img`
    ....................
    ........cccc........
    ......ccaaaacc......
    .....faaaaaaaac.....
    ....fcaaaaaaaaac....
    ...fccccfcccaaaac...
    ..fcccff....ccccc...
    ..fcccf.............
    .fcccccf.......c....
    ..fcccf.......cac...
    ...fcf.......caaac..
    ....f.......caaaaac.
    .............caaac..
    ...fffff....ccaaac..
    ...fccccffffaaaac...
    ....fcccccccccac....
    .....fccccccccf.....
    ......ffccccff......
    ........ffff........
    ....................
    `, function () {
    blockSettings.clear()
    game.reset()
})
game.onUpdate(function () {
    scene.setBackgroundImage(image.create(160, 120))
    for (let indexX = 0; indexX <= map.length - 1; indexX++) {
        for (let indexY = 0; indexY <= map[indexX].length - 1; indexY++) {
            spriteutils.drawTransparentImage(tiles2[gettileindexat(indexX, indexY)], scene.backgroundImage(), indexX * 16 - scene.cameraProperty(CameraProperty.Left), indexY * 16 - scene.cameraProperty(CameraProperty.Top))
        }
    }
    spriteutils.drawTransparentImage(image2, scene.backgroundImage(), X, Y)
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
    for (let indexX = 0; indexX <= map2.length - 1; indexX++) {
        for (let indexY = 0; indexY <= map2[indexX].length - 1; indexY++) {
            spriteutils.drawTransparentImage(tiles2[gettile2indexat(indexX, indexY)], scene.backgroundImage(), indexX * 16 - scene.cameraProperty(CameraProperty.Left), indexY * 16 - scene.cameraProperty(CameraProperty.Top))
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
        music.stopAllSounds()
        music.play(music.createSong(hex`0050000408030205001c000f0a006400f4010a0000040000000000000000000000000000000002540000000400012208000c0001220c001000012210001400012414001800012518001c00012420002400012228002c0001222c003000012230003400012234003800012038003c00015f3c004000011e40004c00011d07001c00020a006400f401640000040000000000000000000000000000000003540000000400011d08000c00011d0c001000011d10001400011e14001800012018001c00011e20002400011d28002c00011d2c003000011d30003400011d34003800011b38003c00015a3c0040000119400050000118`), music.PlaybackMode.InBackground)
        timer.after(30, function () {
            score += 1
        })
    }
    if (score == 7) {
        pauseUntil(() => controller.A.isPressed())
        game.reset()
    }
})
game.onUpdateInterval(50, function () {
    if (controller.left.isPressed()) {
        dir = 0
        if (level == 1 || level == 2) {
            if (imagenum == 0) {
                image2 = assets.image`transparent`
                timer.after(100, function () {
                    imagenum = 1
                })
            } else if (imagenum == 1) {
                image2 = assets.image`chicken2`
                timer.after(100, function () {
                    imagenum = 0
                })
            }
        } else {
            if (imagenum == 0) {
                image2 = assets.image`chicken1`
                timer.after(100, function () {
                    imagenum = 1
                })
            } else if (imagenum == 1) {
                image2 = assets.image`chicken0`
                timer.after(100, function () {
                    imagenum = 0
                })
            }
        }
    } else if (controller.right.isPressed()) {
        dir = 1
        if (level == 1 || level == 2) {
            if (imagenum == 0) {
                image2 = img`
                    . . . . . . 1 1 1 1 1 . 
                    . . . . . . 1 2 1 2 1 . 
                    . . . . . . 1 2 2 2 1 . 
                    . . . . . . 1 e e e 1 . 
                    1 1 1 . . . 1 e f e 1 1 
                    1 e 1 1 1 1 1 e e e 4 1 
                    1 e e e e e e e e e 1 1 
                    1 e e e e e e e e e 1 . 
                    1 e e e e e e e e 1 1 . 
                    1 1 e e e e e e 1 1 . . 
                    . 1 1 4 1 1 4 1 1 . . . 
                    . 1 4 4 1 1 4 1 . . . . 
                    . 1 4 1 1 1 4 4 1 . . . 
                    . 1 1 1 1 1 1 1 1 . . . 
                    `
                timer.after(100, function () {
                    imagenum = 1
                })
            } else if (imagenum == 1) {
                image2 = img`
                    . . . . . . 1 1 1 1 1 . 
                    . . . . . . 1 2 1 2 1 . 
                    . . . . . . 1 2 2 2 1 . 
                    . . . . . . 1 e e e 1 . 
                    1 1 1 . . . 1 e f e 1 1 
                    1 e 1 1 1 1 1 e e e 4 1 
                    1 e e e e e e e e e 1 1 
                    1 e e e e e e e e e 1 . 
                    1 e e e e e e e e 1 1 . 
                    1 1 e e e e e e 1 1 . . 
                    . 1 1 4 1 1 4 1 1 . . . 
                    . . 1 4 1 4 4 1 . . . . 
                    . . 1 4 4 4 1 1 . . . . 
                    . . 1 1 1 1 1 1 . . . . 
                    `
                timer.after(100, function () {
                    imagenum = 0
                })
            }
        } else {
            if (imagenum == 0) {
                image2 = assets.image`chicken4`
                timer.after(100, function () {
                    imagenum = 1
                })
            } else if (imagenum == 1) {
                image2 = assets.image`chicken3`
                timer.after(100, function () {
                    imagenum = 0
                })
            }
        }
    } else if (controller.up.isPressed()) {
        dir = 2
        if (level == 1 || level == 2) {
            if (imagenum == 0) {
                image2 = assets.image`myImage4`
                timer.after(100, function () {
                    imagenum = 1
                })
            } else if (imagenum == 1) {
                image2 = assets.image`myImage5`
                timer.after(100, function () {
                    imagenum = 0
                })
            }
        } else {
            if (imagenum == 0) {
                image2 = assets.image`myImage11`
                timer.after(100, function () {
                    imagenum = 1
                })
            } else if (imagenum == 1) {
                image2 = assets.image`myImage10`
                timer.after(100, function () {
                    imagenum = 0
                })
            }
        }
    } else if (controller.down.isPressed()) {
        dir = 3
        if (level == 1 || level == 2) {
            if (imagenum == 0) {
                image2 = assets.image`myImage1`
                timer.after(100, function () {
                    imagenum = 1
                })
            } else if (imagenum == 1) {
                image2 = assets.image`myImage2`
                timer.after(100, function () {
                    imagenum = 0
                })
            }
        } else {
            if (imagenum == 0) {
                image2 = assets.image`myImage8`
                timer.after(100, function () {
                    imagenum = 1
                })
            } else if (imagenum == 1) {
                image2 = assets.image`myImage7`
                timer.after(100, function () {
                    imagenum = 0
                })
            }
        }
    } else {
        if (level == 1 || level == 2) {
            if (dir == 0) {
                image2 = img`
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
                    `
            } else if (dir == 1) {
                image2 = assets.image`myImage`
            } else if (dir == 2) {
                image2 = assets.image`myImage3`
            } else if (dir == 3) {
                image2 = assets.image`myImage0`
            }
        } else {
            if (dir == 0) {
                image2 = assets.image`chicken`
            } else if (dir == 1) {
                image2 = img`
                    . . . . . . 2 . 2 . 
                    . . . . . . 2 2 2 . 
                    . . . . . . e e e . 
                    . . . . . . e f e . 
                    e . . . . . e e e 4 
                    e e e e e e e e e . 
                    e e e e e e e e e . 
                    e e e e e e e e . . 
                    . e e e e e e . . . 
                    . . 4 . . 4 . . . . 
                    . . 4 . . 4 . . . . 
                    . . 4 4 . 4 4 . . . 
                    `
            } else if (dir == 2) {
                image2 = assets.image`myImage9`
            } else if (dir == 3) {
                image2 = assets.image`myImage6`
            }
        }
    }
})
forever(function () {
    blockSettings.writeNumber("levl", level)
    level = blockSettings.readNumber("levl")
})
