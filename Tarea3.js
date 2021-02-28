
/* 
Nombre: Jorge Lagos A
Email: jor.lagos.1988@gmail.com
*/

/* Ejercicio 1 */

const ordersByAndContainsLechugaAndPalta = () => {
    const orders = sandwichOrders.filter(
        sandwichOrder => sandwichOrder.ingredients.includes('lechuga') && sandwichOrder.ingredients.includes('palta')
    )

    return orders
}


/* Ejercicio 2 */

const orderById = (id) => {
    const order = sandwichOrders.find(
        sandwichOrder => sandwichOrder.id === id
    )

    let message = `No se encontró la orden con id (${id})`;
    if ( order ) {
        const { ordered, protein, bread } = order;
        message = `La orden fue realizada el (${ordered}), la orden llevó (${protein}) y (${bread}).`;
    }

    return message;
}


/* Ejercicio 3 */
// Creo que esta esta mala profe XD
const orderByIdAndContainsPepinillos = (id) => {
    const order = sandwichOrders.every(
        sandwichOrder => sandwichOrder.id === id && sandwichOrder.ingredients.includes('pepinillos')
    )

    return order;
}


/* Ejercicio 4 */

const ordersByDate = (fecha) => {
    const orders = sandwichOrders.filter(
        sandwichOrder => sandwichOrder.ordered === fecha
    )

    return `Se encontraron ${orders.length} ordenes para la fecha ${fecha}`;
}


/* Ejercicio 5 */

const ordersDatesAndContainsNotBurgerAndCebollaCaramelizada = () => {
    const orders = sandwichOrders.filter(
        sandwichOrder => sandwichOrder.protein === 'not burger' && sandwichOrder.ingredients.includes('cebolla caramelizada')
    ).map(
        sandwichOrder => sandwichOrder.ordered
    )

    return orders;
}
