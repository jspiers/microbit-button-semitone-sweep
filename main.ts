function Semitones (startnote: number, interval: number) {
    let numerator: number
if (interval > 0) {
        numerator = 10595
    } else {
        numerator = 9439
    }
    let localnote: number
localnote = startnote
    for (let index = 0; index < Math.abs(interval); index++) {
        localnote = localnote * numerator / 10000
    }
    return localnote
}
input.onButtonPressed(Button.A, function () {
    if (count == 0) {
        count = 11
    } else {
        count += -1
    }
    note = Semitones(note, -1)
    music.playTone(note, music.beat(BeatFraction.Quarter))
    showLetter(count)
})
input.onButtonPressed(Button.B, function () {
    if (count == 11) {
        count = 0
    } else {
        count += 1
    }
    note = Semitones(note, 1)
    music.playTone(note, music.beat(BeatFraction.Quarter))
    showLetter(count)
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
    music.playTone(note, music.beat(BeatFraction.Quarter))
})
let sharp: number[] = []
let letters = ""
let count: number
count = 0
let note: number
note = 262
basic.showIcon(IconNames.EigthNote)
basic.forever(function () {
	
})
