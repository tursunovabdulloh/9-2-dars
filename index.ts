// vazifa

///////////////

// 1111111111111111111111111111111111111111111111111111111111111 basic types and unions

// SAVOLLLLLLLLLLLLLLLLLLL

// a) Quyidagi o'zgaruvchilarni to'g'ri TypeScript turlari bilan e'lon qiling:
// let ism: string = "ikrom";
// let yosh: number = 22;
// let talabami: boolean = true;
// let hobby: string | null = "reading books";

// b) Ushbu funksiyani tugallang. U raqam yoki string qabul qilishi va
// har doim string qaytarishi kerak.
// function stringgaAylantir(qiymat: number | string): string {
//   return qiymat.toString();
// }

// const raqam = 55;
// const soz = "djdjjdjdjdj";

// console.log(stringgaAylantir(raqam));
// console.log(stringgaAylantir(soz));

/////////////////////////

// 2222222222222222222222222222222222222222222222222222222222222. Objects va Interfaces

// SAVOLLLLLLL

// a) "Kitob" uchun interface yarating. Unda quyidagi xususiyatlar bo'lishi kerak:
// - sarlavha (string)
// - muallif (string)
// - nashrYili (number)
// - sahifalarSoni (number)
// - mavjud (boolean)

// interface Kitob {
//   sarlavha: string;
//   muallif: string;
//   nashrYili: number;
//   sahifalarSoni: number;
//   mavjud: boolean;
// }

// b) Kitob interfeysi asosida kamida 3 ta kitob obyektini yarating

// c) Quyidagi funksiyani tugallang. U Kitob obyektini qabul qiladi va
// kitob haqida ma'lumotni string ko'rinishida qaytaradi.

//  JAVOBBBBBBBBBBBBBBBBBBBBBBBBBBB

// function kitobHaqidaMalumot(kitob: Kitob): string {
//    return `Sarlavha: ${kitob.sarlavha}, Muallif: ${kitob.muallif}, Nashr Yili: ${kitob.nashrYili}, Sahifalar soni: ${kitob.sahifalarSoni}, Mavjud: ${kitob.mavjud ? 'true' : 'false'}`
// };

// const  kitob1 : Kitob = {
//    sarlavha: "Sarlaha",
//   muallif :  "mullif",
//   nashrYili:  2020,
//   sahifalarSoni:  220,
//   mavjud: true,
// }
// const  kitob2: Kitob = {
//   sarlavha: "Sarlaha2",
//   muallif:  "mullif2",
//   nashrYili: 2021,
//   sahifalarSoni: 255,
//   mavjud: false,
// };

// const  kitob3: Kitob  = {
//     sarlavha: "Sarlaha",
//   muallif:  "mullif",
//   nashrYili:  2020,
//   sahifalarSoni: 220,
//   mavjud: true,
// };

// console.log(kitobHaqidaMalumot(kitob1));
// console.log(kitobHaqidaMalumot(kitob2));
// console.log(kitobHaqidaMalumot(kitob3));

//////////////////////////////

// 3333333333333333333333333333333333333333333333333333333333333. Amaliy mashq: Kutubxona tizimi

// SAVOLLLLLLLLLLLLLLLLLLLLLLLLLL

// a) "Kutubxona" nomli class yarating. Unda quyidagi xususiyatlar bo'lishi kerak:
// - kitoblar (Kitob turidagi array)
// - kitobQoshish(kitob: Kitob) metodi
// - kitobniTopish(sarlavha: string) metodi
// - mavjudKitoblarSoni() metodi

// class Kutubxona {

// }

// b) Kutubxona classidan obyekt yarating va unga bir nechta kitoblar qo'shing

// c) Qo'shilgan kitoblar orasidan birini izlab toping

// d) Mavjud kitoblar sonini chiqaring

// JAVOBBBBBBBBBBBBBBBBBBBBB

interface Kitob {
  sarlavha: string;
  muallif: string;
  nashrYili: number;
  sahifalarSoni: number;
  mavjud: boolean;
}

class Kutubxona {
  kitoblar: Kitob[] = [];

  kitobQoshish(kitob: Kitob): void {
    this.kitoblar.push(kitob);
  }

  // Kitobni sarlavhasi bo'yicha izlab topish metodi

  kitobniTopish(sarlavha: string): Kitob | undefined {
    return this.kitoblar.find((kitob) => kitob.sarlavha === sarlavha);
  }

  // Mavjud kitoblar sonini chiqarish metodi

  mavjudKitoblarSoni(): number | undefined {
    return this.kitoblar.length;
  }
}
// 2. Kutubxona obyektini yaratish va kitoblar qo'shish

const Kutubxonam = new Kutubxona();

const kitob1: Kitob = {
  sarlavha: "Sarlavha 1",
  muallif: "muallif 1",
  nashrYili: 2015,
  sahifalarSoni: 350,
  mavjud: true,
};

const kitob2: Kitob = {
  sarlavha: "Sarlavha 2",
  muallif: "muallif 2",
  nashrYili: 2004,
  sahifalarSoni: 225,
  mavjud: true,
};

const kitob3: Kitob = {
  sarlavha: "Sarlavha 3",
  muallif: "muallif 3",
  nashrYili: 200,
  sahifalarSoni: 450,
  mavjud: false,
};

// Kitoblarni kutubxonaga qo'shamiz

Kutubxonam.kitobQoshish(kitob1);
Kutubxonam.kitobQoshish(kitob2);
Kutubxonam.kitobQoshish(kitob3);

// 3. Kitobni sarlavha bo'yicha topish

const topilganKitob = Kutubxonam.kitobniTopish("Sarlavha 2");
console.log("Topilgan kitob:", topilganKitob);

// 4. Mavjud kitoblar sonini chiqarish

console.log("mavjud Kitoblar Soni:", Kutubxonam.mavjudKitoblarSoni());

////////////////

// 33333333333333333333333333333. Objects

// SAVOLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL

// a) Talaba obyektini yarating. Unda quyidagi xususiyatlar bo'lishi kerak:
// - ism (string)
// - yosh (number)
// - kurs (number)
// - fanlar (string array)

//  b) Talaba obyektidan foydalanib, talaba haqida ma'lumot chiqaruvchi funksiya yozing
// function talabaMalumoti(talaba: { ism: string; yosh: number; kurs: number; fanlar: string[] }): string {
// Sizning kodingiz shu yerda
//     return "";
// }

// JAVOBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB

// interface Talaba {
//   ism: string;
//   yosh: number;
//   kurs: number;
//   fanlar: string[];
// }
// let talaba: Talaba = {
//   ism: "javlon",
//   yosh: 23,
//   kurs: 4,
//   fanlar: ["math", "english", "history"],
// };

// function talabaMalumoti(TalabAny: Talaba) {
//   return `talaba ismi: ${TalabAny.ism}, talabaning yoshi ${
//     TalabAny.yosh
//   }, kursi: ${TalabAny.kurs}, fanlar ${TalabAny.fanlar.join(", ")}`;
// }

// //  ntija

// console.log(talabaMalumoti(talaba));
