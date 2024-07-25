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
let truck2exists = false
let truck_exists = false
let newcolumn: number[] = []
let map: number[][] = []
let index32 = 0
let score = 0
let X = 0
let Y = 0
let truckY = 0
let truck2Y = 0
spriteutils.drawTransparentImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777767777776666666777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777722227727727222777772277777777277777727777777777777777777777777776262626777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777227777722227727777722777727722777722277727722777777777777777777776222226677777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777277777722727727777727777727277777727777727277277777777777767777766eeeeee667777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777227777772727727777727777722277777722227722277277777777777767776664eff1eee67777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777722277777772222227722777772722777722777722777277777777777767776444eff1eee66777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777772227772777227722222772777727777777777767776664eeeeeeee6777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777772777777777777777777777767777766eeeeeeee6777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777767777776eeeeeee66777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777774477777777777777777777777677777766eeeee667777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777774477777477777777747747774474777777777777777777777776777777766ee66677777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777444477747477447774774477747747777777777777777777777767767777766667777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777444777477777447744774477744477777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777477777477744477774477477747447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777477777477774447774474477747747777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777774777744744777744477777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777474747444774747474474747774777444777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777774774747747747747474774447777777474777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777774774447747747744774474447774777474777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777774774747747747747474774447774777474777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777474747444774747474474747774747444747777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777774774777747447744774447444744777744744774474474777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777747777477474747477477747747777747747474774774777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777774774777747447744777477747744744744744774474474777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777774774777747477747477477747747777747747474774777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777774747777477477747474447747744777747747474474474777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777774777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777747777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777774477774777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777744447777744777777777774777774777777777777777777777777777777777777774777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777477747477777477477774444774777777777747777777777777777747477777744777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777477744777777477477777744774777777777474777777747774777744747777444777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777477747777777747477777774774777777777474777777477774777747747777444777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777477747777777774777777774774777477774774774777477774777747747774474777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777477747777777774777777774774774477774747774744777774777747747744774777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777477777777777747777777747774747747774447777474777774777777777747774777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777747777777747774477774777777777777777774777777777777774777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777477777777477774777774777777777777777774777777777777774777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777477777774777777777777777777777777777777777777777777774777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777744777777777777777777777777777777777777777777777777777747777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777747777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777477777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777774777777777777777777777777777777777777777777777777777444777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777774777777777777777777777777777777777777747777777774444777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777774777777777777777777777747777777777777747777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777774777777777777777777777747777777777777747777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777774777777777777777777777747777777777777747777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777747777777774777777777777777777777747777777777777747777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777747777777774777777777777777777777747777777777777747777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777747777777774444477777777777777777747777777777777747777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777747777774444777777777747777777744444444777747777747777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777477777777774777777777477777777777477777777747777747777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777747777777774777777744744777777777477777777477777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777774777777774777777474777444777777477777777477777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777477777774777774747777777447774777777777747777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777747777774777774477777777747774777777777477777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777774777747777777477777777777777777777774777777774777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777477747777777777777777777777777777447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777477777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777774777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777774444777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `, scene.backgroundImage(), 0, 0)
pauseUntil(() => controller.B.isPressed())
spriteutils.drawTransparentImage(img`
    ......................
    22.222.2..2..22.22.222
    2..2.2.2..2..2..2...2.
    2..2.2.2..2..22.2...2.
    2..2.2.2..2..2..2...2.
    22.222.22.22.22.22..2.
    ......................
    ......................
    2.2...22.222.222.22.2.
    2.2...2..2...2...2..2.
    222...22.2.2.2.2.22.2.
    ..2...2..2.2.2.2..2...
    ..2...22.222.222.22.2.
    ......................
    ......................
    aa..aa..aa.aa.aa...aaa
    a.a.a.a.a..a..a....a.a
    aa..aa..aa.aa.aa...aaa
    a...a.a.a...a..a...a.a
    a...a.a.aa.aa.aa...a.a
    `, scene.backgroundImage(), 89, 60)
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
let scorewidth = 16
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
game.onUpdate(function () {
    scene.setBackgroundImage(image.create(160, 120))
    for (let index4 = 0; index4 <= map.length - 1; index4++) {
        for (let index23 = 0; index23 <= map[index4].length - 1; index23++) {
            spriteutils.drawTransparentImage(tiles2[gettileindexat(index4, index23)], scene.backgroundImage(), index4 * 16 - scene.cameraProperty(CameraProperty.Left), index23 * 16 - scene.cameraProperty(CameraProperty.Top))
        }
    }
    spriteutils.drawTransparentImage(img`
        . 2 . 2 . . . . . . 
        . 2 2 2 . . . . . . 
        . e e e . . . . . . 
        . e f e . . . . . . 
        4 e e e . . . . . e 
        . e e e e e e e e e 
        . e e e e e e e e e 
        . . e e e e e e e e 
        . . . e e e e e e . 
        . . . . 4 . . 4 . . 
        . . . . 4 . . 4 . . 
        . . . 4 4 . 4 4 . . 
        `, scene.backgroundImage(), X, Y)
spriteutils.drawTransparentImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . d d . . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . d d 1 d d b . . . . . 
        . . . . . d 1 1 d d b . . . . . 
        . . . . d d 1 d d d b b . . . . 
        . . . . d d d d d d d b . . . . 
        . . . . d d d d d d d b . . . . 
        . . . . d d d d d d d b . . . . 
        . . . . b d d d d d b b . . . . 
        . . . . . b b b b b b . . . . . 
        `, scene.backgroundImage(), eggX, eggY)
