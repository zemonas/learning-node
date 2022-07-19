const amount = 12;

if (amount < 10) {
  console.log("You are not a VIP");
} else {
  console.log("You are a VIP");
}

console.log(`You are ${amount > 13 ? "a VIP" : "not a VIP"}`);

console.log(__dirname);
setInterval(() => {
  console.log(`${__filename}`);
}, 1000);
