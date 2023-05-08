import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../src/Services/Motorcycle.Service';
import MotorcycleODM from '../../src/Models/Motorcycle.ODM';
import { inputMotorcycle, outputAllMotorcycles } from './Utils/Motorcycle.mock';

describe('Testes de Motorcycle', function () {
  it('cria uma Motorcycle com sucesso', async function () {
    const outputMotorcycle = { id: 123456, ...inputMotorcycle };
    sinon.stub(Model, 'create').resolves(outputMotorcycle);

    const service = new MotorcycleService();
    const result = await service.createMotor(inputMotorcycle);
    expect(result).to.be.deep.equal(result);
  });

  it('retorna todas as Motorcycles', async function () {
    sinon.stub(Model, 'find').resolves(outputAllMotorcycles);

    const service = new MotorcycleService();
    const result = await service.getAll();
    expect(result).to.be.deep.equal(outputAllMotorcycles);
  });

  it('retorna a Motorcycle do id', async function () {
    sinon.stub(MotorcycleODM.prototype, 'getById').resolves(outputAllMotorcycles[1]);
    
    const service = new MotorcycleService();
    const result = await service.getById('987456');
    expect(result).to.be.deep.equal(outputAllMotorcycles[1]);
  });

  afterEach(function () {
    sinon.restore();
  });
});
