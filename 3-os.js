const os = require("os");
console.log(os);
const user = os.userInfo();
console.log(user);
const cpu = os.cpus();
console.log(cpu);
console.log(`The System Uptime is ${os.uptime() / 3600} hours`);
const currentOS = {
  platform: os.platform(),
  name: os.hostname(),
  release: os.release(),
  type: os.type(),
  arch: os.arch(),
  freeMemory: os.freemem(),
};
console.log(currentOS);
