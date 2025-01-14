export class Article{

    origine?:string;

    constructor(
        public id:number, 
        public libelle:string, 
        public prix:number, 
        public like:number 
    ){}
}