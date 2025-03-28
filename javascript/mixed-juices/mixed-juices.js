// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
    case 'Green Garden': /* to make an or you can just mutliply cases */
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  };
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let nb_limes = 0
  let wedgesCut = 0;
  if (limes.length == 0) return 0;
  while (nb_limes < limes.length) {
    if (wedgesCut >= wedgesNeeded) {
      break;
    }   
    switch (limes[nb_limes]) {
      case 'small':
        wedgesCut += 6;
        break;
      case 'medium':
        wedgesCut += 8;
        break;
      case 'large':
        wedgesCut += 10;
        break;
    } 
    nb_limes++;
  }
  return nb_limes;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  if (timeLeft <= 0) return orders;
  else if (orders.length == 0) return [];

  let nb_orders = orders.length;
  let i = 0
  while (timeLeft > 0 && i <= nb_orders) {
    timeLeft -= timeToMixJuice(orders[i]);
    i++;
  }

  return orders.slice(i);
}
