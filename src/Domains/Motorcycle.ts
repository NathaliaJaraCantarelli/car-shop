import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motorcycle: IMotorcycle) {
    super(
      motorcycle.id, 
      motorcycle.model,
      motorcycle.year,
      motorcycle.color,
      motorcycle.buyValue,
      motorcycle.status,
    );
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
  }

  public getId() {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getModel(): string {
    return this.model;
  }

  public setModel(model: string): void {
    this.model = model;
  }

  public getYear(): number {
    return this.year;
  }

  public setYear(year: number): void {
    this.year = year;
  }

  public getColor(): string {
    return this.color;
  }

  public setColor(color: string): void {
    this.color = color;
  }

  public getBuyValue(): number {
    return this.buyValue;
  }

  public setBuyValue(buyValue: number): void {
    this.buyValue = buyValue;
  }

  public getStatus(): boolean {
    return this.status;
  }

  public setStatus(status: boolean): void {
    this.status = status;
  }

  public getCategory(): string {
    return this.category;
  }

  public setCatefory(category: string): void {
    this.category = category;
  }

  public getEngineCapacity(): number {
    return this.engineCapacity;
  }

  public setEngineCapacity(engineCapacity: number): void {
    this.engineCapacity = engineCapacity;
  }
}

export default Motorcycle;