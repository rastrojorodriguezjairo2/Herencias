import {Relojes} from './relojes';
export class Digitales extends Relojes {
    private _colorD: string;
    private _formato: string;
    constructor(id: number, tipoCorrea: string, energia: string, precioBase: number, colorD: string, formato: string){
        super(id, tipoCorrea, energia, precioBase);
        this._colorD = colorD;
        this._formato = formato;
    }
    get colorCifras(){
        return this._colorD;
    }
    get formato(){
        return this._formato;
    }
    todo(){
        let solucion: string
        solucion = `${super.todo()}, Color de cifras: ${this._colorD}, Formato: ${this.formato} `
        return solucion
    }
}
exports.Digitales = Digitales;