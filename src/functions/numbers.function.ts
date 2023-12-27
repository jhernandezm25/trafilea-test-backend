import { Request, Response } from 'express'
import NumbersController from '../controller/numbers.controller'
import { CreateNumbersType } from '../common/types'

const numbersController: NumbersController = NumbersController.getInstance()

class NumberFunction {
  constructor() {}

  printNumbers(req: Request, res: Response): void {
    try {
      const body: CreateNumbersType = req.body
      numbersController.printNumbers(body.start, body.end)
      res.status(200).json({ data: 'Please check the console' })
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }
}

const numberFunction = new NumberFunction()
export default numberFunction
