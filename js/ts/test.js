var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var msg = "nice";
var UserServiceImpl = /** @class */ (function () {
    function UserServiceImpl() {
    }
    UserServiceImpl.prototype.say = function () {
        return "nice";
    };
    return UserServiceImpl;
}());
var A = /** @class */ (function (_super) {
    __extends(A, _super);
    function A() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return A;
}(UserServiceImpl));
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return B;
}(A));
var b = new B();
b.say();
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.ss = function () {
        return "";
    };
    return C;
}());
var D = /** @class */ (function () {
    function D() {
    }
    D.prototype.say1 = function () {
        return "";
    };
    return D;
}());
//# sourceMappingURL=test.js.map