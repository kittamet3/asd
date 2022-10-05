function GO () {
    MyRobotBit.TimePAUSE(10000)
    MyRobotBit.MotorON(motorSEL.M12, motorDIR.Forward, 50)
    MyRobotBit.TimePAUSE(2000)
    MyRobotBit.RotateNOTIME(Turn.Right, 33)
    MyRobotBit.TimePAUSE(495)
    MyRobotBit.MotorON(motorSEL.M12, motorDIR.Forward, 50)
    MyRobotBit.TimePAUSE(400)
    MyRobotBit.RotateNOTIME(Turn.Left, 33)
    MyRobotBit.TimePAUSE(510)
    MyRobotBit.MotorON(motorSEL.M12, motorDIR.Forward, 50)
    MyRobotBit.TimePAUSE(1000)
    MyRobotBit.motorOFF(motorSEL.M12, StopMode.Brake)
    MyRobotBit.TimePAUSE(500000)
}
while (!(input.buttonIsPressed(Button.A))) {
	
}
GO()
