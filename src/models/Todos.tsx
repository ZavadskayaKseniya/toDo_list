import { v4 as uuid } from 'uuid';

export default class Todos {
  id: string;

  isComplete: boolean;

  text: string;

  constructor(obj:any) {
    this.id=uuid();
    this.isComplete=obj.isComplete;
    this.text=obj.text;
  }
}