import { ObjectId } from "mongodb";

export default class movies {
    constructor(
   public     id: number,
   public title: string,
   public year: number,
   public genre: string[],
   public rating: number,
   public director: string,
   public actors: string[],
   public plot: string,
   public poster: string,
   public trailer: string,
   public runtime: number,
   public awards: string,
   public country: string,
   public language: string,
   public boxOffice: string,
   public production: string,
   public website: string
    ){}
    
  }