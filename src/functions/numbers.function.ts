import { Request, Response } from 'express'
import NumbersController from '../controller/numbers.controller'
import { CreateNumbersType } from '../common/types'
import { messages } from '../common/messages'

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

  saveNumber(req: Request, res: Response): void {
    try {
      const body: number = req.body.data
      numbersController.saveNumber(body)
      res.status(200).json(numberFunction.buildResponse(messages.SAVE ,body))
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }

  getNumberValue(req: Request, res: Response): void {
    try {
      const numberInfo: number = +req.params.numberInfo
      const response = numbersController.getNumberValue(numberInfo)
      res.status(200).json(numberFunction.buildResponse(messages.GET , response))
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }

  getAllNumbers(req: Request, res: Response): void {
    try {
      const response = numbersController.getAllNumbers()
      res.status(200).json(numberFunction.buildResponse(messages.GET , response))
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }

  private buildResponse(message:string, data: any) {
    return {message, data}
  }
}

const numberFunction = new NumberFunction()
export default numberFunction
