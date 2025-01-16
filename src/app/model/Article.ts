import { Categorie } from "./Categorie";

export class Article{

    origine?:string;

    constructor(
        public id:number, 
        public libelle:string, 
        public prix:number, 
        public categorie:Categorie, 
        public description:string, 
        public date:Date = new Date, 
        public like:number = 0 
    ){}

    setOrigine(origine:string){
        this.origine = origine;

        return this;
    }
}