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
}

export default CarService;