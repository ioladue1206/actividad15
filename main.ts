let D = 0
basic.forever(function () {
    D = input.compassHeading()
    if (Math.abs(D - 45) <= 22) {
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (Math.abs(D - 90) <= 22) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            . . . . .
            . . . . .
            `)
    } else if (Math.abs(D - 135) <= 22) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # . . .
            # . . . .
            `)
    } else if (Math.abs(D - 180) <= 22) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (Math.abs(D - 225) <= 22) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . # .
            . . . . #
            `)
    } else if (Math.abs(D - 270) <= 22) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # #
            . . . . .
            . . . . .
            `)
    } else if (Math.abs(D - 315) <= 22) {
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
