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
let addNewContact = (lista, nev, telefon, email) => (lista instanceof Array) ? lista.push({"name": nev, "phone": telefon, "email": email }) : undefined;
console.log(addNewContact(contacts, "Márton", "nincs", "azsincs"))
console.log(contacts)

