import 'mocha'
import * as sinon from 'sinon';
import { expect } from 'chai';
import NumbersController from '../../controller/numbers.controller'; // Ajusta la ruta según tu estructura


describe('NumbersController', function () {
  let numbersController: NumbersController;
  let consoleLogStub: sinon.SinonStub;
  beforeEach(function () {
    numbersController = NumbersController.getInstance(); // Instancia directa en lugar de getInstance
  });

  // Prueba para el método saveNumber
  it('should save a number and return the same number', function () {
    const number = 42;
    const result = numbersController.saveNumber(number);
    expect(result).to.equal(number);
  });

  // Prueba para el método getNumberValue
  it('should return the correct value for a saved number', function () {
    const number = 42;
    numbersController.saveNumber(number);
    const result = numbersController.getNumberValue(number);
    expect(result).to.equal('Type 1');
  });

  it('should return the correct value for a saved number', function () {
    const number = 99;
    const result = numbersController.getNumberValue(number);
    expect(result).to.equal('Number not found');
  });

  it('should return the entire numbers collection', function () {
    const collection = numbersController.getAllNumbers();
    expect(collection).not.to.be.null;
  });

 
});
