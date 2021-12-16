def on_pin_pressed_p0():
    global note
    music.play_tone(note, music.beat(BeatFraction.HALF))
    note = Semitones(note, 1)
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def Semitones(startnote: number, interval: number):
    # global localnote
    if interval > 0:
        numerator = 10595
    else:
        numerator = 9439
    localnote = startnote
    for index in range(abs(interval)):
        localnote = localnote * numerator / 10000
    return localnote
# localnote:  = None
basic.show_icon(IconNames.HEART)
note: = 131

def on_forever():
    pass
basic.forever(on_forever)
