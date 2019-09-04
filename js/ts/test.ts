/// <reference path = "hello.ts" />
/// <reference path = "Haha.ts" />
import Ha = Haha.Ha;
import UserService = Haha.UserService;

var msg:string = "nice"


class UserServiceImpl{
    say():string{
        return "nice";
    }
}

class A extends UserServiceImpl{

}

class B extends A{

}

var b = new B();
b.say()

class C implements Ha{

    ss(): string {
        return "";
    }

}

class D implements UserService{
    say2(): string {
        return "";
    }

}