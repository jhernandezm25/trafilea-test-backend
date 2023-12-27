class NumbersController {
    private static instance: NumbersController;
    private types: (string | number)[] = ['Type 2', 'Type 1', 'Type 3'];
  
    private constructor() {}
  
    static getInstance(): NumbersController {
        console.log('Calling getInstance...');
      if (!NumbersController.instance) {
        NumbersController.instance = new NumbersController();
      }
      return NumbersController.instance;
    }
  
    printNumbers(start: number | undefined, end: number| undefined): void {
      start = start || 1
      end = end || 100  
      for (let i = start; i <= end; i++) {
        const type = (i % 3 === 0 ? 2 : 0) + (i % 5 === 0 ? 1 : 0) - 1;
        console.log(`Index -> ${i} ->`, this.types[type] || i);
      }
    }
  }
  
  export default NumbersController;
  