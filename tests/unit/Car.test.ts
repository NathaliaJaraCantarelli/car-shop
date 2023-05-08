import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { inputCar, allOutputCars, updatedCar, updatedCarNoId } from './Utils/Car.mock';
import CarService from '../../src/Services/Car.Service';
import CarODM from '../../src/Models/Car.ODM';

describe('Criar um novo carro', function () {
  it('é criado um novo carro', async function () {
    const outputCar = { id: 123456, ...inputCar };

    sinon.stub(Model, 'create').resolves(outputCar);

    const service = new CarService();
    const result = await service.createCar(inputCar);

    expect(result).to.be.deep.equal(outputCar);
  });

  it('retorna todos os carros', async function () {
    sinon.stub(Model, 'find').resolves(allOutputCars);

    const service = new CarService();
    const result = await service.getAll();
    expect(result).to.be.deep.equal(allOutputCars);
  });

  it('retorna o carro pelo id', async function () {
    sinon.stub(CarODM.prototype, 'getById').resolves(allOutputCars[1]);

    const service = new CarService();
    const result = await service.findById('987654');

    expect(result).to.be.deep.equal(allOutputCars[1]);
  });

  it('atualiza um carro', async function () {
    sinon.stub(CarODM.prototype, 'getById')
      .returns(Promise.resolve(allOutputCars[1]));
    sinon.stub(CarODM.prototype, 'update').returns(Promise.resolve(updatedCar));
    const service = new CarService();
    const result = await service.updateCar('987654', updatedCarNoId);
    expect(result).to.be.deep.equal(updatedCar);
  });

  afterEach(function () {
    sinon.restore();
  });
});