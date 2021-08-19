//! 1

function printToWindow() {
    document.write("Hello there");
}

// printToWindow();

//! ------------------------------------------------------------------------------
//! 2

function printDavidToWindow() {
    document.write("hello there David");
}

// printDavidToWindow();

//! ------------------------------------------------------------------------------
//! 3

function printUserNameToWindow(userName) {
    document.write(`Hello there ${userName}`);
}

// printUserNameToWindow("Ruti");

//! ------------------------------------------------------------------------------
//! 4


function printFullNameToWindow(personFirstName, personLastName, personAge) {
    document.write(`First Name: ${personFirstName}, Last Name: ${personLastName}, Age: ${personAge}`);
}

// printFullNameToWindow("Ruti", "Ayaso", 27);

//! ------------------------------------------------------------------------------
//! 5


function printPersonDiv(personName, personAge) {
    var divInput = document.getElementById("content");
    divInput.innerHTML = `Name: ${personName}, Age: ${personAge}`;
}

// printPersonToDiv("Ruti", 27);

//! ------------------------------------------------------------------------------
//! 6


function printThreePersonDiv(personFirstName, personLastName, personAge) {
    var firstName = document.getElementById("firstNameDiv");
    var lastName = document.getElementById("lastNameDiv");
    var age = document.getElementById("ageDiv");
    firstName.innerHTML = `Name: ${personFirstName}`;
    lastName.innerHTML = `Name: ${personLastName}`;
    age.innerHTML = `Name: ${personAge}`;
}

// printToDiv("Ruti", "Ayaso", 27);

//! ------------------------------------------------------------------------------
//! 7


function printDivToWindow(personName, personAge) {
    document.write(`<div>Name: ${personName}, Age: ${personAge}</div>`);
}

// printDiv("Ruti", 27);

//! ------------------------------------------------------------------------------
//! 8


function printParagraphInDiv(personFirstName, personLastName, personAge) {
    document.write(`<div><p>First Name: ${personFirstName}, Last Name: ${personLastName}, Age: ${personAge}</p></div>`);
}

// printParagraphInDiv("Ruti", "Ayaso", 27);

//! ------------------------------------------------------------------------------
//! 9


function printParagraph(personFirstName, personLastName, personAge) {
    document.write(`<p id="personInfo">First Name: ${personFirstName}, Last Name: ${personLastName}, Age: ${personAge}</p>`);
}

// printParagraph("Ruti", "Ayaso", 27);

//! ------------------------------------------------------------------------------
//! 10

function printParagraphWithId(personFirstName, personLastName, personAge) {
    document.write(`<div><p id="Information">First Name: ${personFirstName}, Last Name: ${personLastName}, Age: ${personAge}</p></div>`);
}

// printParagraphWithId("Ruti", "Ayaso", 27);

//! ------------------------------------------------------------------------------
//! 11.1

function printFirstNameToWindow(userFirstName) {
    document.write(`<p id="firstName">${userFirstName}</p>`);
}

// printFirstNameToWindow("Ruti");

//! 11.2

function addLastName(userLastName) {
    var lastName = document.getElementById("firstName");
    lastName.innerHTML += ` ${userLastName}`;
}

// addLastName("Ayaso");

//! ------------------------------------------------------------------------------
//! 12.1

function printFirstNameToWindow2(userFirstName) {
    document.write(`<p id="firstName2">${userFirstName}</p>`);
}

// printFirstNameToWindow2("Ruti");

//! 12.2

function addLastNameAndDate(userLastName) {
    var lastName = document.getElementById("firstName2");
    lastName.innerHTML += ` ${userLastName} ${new Date()}`;
}

// addLastNameAndDate("Ayaso");

//! ------------------------------------------------------------------------------

//! 13

function createAndPrintObject(carColor, carBrand, carCapcity){
    var car = {};
    car.color = carColor;
    car.brand = carBrand;
    car.capcity = carCapcity;
    document.write(`color: ${car.color}, brand: ${car.brand}, capcity: ${car.capcity}.`);
}

// createAndPrintObject("blue","fiat","1200");

//! ------------------------------------------------------------------------------

//! 14

function PrintAndcreateObject(carColor, carBrand, carCapcity){
    var car = {};
    car.color = carColor;
    car.brand = carBrand;
    car.capcity = carCapcity;
    car.year = new Date().getFullYear();
    document.write(`color: ${car.color}, brand: ${car.brand}, capcity: ${car.capcity}. year: ${car.year}`);
}

// PrintAndcreateObject("blue","fiat","1200");

//! ------------------------------------------------------------------------------

//! 15

function createAndPrintDiv(carColor, carBrand, carCapcity){
    var car = {};
    car.color = carColor;
    car.brand = carBrand;
    car.capcity = carCapcity;
    document.write(`<div>color: ${car.color}, brand: ${car.brand}, capcity: ${car.capcity}.</div>`);
}

// createAndPrintDiv("blue","fiat","1200");

//! ------------------------------------------------------------------------------

//! 16

function PrintToDiv(carColor, carBrand, carCapcity){
    var cars = document.getElementById("carsSection");
    var car = {};
    car.color = carColor;
    car.brand = carBrand;
    car.capcity = carCapcity;
    car.year = new Date().getFullYear();
    cars.innerHTML += `<div>color: ${car.color}</div>`
    cars.innerHTML += `<div>brand: ${car.brand}</div>`
    cars.innerHTML += `<div>capcity: ${car.capcity}</div>`
    cars.innerHTML += `<div>year: ${car.year}</div>`
}

// PrintToDiv("blue","fiat","1200");

//! ------------------------------------------------------------------------------

//! 17

function PrintToDivWithId(carColor, carBrand, carCapcity){
    var cars = document.getElementById("carsSection");
    var car = {};
    car.color = carColor;
    car.brand = carBrand;
    car.capcity = carCapcity;
    car.year = new Date().getFullYear();
    cars.innerHTML += `<div id="color">color: ${car.color}</div>`
    cars.innerHTML += `<div id="brand">brand: ${car.brand}</div>`
    cars.innerHTML += `<div id="capcity">capcity: ${car.capcity}</div>`
    cars.innerHTML += `<div id="year">year: ${car.year}</div>`
}

// PrintToDivWithId("blue","fiat","1200");