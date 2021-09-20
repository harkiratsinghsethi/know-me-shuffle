export const testType = (a:number) => {
    return a
}



let a = '1'
let b =2
let c = true
let num:number;
num = +'1'

enum Role {ADMIN='admin',READONLY=100}
let obj = {

    role:Role.ADMIN
}
let fav :any[]
fav=['test',1]

console.log(obj.role)

type combinable= number | string;
type conversionTypes = 'asnumber'| 'astext'
const add =(num1:combinable,num2:combinable)=>{
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return  num1+num2
    }else{
        return num1.toString() + num2.toString()
    }
}
const res = add(1,2)
console.log(res)

const addNew =(n1:string,n2:string):number=>{
return +n1 + +n2
}

addNew('1','2')
const addAndHandle =(a:number,b:number,cb:(nm:number)=>void)=>{
    const result = a+b;
    cb(result)
}

const printAddNew=():undefined=>{
    console.log(addNew('1','2'))
    return undefined
}
printAddNew()

let combineValue: (a:string,b:string) =>number ;
combineValue = addNew;
addAndHandle(20,15,(result)=>console.log(result))


let addFive=(num)=>{

}

let xx  = {
    defaultNum: 5,
    addFive: function(num) {
        return this.defaultNum + num
    }
}

console.log(xx.addFive(10))