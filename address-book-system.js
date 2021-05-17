/**
 * Purpose: This program is written to create a address-book-system and to perform various functinalities
 * 
 * @author Sanketh Chigurupalli
 * @since 14-05-2021
 */

//Printing a welcome note to console
console.log("Welcome to address book system!");

/**
 * Created a class for contacts as blue print
 */
class AddressBookContact {

    // constructor (firstName, lastName, address, city, state, zipCode, phoneNumber, email)
    constructor (...parameters) {
        this.firstName = parameters[0];
        this.lastName = parameters[1];
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        this.zipCode = parameters[5];
        this.phoneNumber = parameters[6];
        this.email = parameters[7];
    }

    //Getters and setters
    get firstName() {
        return this._firstName;
    }

    //Checking for regex before adding contact
    set firstName(firstName) {
        let firstNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(firstNameRegex.test(firstName)) {
            this._firstName = firstName;
        } else {
            throw "First Name : '" + firstName + "' is Invalid!"
        }
    }

    get lastName() {
        return this._lastName;
    }

    //Checking for regex before adding contact
    set lastName(lastName) {
        let lastNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(lastNameRegex.test(lastName)){
            this._lastName = lastName;
        } else {
            throw "Last Name : '" + lastName + "' is Invalid!"
        }
    }

    get address() {
        return this._address;
    }

    //Checking for regex before adding contact
    set address(address) {
        let addressRegex = RegExp("[A-Za-z0-9- ]{4,}");
        if(addressRegex.test(address)){
            this._address = address;
        } else {
            throw "Address : '" + address + "' is Invalid!"
        }
    }

    get city() {
        return this._city;
    }

    //Checking for regex before adding contact
    set city(city) {
        let cityregex = RegExp("[A-Za-z ]{4,}");
        if(cityregex.test(city)){
            this._city = city;
        } else {
            throw "City : '" + city + "' is Invalid!"
        }
    }

    get state() {
        return this._state;
    }

    //Checking for regex before adding contact
    set state(state) {
        let stateRegex = RegExp("[A-Za-z ]{4,}");
        if (stateRegex.test(state)) {
            this._state = state;
        }
        else {
            throw "State : " + state + " is Invalid!";
        }
    }

    get zipCode() {
        return this._zipCode;
    }

    //Checking for regex before adding contact
    set zipCode(zipCode) {
        let zipCodeRegex = RegExp("^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$");
        if (zipCodeRegex.test(zipCode)) {
            this._zipCode = zipCode;
        }
        else {
            throw "Zip : " + zip + " is Invalid!";
        }
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    //Checking for regex before adding contact
    set phoneNumber(phoneNumber) {
        const phoneNumberRegex = RegExp("^[1-9]{1}[0-9]{9}$");
        if (phoneNumberRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        }
        else {
            throw "Phone Number : " + phoneNumber + " is Invalid!";
        }
    }

    get email() {
        return this._email;
    }

    //Checking for regex before adding contact
    set email(email) {
        const emailRegex = RegExp("^[a-z0-9]+(([\\._+-][a-z0-9]+)?)\\@[a-z0-9]+\\.(([a-z]{2,4})(\\.[a-z]{2,4})?)$");
        if (emailRegex.test(email)) {
            this._email = email;
        }
        else {
            throw "Email : " + email + " is Invalid!";
        }
    }

    /**
     * Method to log the data to console
     * gets all the arguments given while creating new contact
     * @returns String formatted contact
     */
    toString() {
        return " { " + "firstName="+this.firstName+" ,lastName="+this.lastName+
        " ,address="+this.address+" ,city="+this.city+" ,state="+this.state+
        " ,zip="+this.zip+" ,phoneNumber="+this.phoneNumber+" ,email="+this.email + " } ||";
    }
}

//Created array for storing all contacts
let addressBookArray = new Array();
let contact;
 try {
    contact = new AddressBookContact("Sanketh", "Chigurupalli", "Alwal", 
        "Hyderabad", "Telangana", 500015, 9700000000, "sanketh.chigur@gmail.com");
    addressBookArray.push(contact);
    contact = new AddressBookContact("Aman", "Singh", "Barkatpur", 
        "Chennai", "Tamilnadu", 630015, 6700040000, "aman.singh@gmail.com");
    addressBookArray.push(contact);
    contact = new AddressBookContact("Premraj", "Kathil", "Ganeshapur", 
        "Mumbai", "Maharastra", 456015, 9876543210, "premraj@gmail.com");
    addressBookArray.push(contact);
    console.log("Address book array: ");
    addressBookArray.forEach(contact => process.stdout.write(contact.toString()));
 } catch (e) {
     console.error(e);
 }

 // function to edit fields of contact
 function editField(firstName, lastName, fieldName, updatedField) {
    try {
        let contact = findContact(firstName, lastName);
        switch (fieldName) {
            case "firstName":
                contact.firstName = updatedField;
                break;
            case "lastName":
                contact.lastName = updatedField;
                break;
            case "address":
                contact.address = updatedField;
                break;
            case "city":
                contact.city = updatedField;
                break;
            case "state":
                contact.state = updatedField;
                break;
            case "zipCode":
                contact.zipCode = updatedField;
                break;
            case "phoneNumber":
                contact.phoneNumber = updatedField;
                break;
            case "email":
                contact.email = updatedField;
                break;
            default:
                throw "Field for Updation : " + fieldName + " is Invalid!";
        }
        console.log("ADDRESS BOOK ARRAY AFTER UPADTING CONTACT : ");
        addressBookArray.forEach(contact => process.stdout.write(contact.toString()));
    } catch (error) {
        console.error(error);
    }
}

// function for finding the contact from an array
function findContact(firstName, lastName) {
    let contact = addressBookArray.find(contact => contact._firstName == firstName && contact._lastName == lastName);
    if(contact != undefined){
        return contact;
    }else {
        throw "\nContact : " + firstName + " " + lastName + " does't exit in your address book";
    }
}

//edits the present array of contacts
editField("Sanketh", "Chigurupalli", "lastName", "Babbur");
console.log("Address book after updating contact : ");
addressBookArray.forEach(contact => process.stdout.write(contact.toString()));

// function written for deleting a contact from address book
function deleteContact(firstName, lastName) {
    try {
        let index =  addressBookArray.findIndex(contact => contact._firstName == firstName && contact._lastName == lastName);
        if (index != -1) {
            addressBookArray.splice(index, 1);
            console.log("\nAddress book after removing contact: First Name: " + firstName + " Last Name: " + lastName);
            addressBookArray.forEach(contact => process.stdout.write(contact.toString()));
        } else {
            throw ("This contact doesn't exist in your address book");
        }
    }catch (error) {
        console.error(error);
    }
}

//function for getting contact count
function contactCount (count) {
    return count + 1;
}

// number of contacts in address book
let totalCount = addressBookArray.reduce(contactCount, 0);
console.log("\n******Total number of contacts in address book are " + totalCount + "******");

//edits the present array of contacts
editField("Sanketh", "Chigurupalli", "lastName", "Babbur");
console.log("Address book after updating contact : ");
addressBookArray.forEach(contact => process.stdout.write(contact.toString()));

// deleting a contact
deleteContact("Sanketh", "Chigurupalli");
console.log("\nAddress book after deleting contact : ");
addressBookArray.forEach(contact => process.stdout.write(contact.toString()));

//return contact doesn't exist
findContact("Kumaran", "Varma");
