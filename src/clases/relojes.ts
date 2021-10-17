export class Relojes {
    private _id: number;
    private _tipoCorrea: string;
    private _energia: string;
    protected _precioBase: number;

    constructor(id:number, tipoCorrea: string, energia: string, precioBase: number){
        this._id = id
        this._tipoCorrea = tipoCorrea;
        this._energia = energia;
        this._precioBase = precioBase;
    }
    get id() {
        return this._id
    }
    get tipoCorrea(){
        return this._tipoCorrea;
    }
    get energia(){
        return this._energia;
    }
    get precioBase(){
        return this._precioBase;
    }

    precio(): number{
        let precio: number;
        precio = this._precioBase;
        if (this._tipoCorrea == "Oro" || this._tipoCorrea == "oro" || this._tipoCorrea == "ORO"){
            precio += 1.5 * precio;
        } else if(this._tipoCorrea == "Plata" || this.tipoCorrea == "plata" || this.tipoCorrea == " PLATA"){
            precio += 0.2 * precio;
        } 
        return precio;
    }
    todo() {
        return `Identificador: ${this._id}, Tipo de Correa: ${this._tipoCorrea}, Fuente de alimentación: ${this._energia}, Precio Base: ${this._precioBase}`;
    }
}