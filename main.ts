input.onButtonPressed(Button.A, function () {
    if (semitone == 0) {
        semitone = 11
    } else {
        semitone += -1
    }
    freq = adjustFreq(freq, -1)
    music.playTone(freq, music.beat(BeatFraction.Eighth))
    showLetter(semitone)
})
function adjustFreq (startfreq: number, interval: number) {
    let numerator: number
if (interval > 0) {
        numerator = 10595
    } else {
        numerator = 9439
    }
    let localfreq: number
localfreq = startfreq
    for (let index = 0; index < Math.abs(interval); index++) {
        localfreq = localfreq * numerator / 10000
    }
    return localfreq
}
input.onButtonPressed(Button.B, function () {
    if (semitone == 11) {
        semitone = 0
    } else {
        semitone += 1
    }
    freq = adjustFreq(freq, 1)
    music.playTone(freq, music.beat(BeatFraction.Eighth))
    showLetter(semitone)
})
function showLetter (num: number) {
    letters = "CCDDEFFGGAAB"
    sharp = [
    0,
    1,
    0,
    1,
    0,
    0,
    1,
    0,
    1,
    0,
    1,
    0
    ]
    basic.showString(letters.charAt(num))
    if (sharp[num] == 1) {
        led.plot(4, 0)
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playTone(freq, music.beat(BeatFraction.Quarter))
})
let sharp: number[] = []
let letters = ""
let semitone: number
let freq: number
semitone = 0
freq = 262
bluetooth.startLEDService()
basic.showIcon(IconNames.EigthNote)
