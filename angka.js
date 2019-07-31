// * Belajar Modules
// var kalkulasi = require('./kalkulasi');
// var a = 12,
//     b = 6;
// console.log("Operasi Tambah " + kalkulasi.tambah(a, b));
// console.log("Operasi Bagi " + kalkulasi.bagi(a, b));
// console.log("Operasi kali " + kalkulasi.kali(a, b));
// console.log("Operasi kurang " + kalkulasi.kurang(a, b));

// var fs = require('fs');
// fs.printMessages = function (str) {
//     console.log("Pesan dari Guntur");
//     console.log(str);
// }
// module.exports = fs
// fs.printMessages("Sukses")

// belajar Emitter
// const EventEmitter = require("events").EventEmitter;
// class Rabbit extends EventEmitter {}
// class food {}
// let myRabbit = new Rabbit();
// myRabbit.on("chew", item => {
//     if (item instanceof food) {
//         console.log("Good Rabbit");
//     } else {
//         console.log(`Time to buy Another ${item}`);
//     }
// })

// myRabbit.emit("chew", "Bone");
// const carrot = new food();
// myRabbit.emit("chew", carrot);

// const Emitter=require("events");
// class myEmitter extends Emitter{};
// var emitter=new myEmitter();

// emitter
// .on("messages",function(){
//     console.log("Satu Pesan Emitter");
// })
// .on("messages",function(){
//     console.log("Dua Pesan Emitter");
// })
// .on("data",function(){
//     console.log("pesan untuk data");
// });
// console.log(emitter.eventNames());
// emitter.removeAllListeners("data");
// console.log(emitter.eventNames());

// * Belajar Buff
// const buf=Buffer.allocUnsafe(100);
// const len= buf.write("Halo Saya Guntur Budi Kurniawan");
// console.log("Jumlah String :"+len);

const buf = Buffer.allocUnsafe(26);
for (let i = 0; i < 26; i++) {
    buf[i] = i + 65;
};
console.log(buf.toString('utf8'));
console.log(buf.toString('ascii', 0, 5));

const checkAscii = new Buffer("guntur budi kurniawan");
const json = checkAscii.toJSON(checkAscii);
console.log(json);