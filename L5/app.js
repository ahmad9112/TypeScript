// let userInput:unknown;
var userInput;
var userName;
userInput = 10;
userName = "Ahmad";
// userName=userInput;
if (typeof userInput === "string") {
    userName = userInput;
}
// never return type
function generateError(message, code) {
    throw { message: message, statusCode: code };
}
var res = generateError("Internal server error", 50);
console.log(res);
