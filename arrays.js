function getEmptyArray () {
    return let =[];
}
console.log(getEmptyArray());

function getNumberOfElements (elements) {
    return elements.length;

}
console.log (getNumberOfElements([1,"hola", 3,4]))

function useCalculator(apps) {
    return apps.push ("nuevo dato recibido");
}
console.log (useCalculator(["facebook", "Instagram"]));

function useApp (apps, app){
    return apps.concat(app);

}
console.log (useApp (["facebook", "twitter"], "Firefox"))

function getFirstApp (apps) {
    return apps[0];

}
console.log (getFirstApp (["facebook", "twitter", "firefox"]));

function getLastApp (apps) {
    return apps.length -1;
}
console.log (getLastApp (["facebook", "twitter", "firefox"]));


