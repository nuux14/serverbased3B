var x=25;//function scope
a  = 65;//function scope
if(x==25){
    var y=32;
}
console.log(y);//32
for(var i=0;i<5;i++){
    //do your work
}
console.log(i);//5
function abc(){
    var z=52;
}
//console.log(z);//error
{
    let b=25;
}
//console.log(b);
const PI = 3.14;
//Arrow Functions
let d = function(b){
    console.log( b*b);
};
let d1 = b => console.log(b*b)
d(25);
d1(25);
let d2 = (a,b)=>{
}
//Classes
class Person{
    constructor(fn, mn, age){
      this.fname = fn;
      this.mname = mn;
      this.age = age;
    }
    info(){
        console.log(this.fname);
    }
}

let p1 = new Person('Guled','Ahmed',25);
p1.info();