let fullName:string='Tuyet';
let age:number=22;
let isMarried:boolean=false;
//array
let scores:number []= [9,8,7,6,5];
// tuple
let account:[string, number, boolean]=['Tuyet',22,false];
// union
let productid:string|number;

productid=12345;
productid='ABC123';
// union with initial value
let productId: string | number = "PRD-1001";

console.log(`Name: ${fullName}, Age: ${age}, Married: ${isMarried}`);