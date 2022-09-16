let ridePayment = (value) => {
  let distance = Math.ceil(Math.random()*20);
  return value * distance;
}

let randomIt = (arr) => {
  let ran = Math.floor(Math.random() * arr.length);
  return arr[ran].id
}

module.exports = {ridePayment, randomIt};