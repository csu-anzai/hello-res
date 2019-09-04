var msg:string = "nice"
console.log(msg)
console.log(msg)

var ss:string = "zzx"

function employee(age:number, name:string) {
    this.age = age;
}

var em = new employee(2,"sd");
em.age;

var arr = [1,2,3]
for (var v in arr){

}

var str = "nice";
str.length
str.charAt(1)

namespace Hello{
    export interface UserService {
        say4():string
    }
}