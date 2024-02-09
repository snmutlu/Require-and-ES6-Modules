//! CommonJS Modülleri

// const app = require("./module1");

// console.log(app);


// app.test3();

// console.log(app.name);
// app.test1();
// console.log(app.person.mail);



//! ES6 Modules

/* 
Burada export ettiğimiz modülleri yakalamak için distructing yapısını
kullanabiliriz. 

Burada importtan sonra hangi modülü import edeceksek süslü parantezlerin
içerisinde onları belirtiyoruz ve ardından from'dan sonra dosya yolunu 
belirtiyoruz.
*/

// import {test,Person, employee,name} from "./module1";

// Person.test();
// test();

// console.log(employee.salary,name);

/* Ancak burada export edilen her modülü tek tek yazmamak için
kullanılan çok daha güzel bir syntax mevcut. Yani export edilen
herşeyi tek seferde import edebiliyoruz. Örn: */

//! Yani burada * ile export edilen herşeyi almak istediğimizi belirtiyoruz.

// import * as module1 from "./module1";

// console.log(module1)

// console.log(module1.employee.salary);

// module1.Person.test();

//! Eğer biz distructing yapısını kullanmadan import etmek istersek
//! default olarak export edilmiş modüllerimizi şu şekilde yakalıyoruz:

// import Deneme from "./module1";

// Deneme.test();


import denemeVal from "./module1";
console.log(denemeVal);