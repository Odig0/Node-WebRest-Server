



export class TodoEntity {

    constructor(
        public id: number,
        public text: string,
        public completedAt?: Date|null
    ){}
    get isCompleteted(){
        return !!this.completedAt;
    }

    
}
