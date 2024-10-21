// 1 INSTRUKCIJA

let firstName = "jonas";

let lastName = "petrauskas";

let idNumber = "38507131234";

console.log("Vartotojo duomenys " + firstName + " " + lastName + " " + idNumber);

// 2 FUNCIONALUMAS
function validate(firstName, lastName) {
  // vardas ir pavardes apdorojimas

  if (firstName.length < 3) {
    console.log("Klaida. Vardas turi buti bent 3 simboliu.");
    return;
  } else if (lastName.length < 5) {
    console.log("Klaida. Pavarde turi buti ilgesne bent 5 simboliu.");
    return;
  }
}

validate (firstName, lastName)

// vardas prasideda didziaja raide, pavarde didziosiomis raidemis

let FirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
let LastName = lastName.toUpperCase();

console.log(FirstName + " " + LastName + " ")

//asmens kodo analize

const metaiStr = idNumber.slice(1, 3);

console.log(metaiStr);

let metaiNumber = Number (metaiStr);

console.log(typeof(metaiNumber))

if (metaiNumber < 24){
    // metaiNumber += 2000
    metaiNumber = metaiNumber + 2000;
} else {metaiNumber = metaiNumber + 1900};

console.log(metaiNumber)

const menesisStr = idNumber.slice(3, 5)

console.log(menesisStr)

const dienaStr = idNumber.slice(5, 7)

console.log(dienaStr)

data = (metaiNumber + "-" + menesisStr + "-" + dienaStr)

//simtmetis

const simtmetis = idNumber [9];
switch (simtmetis) {
  case "1":
  case "2":
    console.log("Gimimo vieta: Lietuva");
    break;
  case "3":
    console.log("Gimimo vieta: Uzsienis");
    break;
  default:
    console.log("Neteisingas atsakymas");
}


console.log(FirstName + " " + LastName);
console.log(data)
