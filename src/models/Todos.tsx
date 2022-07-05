export default class Todos {
    id: string;
    value: string;
    isComplete: boolean;
    text: string;

        constructor(obj:any) {
            this.id=obj.id;
            this.value=obj.value;
            this.isComplete=obj.isComplete;
            this.text=obj.text;
        }
}