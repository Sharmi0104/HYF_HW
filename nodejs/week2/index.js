const ContactList = require("./contactList");

const my_contact_list = new ContactList()

my_contact_list.add()

my_contact_list.add({
    name: "Gino",
    phone: 42838328,
    country: "Italy"
})

my_contact_list.add({
    name: "Frank",
    phone: 42213328
})

my_contact_list.add({
    name: "dolly",
    phone: 42256328
})


//my_contact_list.remove("Gino")

my_contact_list.searchBy("phone", 42)

// console.log(my_contact_list.getList())

my_contact_list.add({
    name: "max",
    phone: 24356465
})

console.log(my_contact_list.searchBy("name", "y"))