Mbit_IR.onPressEvent(RemoteButton.Power, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
})
Mbit_IR.onPressEvent(RemoteButton.TRight, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_SpinRight)
    basic.pause(500)
    led.stopAnimation()
})
Mbit_IR.onPressEvent(RemoteButton.Right, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Right)
    basic.pause(500)
    led.stopAnimation()
})
Mbit_IR.onPressEvent(RemoteButton.Up, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
    basic.pause(500)
    led.stopAnimation()
})
Mbit_IR.onPressEvent(RemoteButton.Left, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Left)
    basic.pause(500)
    led.stopAnimation()
})
Mbit_IR.onPressEvent(RemoteButton.Down, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Back)
    basic.pause(500)
    led.stopAnimation()
})
Mbit_IR.onPressEvent(RemoteButton.TLeft, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_SpinLeft)
    basic.pause(500)
    led.stopAnimation()
})
Mbit_IR.onPressEvent(RemoteButton.BEEP, function () {
    Tinybit.Music_Car(Tinybit.enMusic.dadadum)
})
Mbit_IR.onPressEvent(RemoteButton.NUM1, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    Mbit_IR.init(Pins.P8)
})
