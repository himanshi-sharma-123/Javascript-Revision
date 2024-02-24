// const cart = ["shoes","pants","kurta"];

// // Inversion of control issue
// createOrder(cart,function(orderId){ // passing a fn
//     proceedToPayment(orderId)
// })

// //promises

// // {data:undefined}

// const promise = createOrder(cart)

// // {data:orderId}
// promise.then(function(orderId){  // attaching a fn
//     proceedToPayment(orderId)
// })

/////////////////////////////////////////////////////////

// const GITHUB_API = "https://api.github.com/users/himanshi-sharma-123";

// const user = fetch(GITHUB_API);
// console.log(user);

// user.then(function (data) {
//   console.log(data);
// });

////////////////////////////////////////  PROMISE CHAINING
const cart = ["shoes", "pants", "kurta"];

// old (growing horizontally (pyramid of doom))
createOrder(cart, function (orderId) {
  // passing a fn
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWalletBalance();
    });
  });
});

// chaining (growing chaining)

createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId); //return is imp (this is the common mistake to take care of)
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
  });
