import ICar from '../../../src/Interfaces/ICar';

const inputCar: ICar = {
  model: 'Golf',
  year: 2014,
  color: 'Azul',
  status: true,
  buyValue: 28000,
  doorsQty: 4,
  seatsQty: 5,
};

const allOutputCars: ICar[] = [
  {
    id: '123456',
    model: 'Golf',
    year: 2014,
    color: 'Azul',
    status: true,
    buyValue: 28000,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '987654',
    model: 'Celta',
    year: 2017,
    color: 'Preto',
    status: true,
    buyValue: 20000,
    doorsQty: 4,
    seatsQty: 5,
  },
];

const updatedCar: ICar = {
  id: '987654',
  model: 'Celta',
  year: 2017,
  color: 'Preto',
  status: true,
  buyValue: 15000,
  doorsQty: 4,
  seatsQty: 5,
};

const updatedCarNoId: ICar = {
  model: 'Celta',
  year: 2017,
  color: 'Preto',
  status: true,
  buyValue: 15000,
  doorsQty: 4,
  seatsQty: 5,
};

export { inputCar, allOutputCars, updatedCar, updatedCarNoId };
