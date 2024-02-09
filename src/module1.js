// module.exports = function test1(){
//     console.log("Test 1");
// }

// module.exports = function test2(){
//     console.log("Test2");
// }

/* Burada yukarıdaki şekilde export ettiğimiz zaman sadece
bir fonksiyonu (sondaki) export etmiş oluyoruz. Ancak biz bu
modülleri isimleriyle birlikte export edersek bir obje olarak export
etmiş oluruz ve hepsi aynı anda export edilmiş olur. Örn:*/

// module.exports.test3 = function test3(){
//     console.log("Test3");
// }

// module.exports.test4 = function test4(){
//     console.log("Test4");
// }

/* Ancak bunları daha güzel bir syntax ile yazabiliriz. Burada her
exportumuzu tek tek yazmak yerine bu dosyadan yapacağımız bütün
exportlarımızı tek bir obje içerisinde yapabiliriz. Örn:*/

// module.exports = {
//     name: "Mutlu",
//     test1 : function(){
//         console.log("Test1");
//     },
//     person: {
//         name: "Mutlu",
//         mail: "info.mutlusenem@gmail.com"
//     }
// }

//! Bu yöntem eskiden kullanılan yöntemdi artık bunlar ES6 standart
//! ları ile daha kolay yazılabiliyor.


//? ES6 Modules

/* Biz burada herhangi bir değişken vs export etmek istersek
başına sadece export yazarak bu işlemi yapabiliyoruz. */

// export const name = "Mutlu";

// export function test(){
//     console.log("Test Fonksiyonu Burada");
// }

// export class Person {
//     static test(){
//         console.log("Person Testi Burada");
//     }
// }

// export const employee = {
//     name : "Mutlu",
//     salary : 5000
// }

/* Eğer biz distructing yapısını kullanmadan export ve 
import işlemlerini yapmak istiyorsak default şeklinde modüllerimizi
export edebiliriz. Örn: */

// export default class Deneme{
//     static test(){
//         console.log("Default deneme burada");
//     }
// }

/* Ayrıca biz oluşturduğumuz yapıları daha sonradan export etmek
istersek şu şekilde bir yapı kullanabiliriz. Örn: */

const denemeVal = "Deneme Değeri";


export default denemeVal;