export class Recepie {
  
  public name: string;
  public description: string;
  public imagePath: string;

  /* 
  Add a constructor to the  Recepie blueprint
  so that we can instantiate this with the "new" Keyword 
  */
  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
