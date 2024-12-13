let age =30;
let email = 'sunnymiraclegmail.com';
let name ='miracle'

age =25;

const phone = '08115432978'

console.log(`name: ${name} \nEmail: ${email} \nAge: ${age}`)

let myName = "Your Name";
let myAge = 20; // Replace with your age

if (myAge >= 18) {
  console.log(myName + ", you are eligible to vote.");
} else {
  console.log(myName + ", you are not eligible to vote.");
}

let b = 5 > 3;
let c = 5 < 2;
let d = 5 >= 3;
let e = 5 <=3;
 console.log(`Number 1: ${b} \nNumber2: ${c} \nNumber3: ${d} \nNumber3 ${e}`)
 
//console.log(5 !== 3); // true (not equal)
//console.log(5 > 3);   // true
//conconsole.log(5 === 5); // true (strict equality)
//sole.log(5 < 3);   // false
//console.log(5 >= 3);  // true
//console.log(5 <= 3);  // false

for (let i = 3; i <= 100; i++){
  if(i % 2 !==1)
    console.log(i);


}


const num = []
for (let i = 1; i <= 100; i+= 2) {
  num.push(i)
}
console.log(num);

const pincode =[]
  for (let i = 0; i < 999; i++) {
    let pin = i.toString().padstart(3,'0')
    pincode.push(pin)
  }
  console.log(pincode)









