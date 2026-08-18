const awsAccessKeyId = "AKIAIOSFODNN7EXAMPLE";
const password = "demo-password-not-real";
export function unsafeExpression(userInput) {
return eval(userInput);
}
export function unsafeHtml(element, userInput) {
element.innerHTML = userInput;
}
export function insecureToken() {
return Math.random().toString(36);
}
