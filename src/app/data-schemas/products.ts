//TODO: move this to module to share with api
export class Product {
  _id: number;
  name: string;
  description: string;
  price: number;
  constructor(_id: number = null, name: string = null, description: string = null, price: number = null) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.price = price;
  }
}
