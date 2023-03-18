let Player_2 = 0
let Player_4 = 0
let Player_1 = 0
let Player_3 = 0
controller.player3.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    mp.setPlayerIndicatorsVisible(true)
    pause(500)
    mp.setPlayerIndicatorsVisible(false)
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    mp.setPlayerIndicatorsVisible(true)
    pause(500)
    mp.setPlayerIndicatorsVisible(false)
})
controller.player4.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    mp.setPlayerIndicatorsVisible(true)
    pause(500)
    mp.setPlayerIndicatorsVisible(false)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Player_2 == 0) {
        Player_2 = 1
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 8 1 1 8 1 1 1 1 1 1 
            1 1 1 1 1 1 8 1 1 8 1 1 1 1 1 1 
            1 1 1 1 1 1 8 1 1 8 1 1 1 1 1 1 
            1 1 1 1 1 1 8 1 1 8 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 8 8 8 8 8 8 8 8 1 1 1 1 
            1 1 1 1 1 8 8 8 8 8 8 1 1 1 1 1 
            1 1 1 1 1 1 8 8 8 8 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            `, SpriteKind.Player))
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 50, 50)
    } else {
        Player_2 = 0
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
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
            `, SpriteKind.Player))
    }
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Player_4 == 0) {
        Player_4 = 1
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(img`
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 7 1 1 7 1 1 1 1 1 1 
            1 1 1 1 1 1 7 1 1 7 1 1 1 1 1 1 
            1 1 1 1 1 1 7 1 1 7 1 1 1 1 1 1 
            1 1 1 1 1 1 7 1 1 7 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 7 7 7 7 7 7 7 7 1 1 1 1 
            1 1 1 1 1 7 7 7 7 7 7 1 1 1 1 1 
            1 1 1 1 1 1 7 7 7 7 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            `, SpriteKind.Player))
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four), 50, 50)
    } else {
        Player_4 = 0
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(img`
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
            `, SpriteKind.Player))
    }
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Player_1 == 0) {
        Player_1 = 1
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 2 1 1 2 1 1 1 1 1 1 
            1 1 1 1 1 1 2 1 1 2 1 1 1 1 1 1 
            1 1 1 1 1 1 2 1 1 2 1 1 1 1 1 1 
            1 1 1 1 1 1 2 1 1 2 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 2 2 2 2 2 2 2 2 1 1 1 1 
            1 1 1 1 1 2 2 2 2 2 2 1 1 1 1 1 
            1 1 1 1 1 1 2 2 2 2 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            `, SpriteKind.Player))
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 50, 50)
    } else {
        Player_1 = 0
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
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
            `, SpriteKind.Player))
    }
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Player_3 == 0) {
        Player_3 = 1
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 5 1 1 5 1 1 1 1 1 1 
            1 1 1 1 1 1 5 1 1 5 1 1 1 1 1 1 
            1 1 1 1 1 1 5 1 1 5 1 1 1 1 1 1 
            1 1 1 1 1 1 5 1 1 5 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 5 5 5 5 5 5 5 5 1 1 1 1 
            1 1 1 1 1 5 5 5 5 5 5 1 1 1 1 1 
            1 1 1 1 1 1 5 5 5 5 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            `, SpriteKind.Player))
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three), 50, 50)
    } else {
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
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
            `, SpriteKind.Player))
        Player_3 = 0
    }
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    mp.setPlayerIndicatorsVisible(true)
    pause(500)
    mp.setPlayerIndicatorsVisible(false)
})
