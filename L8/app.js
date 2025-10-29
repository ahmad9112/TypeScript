//Generics intro
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Boy = {
    name: "Hamid",
    age: 16
};
var fruits = [{ name: "Ahmad", age: 12 }];
// fruits.push("Mango");
// fruits.push("Banana");
// fruits.push("Apple");
console.log(fruits);
//EX-2
function merge(objA, objB, objC) {
    return __assign(__assign(__assign({}, objA), objB), objC);
}
var res = merge({ name: "Ahmad" }, { role: "software engineering" }, { id: "d1" });
console.log(res);
//Ex-3Generic constriants
function createObject(key, value, isActive) {
    return { key: key, value: value, isActive: isActive };
}
