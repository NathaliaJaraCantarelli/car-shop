import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/Motorcycle.ODM';
import Motorcycle from '../Domains/Motorcycle';

class MotorcycleService {
  motorCreateDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) return new Motorcycle(motorcycle);
    return null;
  }

  public async createMotor(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    return this.motorCreateDomain(newMotorcycle);
  }

  public async getAll() {
    const motorcycle = new MotorcycleODM();
    const allMotorcycles = await motorcycle.getAll();
    const result = allMotorcycles.map((motor) => this.motorCreateDomain(motor));
    return result;
  }

  public async getById(id: string) {
    const motorcycle = new MotorcycleODM();
    const motorcycleId = await motorcycle.getById(id);
    return this.motorCreateDomain(motorcycleId);
  }
}

export default MotorcycleService;
