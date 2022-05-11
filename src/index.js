const fcl = require("@onflow/fcl");
console.log(fcl);

fcl.config({
    "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn", // Endpoint set to Testnet
  })
console.log(fcl.config);


function authenticate() {
    fcl.authenticate();
}

function logIn() {
    fcl.logIn();
}

function signUp() {
    fcl.signUp();
}

function unauthenticate() {
    fcl.unauthenticate();
}

function currentUser() {
    fcl.currentUser();
}