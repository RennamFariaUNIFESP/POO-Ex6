export class Bike {
    constructor(
      public name: string,
      public type: string,
      public bodySize: number,
      public maxLoad: number,
      public rate: number,
      public description: string,
      public ratings: number,
      public imageUrls: string[],
      public available: boolean = true,
      public localizationX: number = 0,     //Ex:41.895550
      public localizationY: number = 0,     //Ex:12.477389
      public id?: string
    ) { }
  }