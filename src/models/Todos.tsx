import { v4 as uuid } from 'uuid';
export default class Todos {
    id: string;
    isComplete: boolean;
    text: string;

        constructor(text: string) {
            this.id=uuid();
            this.isComplete=false;
            this.text=text;
        }
}