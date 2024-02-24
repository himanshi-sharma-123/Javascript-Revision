// ISSUES WITH CALLBACK

//1. CALLBACK HELL

const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});

//2. INVERSION OF CONTROL : We lose control from our program because we pass the callback function into another fn and give control of this fn to other fn and now we dont know whether the fn ever executed or callback or not.

const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function () {
  api.proceedToPayment(function () {});
});
