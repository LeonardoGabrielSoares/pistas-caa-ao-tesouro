basic.forever(function () {
    basic.showString("Pistas")
    basic.pause(2000)
    for (let index = 0; index < 4; index++) {
        basic.showString("ir para o sitio que tem uma televisao grande")
    }
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        # . . . .
        # . . . .
        # # # # #
        . # . . #
        `)
    basic.pause(10000)
    basic.showLeds(`
        # # . # #
        # # . # #
        # # . # #
        # # . # #
        # # . # #
        `)
    basic.pause(60000)
    basic.showString("por a mao la dentro e consegui")
})