if (truck_exists) {
        spriteutils.drawTransparentImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . . . . 2 e e e e e 2 . . . . 
            . . . . . 2 e e e e e 2 . . . . 
            . . . . . 2 e e e e e 2 . . . . 
            . . . . . e e e e e e e . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . . . . 2 f f f f f 2 . . . . 
            . . . . . 2 f f f f f 2 . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . . . . e e e e e e e . . . . 
            . . . . . e e e e e e e . . . . 
            . . . . . e e e e e e e . . . . 
            . . . . . 5 e e e e e 5 . . . . 
            `, scene.backgroundImage(), 32, truckY)
for (let index = 0; index < 4; index++) {
            truckY += 1
        }
        timer.after(700, function () {
            truck_exists = false
        })
    } else {
        if (Math.percentChance(1)) {
            truckY = -10
            spriteutils.drawTransparentImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 2 2 2 2 2 2 2 . . . . 
                . . . . . 2 e e e e e 2 . . . . 
                . . . . . 2 e e e e e 2 . . . . 
                . . . . . 2 e e e e e 2 . . . . 
                . . . . . e e e e e e e . . . . 
                . . . . . 2 2 2 2 2 2 2 . . . . 
                . . . . . 2 f f f f f 2 . . . . 
                . . . . . 2 f f f f f 2 . . . . 
                . . . . . 2 2 2 2 2 2 2 . . . . 
                . . . . . e e e e e e e . . . . 
                . . . . . e e e e e e e . . . . 
                . . . . . e e e e e e e . . . . 
                . . . . . 5 e e e e e 5 . . . . 
                `, scene.backgroundImage(), 32, truckY)
truck_exists = true
            for (let index = 0; index < 4; index++) {
                truckY += 1
            }
        }
    }
    if (truck2exists) {
        spriteutils.drawTransparentImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 6 6 6 6 6 6 6 . . . . 
            . . . . . 6 8 8 8 8 8 6 . . . . 
            . . . . . 6 8 8 8 8 8 6 . . . . 
            . . . . . 6 8 8 8 8 8 6 . . . . 
            . . . . . 8 8 8 8 8 8 8 . . . . 
            . . . . . 6 6 6 6 6 6 6 . . . . 
            . . . . . 6 f f f f f 6 . . . . 
            . . . . . 6 f f f f f 6 . . . . 
            . . . . . 6 6 6 6 6 6 6 . . . . 
            . . . . . 8 8 8 8 8 8 8 . . . . 
            . . . . . 8 8 8 8 8 8 8 . . . . 
            . . . . . 8 8 8 8 8 8 8 . . . . 
            . . . . . 4 8 8 8 8 8 4 . . . . 
            `, scene.backgroundImage(), 112, truck2Y)
for (let index = 0; index < 4; index++) {
            truck2Y += 1
        }
        timer.after(700, function () {
            truck2exists = false
        })
    } else {
        if (Math.percentChance(1)) {
            truck2Y = -10
            spriteutils.drawTransparentImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 6 6 6 6 6 6 6 . . . . 
                . . . . . 6 8 8 8 8 8 6 . . . . 
                . . . . . 6 8 8 8 8 8 6 . . . . 
                . . . . . 6 8 8 8 8 8 6 . . . . 
                . . . . . 8 8 8 8 8 8 8 . . . . 
                . . . . . 6 6 6 6 6 6 6 . . . . 
                . . . . . 6 f f f f f 6 . . . . 
                . . . . . 6 f f f f f 6 . . . . 
                . . . . . 6 6 6 6 6 6 6 . . . . 
                . . . . . 8 8 8 8 8 8 8 . . . . 
                . . . . . 8 8 8 8 8 8 8 . . . . 
                . . . . . 8 8 8 8 8 8 8 . . . . 
                . . . . . 4 8 8 8 8 8 4 . . . . 
                `, scene.backgroundImage(), 112, truck2Y)
truck2exists = true
            for (let index = 0; index < 4; index++) {
                truck2Y += 1
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
    if (X > 31 && X < 49 && (Y == truckY && truck_exists)) {
        score = 6
    }
    if (X > 112 && X < 128 && (Y == truck2Y && truck2exists)) {
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
        game.reset()
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
