import { sayGoodbye as g, sayHello} from "./module1.js"

function sayHi  () {
    console.log('Hello Modules')
}
sayHi()
g();
sayHello()

// let friend1 = {
//   fname: 'Phongphat',
//   lname: 'Japhichom',
//   nickename: 'Tam',
//   sayhi() {
//     console.log(`hello ${this.fname} ${this.lname} nickname ${nickname}`)
//   }
// }
// let friend2 = {
//   fname: 'Phongphat',
//   lname: 'Japhichom',
//   nickename: 'Tam',
//   sayhi() {
//     console.log(`hello ${this.fname} ${this.lname} nickname ${nickname}`)
//   }
// }
// let friend3 = {
//   fname: 'Phongphat',
//   lname: 'Japhichom',
//   nickename: 'Tam',
//   sayhi() {
//     console.log(`hello ${this.fname} ${this.lname} nickname ${nickname}`)
//   }
// }

// class User {
//   constructor(_name){
//     this.name = _name
//   }
//   sayHi(){
//     console.log(`Hello ${this.name}`)
//   }
// }

// let user = new User(`Tam`,)
// user.sayHi()

// let user2 = new User(`Mai`)

// user2.sayHi()

// class User {
//   login() {
//     console.log ('User Login')
//   }
// }

// class Admin extends User {
//   login() {
//     console.log('admin login')
//   }
// }

// let user1 = new User()
// user1.login()

// let admin = new Admin()
// admin.login()
 
 //class lab 1
//  class Calculator {
//    constructor(_init = 0) {
//      this.value = _init
//    }
//    add(num) {
//      this.value += num
//      return this.value
//    }
//    sub(num) {
//      this.value -= num
//      return this.value
//    }
//    multi(num) {
//      this.value *= num
//      return this.value
//    }
//    divide(num) {
//      this.value /= num
//      return this.value
//    }

//    show(){
//      console.log(`Value = ${this.value}`)
//    }
// } 
 
// let result = new Calculator(10)
// result.show()
// console.log(result.add(50))
// console.log(result.sub(50))
// console.log(result.multi(50))
// console.log(result.divide(5))

//class lab 2
// class Sale {
//   constructor(_name,_amount,_price) {
//     this.name = _name
//     this.amount = _amount
//     this.price = _price
//   }
//   calcPrice() {
//     return this.amount * this.price
//   }
// }
// class Beverage extends Sale {

// }

// let result = new Beverage('pepsi',5,20)
// console.log(result)
// console.log(result.calcPrice())

//isArray lab 1
// function testArray(input) {
//   let result = Array.isArray(input)
//   return result
// }
// const a = []
// const b = {}
// console.log(testArray(a))
// console.log(testArray(b))

// .key lob 1
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// let values = Object.values(salaries)
// let sum = values.reduce((prev,curr)=>{
//   return prev+=curr
// },0)
// console.log(sum)

// .key lab2
// function checkEmptyObj(obj) {
//   if(Object.keys(obj).length == 0){
//     return true
//   } else {
//     return false
//   }
// }
// let a = {};
// let b = {
//   name: 'abc'
// }
// console.log(checkEmptyObj(a))
// console.log(checkEmptyObj(b))

// let func = (...rest)=>{
//   console.log(rest[0])
//   console.log(rest[1])
//   console.log(rest[2])
//   console.log(rest[3])
// }

// func('mai',3,4,5,6,7)

// function sum(...args) {
//   let result = 0;
//   for (let arg of args) {
//     result+=arg;
//   }
//   return result;
// }
// let result = sum(1,2,3,4,5,6)
// console.log(result)

// let showname = (fname, lname, ...titles)=>{
//   console.log(fname + " " + lname)

//   console.log(titles[0])
//   console.log(titles.length)
// }
// showname('a','b',1,2,3)

//rest lab 1
// function multi(...item) {
//   console.log(item)
//   let result = item.reduce((prev,curr)=>{
//     return prev*=curr
//   })
//   return result
// }
// console.log(multi(1,2,3,4,5))

//rest lab2

// function filterOutOdds(...num) {
//   let result=[];
//   let i = 0
//   for (element of num){
//     if(element%2==0){
//       result[i] = element
//       i++
//     } else {
//       continue
//     }
//   }
//   return result
// }
// console.log(filterOutOdds(1,2,3,4))

//rest lab 3
// function mergeObjects(...item){
//   let result = item.reduce((prev,curr)=>{
//     return prev = {...prev, ...curr}
//   },{})
//   return result
// }
// console.log(mergeObjects({1:1},{2:2},{3:3}))

