// ////////////////////
// //  1st : initial

// const message: string = 'hello, world!'
// console.log(message)



// ////////////////////
// // 2nd : data type

// let count = 0;
// count += 1;
// count = "string!" // emits error

// const message: string = 'hello world';

// const done: boolean = true;

// const numbers: number[] = [1, 2, 3];
// const messages: string[] = ['hello', 'world'];

// messages.push(1); // emits error

// let mightBeUndefined: string | undefined = undefined; // string or undefined
// let nullableNumber: number | null = null; // number or null

// let color: 'red' | 'orange' | 'yellow' = 'red'; // red or orange or yellow
// color = 'yellow';
// color = 'green'; // emits error



// ////////////////////
// // 3rd : function

// const sum = (x: number, y: number): number => {
//   return x + y;
//   // return null; // emits error
// }
// sum(1, 2);

// const sumArray = (numbers: number[]): number => {
//   return numbers.reduce((acc, current) => acc + current, 0); // IDE type check
// }
// const total = sumArray([1, 2, 3, 4, 5]); // IDE type check

// const returnNothing = (): void => {
//   console.log('I am just saying hello world');
//   // return "hello"; // emits error
// }



// ////////////////////
// // 4th : interface + class

// interface Shape {
//   getArea(): number;
// }

// class Circle implements Shape {
//   radius: number;

//   constructor(radius: number) {
//     this.radius = radius;
//   }

//   getArea() {
//     return this.radius * this.radius * Math.PI;
//   }
// }

// class Rectangle implements Shape {
//   width: number;
//   height: number;

//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }

//   getArea() {
//     return this.width * this.height;
//   }
// }

// const shapes: Shape[] = [new Circle(8), new Rectangle(2, 8)];

// shapes.forEach(shape => console.log(shape.getArea()));

// interface Shape {
//   getArea(): number;
// }

// class Circle implements Shape {

//   constructor(public radius: number) {
//     this.radius = radius;
//   }

//   getArea() {
//     return this.radius * this.radius * Math.PI;
//   }
// }

// class Rectangle implements Shape {
//   constructor(private width: number, private height: number) {
//     this.width = width;
//     this.height = height;
//   }

//   getArea() {
//     return this.width * this.height;
//   }
// }

// const circle = new Circle(8), rectangle = new Rectangle(2, 8);

// console.log(circle.radius);
// // console.log(rectangle.width); // emits error

// const shapes: Shape[] = [circle, rectangle];

// shapes.forEach(shape => console.log(shape.getArea()));



// ////////////////////
// // 5th : interface + object

// interface Person {
//   name: string
//   age?: number
// }

// interface Developer extends Person {
//   skills: string[]
// }

// const person: Person = {
//   name: 'Jamie',
//   age: 32
// }

// const developer: Developer = {
//   name: 'Jamie Young',
//   skills: ['react', 'styled-componets']
// }



// ////////////////////
// // 6th : type

// type Person = {
//   name: string
//   age?: number
// }
// const person: Person = {
//   name: 'Jamie',
//   age: 32
// }

// type Developer = Person & {
//   skills: string[]
// }
// const developer: Developer = {
//   name: 'Jamie Young',
//   skills: ['react', 'styeld-components']
// }

// type People = Person[]
// const people: People = [person, developer]

// type Color = 'red' | 'orange' | 'yellow'
// const color: Color = 'red'
// const colors: Color[] = ['red', 'orange']



// ////////////////////
// // 6th : generics

// const _merge = (a: any, b: any): any => {
//   return { ...a, ...b }
// }
// const _merged = _merge({ foo: 1 }, { bar: 1 }) // IDE type check fail

// const merge = <A, B>(a: A, b: B): A & B => {
//   return { ...a, ...b }
// }
// const merged = merge({ foo: 1 }, { bar: 1 }) // IDE type check success

// const wrap = <T>(param: T) => ({ param })
// const wrapped = wrap(10);



// ////////////////////
// // 7th : generics + (interface || type)

// interface Items<T> {
//   list: T[]
// }
// const items: Items<string> = {
//   list: ['Hello', 'World', 'of', 'TS']
// }

// type Items<T> = {
//   list: T[]
// }
// const items: Items<string> = {
//   list: ['I', 'am', 'Jamie', 'Young']
// }



// ////////////////////
// // 8th : generics + class

class Queue<T> {
  list: T[] = []

  get length() {
    return this.list.length
  }

  enqueue(item: T) {
    this.list.push(item)
  }
  dequeue() {
    return this.list.shift()
  }
}

const q = new Queue<number>()
q.enqueue(0)
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
console.log({ ...q, length: q.length })
console.log(q.dequeue())
console.log(q.dequeue())
console.log({ ...q, length: q.length })
q.enqueue(4)
q.enqueue(5)
console.log({ ...q, length: q.length })
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log({ ...q, length: q.length })