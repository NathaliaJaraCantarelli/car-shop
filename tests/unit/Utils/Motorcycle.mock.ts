import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

const inputMotorcycle: IMotorcycle = {
  model: 'Triumph',
  year: 2020,
  color: 'Preta',
  status: true,
  buyValue: 70000,
  category: 'Trail',
  engineCapacity: 900,
};

const outputAllMotorcycles: IMotorcycle[] = [
  {
    id: '123456',
    model: 'Triumph',
    year: 2020,
    color: 'Preta',
    status: true,
    buyValue: 70000,
    category: 'Trail',
    engineCapacity: 900,
  },
  {
    id: '987456',
    model: 'Bandit',
    year: 2021,
    color: 'Branca',
    status: true,
    buyValue: 40000,
    category: 'Street',
    engineCapacity: 1250,
  },
];

export { inputMotorcycle, outputAllMotorcycles };