//rest lab 4
// const num1 = [1, -2, 3, 4]
// const num2 = [8, 3, -8, 1]
// let arr = [5, ...num1, -6, -1, ...num2]
// console.log(arr)
// let sum = arr.reduce((prev,curr)=>{
//   return prev += curr
// },0) 
// console.log(sum)

// let arr = ['John','Doe']
// let [firstName, surname] = arr;
// console.log(firstName)
// console.log(surname)

//rest lab 5
// function changeI3(arr) {
//   let arrCopy = [...arr]
//       arrCopy[3] = (arr[3]**2)
//   return arrCopy
// }
// let arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(changeI3(arr))

//rest lab 6
// function profile(name,surname,...hobby) {
//   let result = [name,surname,...hobby]
//   return result
// }
// console.log(profile('a','b','c','d'))

//rest lab 7
// function doubleAndReturnArgs(arr,...num) {
//   let double = num.map((item)=>item*2)
//    return arr.concat(...double)
// }
// let result = doubleAndReturnArgs([1,2,3],6,7,8)
// console.log(result)

//rest lab 9
// function cloneArray(arr) {
// let cloneArr = []
// for (let element of arr){
//   cloneArr.push(element)
// }
// return cloneArr
// }
// let a = [1,2,3]
// console.log(cloneArray(a))

//rest lab 10
// function cloneObject() {
//   let objCopy = {...obj}
//   return objCopy
// }
// let obj = {1:1,2:2,3:3}
// console.log(cloneObject(obj))

//destruc lab 11
// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // *
// console.log(second); // **
// console.log(third); // ***
//ANS: Maya

//destruc lab 12 
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops); // *
// console.log(whiskers); // **
// console.log(aFewOfMyFavoriteThings); // ***
//ANS: Raindrops on roses เพราะ จะเก็บค่าตามลำดับตัวแปรที่เราประกาศเมื่อทำ destruct

//destruc lab 13
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // *
//ANS: [10,30,20] เพราะ numbers[1] = number[2] = 30 , number[2] = number[1] = 20
//เหมือนการสลับค่าระหว่าง index ที่ 1 และ 2

//destruc lab 14
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // *
// console.log(yearNeptuneDiscovered); // **
//ANS: 8 เพราะ ว่าชื่อในการประกาศเหมือนกัน

//destruc lab 15
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); // *
//ANS: {yearMarsDiscovered: 1659, yearNeptuneDiscovered: 1846} เพราะ ค่าตัวแรกจะเก็บอยู่ใน numplanets ส่วนค่าอื่นจะเก็นใน discoveryyear
//เมื่อ console.log จึงเป็นดังคำตอบ

//destruc lab 16
// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }) // *
// getUserData({ firstName: 'Melissa' }); // **
// getUserData({}); // ***
//ANS: Your name is Alejandro and you like purple เพราะ ค่าที่เรารับมามีชื่อกับสีที่ชอบ และจะ return ออกมาในรูปที่เราจัดเอาไว้

//destruc lab 17
// let guest = 'Jane';
// let admin = 'Pete';
//     [admin,guest]=[guest,admin]
// console.log(guest)
// console.log(admin)

//destruc lab 18
// let user = {
//   firstname: 'A',
//   lastname: 'B',
//   age:20
// }
// let user2 = {
//   firstname: 'C',
//   lastname: 'D',
//   age: 15
// }
// function whatAge({firstname,lastname,age}) {
//   if (age>18) {
//     console.log(`Hello, ${firstname} ${lastname}`)
//   } else {
//     console.log('คุณไม่มีสิทธิ์เข้าใช้งาน')
//   }
// }
// whatAge(user)
// whatAge(user2)

//destruc lab 19
// let user = {
//   name: 'John',
//   years: 27
// };
// let name = user.name
// let age = user.years
// let {name,years:age,isAdmin=false} = user
// console.log(name,age,isAdmin)

//destruc lab 21
// let arr = [1, [2, [[[3, 4], 5], 6]]];
// let [a, [b, [[[c, d], e], f]]] = arr
// console.log(a, b, c, d, e, f)

//destruc lab 22
// const obj = { prop: 5, prop2: 10 };
// const {prop:a,prop2:b} = obj
// console.log(a,b)

//destruc lab 23
// let a, b;
// { a, b } = { a: 1, b: 2 };
// console.log(a,b)
// //ANS: a = 1 , b = 2

//destruc lab 24
// const [, , , a, b] = [1, 2, 3];
// console.log(a,b)
//ANS: a = undefined , b = undefined

//destruc lab 25
// const q = { prop: 5, prop2: [10, 100] };
// const {prop:x,prop2:[z,y]} = q
// console.log(x,y)

//destruc lab 26
// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };
// const {prop:x,
//        prop2: {
//          prop2: {
//            nested: [,y,]
//          }
//       }
// } = q;
// console.log(x,y)
// console.log(q)