import { leerTeclado } from './util/entradaTeclado'
import { menu, tipo } from './util/menu'
import {Relojes} from './clases/relojes'
import {Digitales} from './clases/digitales'
import {Mecanicos} from './clases/mecanicos'

let reloj: Relojes
let digitales: Digitales
let mecanicos: Mecanicos
let relojes: Array<Relojes> = new Array<Relojes>()

relojes[0] = new Relojes(1, "Cuero", "pila", 25)
relojes[1] = new Mecanicos(2, "Oro", "cuerda", 50, true, "negro")
relojes[2] = new Mecanicos(3, "Plata", "pila", 30, false, "Gris")
relojes[3] = new Digitales(4, "Plastico", "cuerda", 15, "azul", "24H")
relojes[4] = new Digitales (5, "Oro", "pila", 75, "marron", "12H")

const main = async () => {
    let menu1:number
    let menu2:number
    let reloj: Relojes;
    let digital: Digitales;
    let gold: string;
    let mecanicos: Mecanicos;
    let relojes: Array<Relojes> = new Array<Relojes>();
    
    do {
        menu1 = await menu()
        switch(menu1) {
            case 1:
                console.log('\n')
                let id:number, tipoCorrea: string, energia: string, precioBase: number;
                let colorD: string, formato: string
                let engranajesDorados: boolean, colorM: string
                let dorado: string
                let menu2: number
                do {
                    menu2 = await tipo()
                    switch(menu2) {
                        case 1:
                            id= parseInt(await leerTeclado("Identificador del reloj: "))
                            tipoCorrea= await leerTeclado("¿De que material es la correa?: ")
                            energia= await leerTeclado("El reloj ¿es de cuerda o de pila?: ")
                            precioBase= parseInt(await leerTeclado("Introduzca el precio base del reloj: "))
                        break
                        case 2: 
                            id= parseInt(await leerTeclado("Identificador del reloj: "))
                            tipoCorrea= await leerTeclado("¿De que material es la correa?: ")
                            energia= await leerTeclado("El reloj ¿es de cuerda o de pila?: ")
                            precioBase= parseInt(await leerTeclado("Introduzca el precio base del reloj: "))
                            dorado = await leerTeclado("¿El mecanismo del reloj es dorado?: ")
                            if (dorado == "si" || dorado == "Si" || dorado == "SI") {
                             engranajesDorados = true
                            } else {
                                engranajesDorados = false
                         }
                            colorM = await leerTeclado("¿De que color es el reloj?: ")
                        break
                        case 3:
                            id= parseInt(await leerTeclado("Identificador de reloj: "))
                            tipoCorrea= await leerTeclado("¿De que material es la correa?: ")
                           energia= await leerTeclado("El reloj ¿es de cuerda o de pila?: ")
                            precioBase= parseInt(await leerTeclado("Introduzca el precio base del reloj: "))
                            colorD= await leerTeclado("De que color sera el reloj digital")
                            formato= await leerTeclado("¿En que formato da la hora el reloj?: ")
                        break
                    }
                }while (menu2!=4)
            case 2:
                console.log('\n')
                console.log(relojes)
                break
            case 3:
                
                console.log('\n')
                let modi= parseInt(await leerTeclado('Id del reloj que quiere cambiar'))
                let tipoCorrea1= await leerTeclado("¿De que es la correa?: ")
                let energia1= await leerTeclado("Cual es la fuente de alimentación: ")
                let preciobase1= parseInt(await leerTeclado("¿Nuevo precio?: "))

                let nuevo = new Relojes (modi, tipoCorrea1, energia1, preciobase1)

                let engranajesDorados1: boolean;
                let colorCifras1= await leerTeclado("De que color son los números: ")
                let formato1 = await leerTeclado("Define el formato del reloj: ")
                let diginuevo = new Digitales (modi, tipoCorrea1, energia1, preciobase1, colorCifras1, formato1)
                let gold= await leerTeclado("Tipo de engranajes: ")
                        if (gold == "si" || gold == "Si" || gold == "SI") {
                            engranajesDorados1 = true
                        } else {
                            engranajesDorados1 = false
                        }
            
                let colorM1 = await leerTeclado ("Color del reloj: ")
                let mecaNuevo = new Mecanicos (modi, tipoCorrea1, energia1, preciobase1, engranajesDorados1, colorM1)
                
                let modifica = relojes.findIndex(relojes => relojes.id==modi)
                relojes[modifica] = nuevo;
                relojes[modifica] = diginuevo;
                relojes[modifica] = mecaNuevo;
                break
            case 4:
                console.log('\n')
                let eliminar = parseInt(await leerTeclado("Introduzca el id del reloj a eliminar: "))
                let borrar = relojes.findIndex(relojes=>relojes.id==eliminar)
                let suprimir = relojes.splice(borrar,1)
                break
            case 5:
                console.log('\n')
                let ver = parseInt(await leerTeclado("Escriba el id del reloj que quiere ver: "))
                let info = relojes.findIndex(relojes=>relojes.id==ver)
                console.log(relojes[info])
                break
            default:
                console.log('\n')
                console.log("Esa opción no es valida")
                break
            } 
    } while (menu1 !=6)
    {console.log("Gracias por participar")}
}
main()