class Rectangulo {
    #area = 0;

    constructor(base = 0,altura = 0,) {
        this.base =base ;
        this.altura = altura;

    }
    calcularArea() {
        this.#area=this.base*this.altura;
        console.log(`EL area es ${this.#area}`)
    }
}

const rectangulo = new Rectangulo(10,10);
rectangulo.calcularArea();
