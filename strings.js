var name ="Jonh Wick";
function getNameLength (name) {
    return (name).length;
}
console.log (getNameLength ("Jonh Wick"));

function nameInUpperCase (name) {
    return  "Jonh Wick".toUpperCase (name) ;
}
console.log (nameInUpperCase ("Jonh Wick"));

function nameInLowerCase (name) {
    return "Carlos".toLowerCase(name) ;
}
console.log (nameInLowerCase (name));

function getFirstCharacter (name) {
    return "Jonh Wick"[0];
}
console.log (getFirstCharacter ("Jonh Wick"));

function getLastCharacter (name) {
    return name [name.length -1]
}
console.log (getLastCharacter ("example"))

function skipLastCharacter (name) {
    return name.substring(1);
}
console.log (skipLastCharacter("This is an example"));

function getThreeChars (name) {
    return name.substring(1, 4);
}
console.log (getThreeChars ("Jonh Wick"));

function concateInitial (fistNameInitial, lastNameInitial) {
    return fistNameInitial + lastNameInitial;
}
console.log (concateInitial("J", "W"));

function sayHello(name) {
    return `Hello ${name}`;
}
console.log (sayHello ("John Wick"));

function getFullName (firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log (getFullName ("John", "Wick"));

function getMultilineString () {
    return `los template string
    permiten interpolacion`;

}
console.log (getMultilineString());

function capitalize (word) {
    const all = word.toLowerCase();
    const first= all[0].toUpperCase();
    const rest = all.substring(1);
    return `${first}${rest}`;
}
console.log (capitalize ("marta Moran"));

function removeExtraEspace (text) {
    return text.trim();
}
console.log (removeExtraEspace(" hola buenos dias  "));

function amsterdamIsFirstWord(description){
    return description.startsWith('Amsterdam');
}
console.log (amsterdamIsFirstWord("noo lo es"));
