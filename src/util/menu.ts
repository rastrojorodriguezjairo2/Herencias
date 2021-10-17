import { leerTeclado } from './entradaTeclado'
export let menu = async () => {
    let menu1: number
    console.log('\n')
    console.log('1.- Crear objetos')
    console.log('2.- Lista de contenido')
    console.log('3.- Modificar información de objeto')
    console.log('4.- Borrar algún objeto')
    console.log('5.- Ver información de un objeto')
    console.log('6.- Salir')
    menu1 = parseInt( await leerTeclado('opción: ') )
    return menu1
}
export const tipo = async () => {
    let menu2: number
    console.log('\n')
    console.log('1.-Relojes')
    console.log('2.-Mecanico')
    console.log('3.-Digital')
    console.log('4.-Salir')
    menu2 = parseInt(await leerTeclado('opción: '))
    return menu2
}