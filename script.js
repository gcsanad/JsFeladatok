let sortNumbersAsc = [50, 10, 40, 30, 20].sort((a, b) => a - b );
console.log("TASK 1A")
console.log(sortNumbersAsc);
let sortNumbersDesc =  sortNumbersAsc.reverse();
console.log("TASK 1B")
console.log(sortNumbersDesc);


console.log("Exercise 6")
let fibonacci = (n) => (n) == 0 ? 0 : ((n) == 1 ? 1 : fibonacci((n) - 1) + fibonacci((n) - 2));
console.log(fibonacci(7))


console.log("LAB function 1")
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];
/*
let showContact = function(contacts, i) {
    if (contacts instanceof Array && contacts[i]) {
        console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
    }
}
*/


let showContact = (lista, index) => (lista instanceof Array) ? lista[index] : "szutyerák";
console.log(showContact(contacts,2))

/*
let showAllContacts = function(contacts) {
    if (contacts instanceof Array) {
        for (contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
    }
}
*/
console.log('-'*50)
let showAllContacts = (lista) => (lista instanceof Array) ? lista : "tututtututut"
console.log(showAllContacts(contacts))

/*
let addNewContact = function(contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });
    }
}
*/
console.log('-'*50)
let addNewContact = (lista, nev, telefon, email) => (lista instanceof Array) ? lista.push({"name": nev, "phone": telefon, "email": email }) : undefined;
console.log(addNewContact(contacts, "Márton", "nincs", "azsincs"))

console.log('-'*50)
console.log("LAB function 2")
let miSzerint= "email";
/*
do{
    miSzerint = prompt("Mi szerint rendezzük?");
}while(miSzerint == null || miSzerint == "name" || miSzerint == "phone" || miSzerint == "email");
*/
/*
let emailSzerint = contacts.sort((a,b) => (a[email] < b[email]) ? -1 :(a[email]>b[email])? 1 : 0)
let nevSzerint = contacts.sort((a,b) => (a[name] < b[name]) ? -1 : (a[name]>b[name])? 1 : 0)
let telefonSzerint = contacts.sort((a,b) => (a[phone] < b[phone]) ? -1 : (a[phone]>b[phone])? 1 : 0)
*/
let sorbaRendez = contacts.sort((a,b) => (a[miSzerint] < b[miSzerint]) ? -1 : (a[miSzerint]>b[miSzerint])? 1 : 0)
console.log(sorbaRendez)
/*
if (miSzerint == "name") {
    console.log(nevSzerint)
}
else if (miSzerint == "phone") {
    console.log(telefonSzerint)
}
else if (miSzerint == "email") {
    console.log(emailSzerint)
}
*/


