class NumbersController {
  private static instance: NumbersController
  private types: (string | number)[] = ['Type 2', 'Type 1', 'Type 3']
  private numbersCollection: { [key: number]: string | number } = {}

  private constructor() {}

  static getInstance(): NumbersController {
    if (!NumbersController.instance) {
      NumbersController.instance = new NumbersController()
    }
    return NumbersController.instance
  }

  printNumbers(start: number | undefined, end: number | undefined): void {
    start = start || 1
    end = end || 100
    for (let i = start; i <= end; i++) {
      console.log(`Index -> ${i} ->`, this.calculateType(i))
    }
  }

  saveNumber(number: number): number {
    this.numbersCollection[number] = this.calculateType(number);
    console.log(this.numbersCollection)
    return number
  }
  getNumberValue(number: number): string | number {
    return this.numbersCollection[number] || 'Number not found'
  }

  getAllNumbers(): { [key: number]: string | number } {
    return this.numbersCollection
  }

  private calculateType(i: number): string | number {
    const type = ((i % 3 === 0) as unknown as number) * 2 + ((i % 5 === 0) as unknown as number) - 1;
    return type !== -1 ? this.types[type] : i
  }
}

export default NumbersController
