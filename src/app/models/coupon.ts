export class Coupon {
    private name: string;
private lastPrice: number;
private newPrice: number;
private discountRate: number;
private image: string;
private description: string;
private smallLetters: string;

constructor(name:string, lastPrice:number, newPrice:number, discountRate:number, image:string, description:string, smallLetters:string) {
        this.name=name;
        this.lastPrice=lastPrice;
        this.newPrice=newPrice;
        this.discountRate=discountRate;
        this.image=image;
        this.description=description;
        this.smallLetters=smallLetters;
    }
}

