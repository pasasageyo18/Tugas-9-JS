let motor = {
  type: "kopling",
  nama: "JupiterMX",
  warna: "Merah",
  harga: 200000000,
};

console.log(motor);
motor.warna = "biru";
motor.harga = 100000;
for (let i in motor) {
  console.log(motor[i]);
}
