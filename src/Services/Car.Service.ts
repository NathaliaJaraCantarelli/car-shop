import ICar from '../Interfaces/ICar';
import CarODM from '../Models/Car.ODM';
import Car from '../Domains/Car';

class CarService {
  carCreateDomain(car: ICar | null): Car | null {
    if (car) return new Car(car);
    return null;
  }

  public async createCar(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.carCreateDomain(newCar);
  }

  public async getAll() {
    const carODM = new CarODM();
    const cars = await carODM.getAll();
    const allCars = cars.map((car) => this.carCreateDomain(car));
    return allCars;
  }

  public async findById(id: string) {
    const carODM = new CarODM();
    const car = await carODM.getById(id);
    return this.carCreateDomain(car);
  }
}

export default CarService;