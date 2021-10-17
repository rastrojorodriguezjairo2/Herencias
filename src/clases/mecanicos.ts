import {Relojes} from './relojes';
export class Mecanicos extends Relojes {
    private _engranajesDorados: boolean;
    private _colorM;
    constructor(id: number, tipoCorrea: string, energia: string, precioBase: number, engranajesDorados: boolean, colorM: string){
        super(id, tipoCorrea, energia, precioBase);
        this._engranajesDorados = engranajesDorados;
        this._colorM = colorM;
    }
    get engranajesDorados(){
        return this._engranajesDorados;
    }
    get color(){
        return this._colorM;
    }
    precio() {
        let precio;
        precio = super.precio();
        if (this._engranajesDorados == true){
            precio += 0.7 * precio;
        }
        return precio;
    }
    todo(){
        let resultado: string
        resultado = `${super.todo()}, Mecanismo: ${this._engranajesDorados}, Color: ${this._colorM}`
        return resultado
    }
}
exports.Mecanicos = Mecanicos;