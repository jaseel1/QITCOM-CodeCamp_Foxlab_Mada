input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Happy)
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
    }
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Sad)
        for (let index = 0; index < 1; index++) {
            music.beginMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
        }
    }
})
input.onGesture(Gesture.FreeFall, function () {
    radio.sendNumber(0)
})
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . . .
        . # # . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . . .
        . . . . .
        . . . . .
        `)
})
