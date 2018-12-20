

export class MyCalculator {

    constructor(a) {
        this.result = a;
    }

    Add(a)      {this.result+=a; return this;}
    Subtract(a) {this.result-=a; return this;}
    Multiply(a) {this.result*=a; return this;}

    Value() {return this.result;}
}