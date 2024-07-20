// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts =[];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },

        //method to add contact to list
        addContact: function(contact) {
            contacts.push(contact);
        },

        //method to find a contacts full name
        findContact: function(fullName) {
            //iterate through contacts array to find contact
            for (let i = 0; i < contacts.length; i++) {
                if (`${contacts[i].nameFirst} ${contacts[i].nameLast}` === fullName) {
                    return contacts[i];
                }
            }
            return undefined; //return undefined if contact not found
        },

        //method to remove contact from list
        removeContact: function(contact) {
            // Find index of the contact
            let index = contacts.indexOf(contact);
            if (index !== -1) {
                contacts.splice(index, 1); //remove contact from array
            }
        },

        //method to print all contact names with line breaks
        printAllContactNames: function() {
            let result = '';
            contacts.forEach(function(contact, index) {
                result += `${contact.nameFirst} ${contact.nameLast}`;
                if (index !== contacts.length - 1) {
                    result += '\n'; //add newline if it's not last contact
                }
            });
            return result;
        }
    };

    }
    //create a new contact list
let myContacts = makeContactList();

//adding contacts from contact.json list
let contactList = [
    { "id": 1, "nameFirst": "Max", "nameLast": "Gaudin" },
    { "id": 2, "nameFirst": "John", "nameLast": "Fraboni" },
    { "id": 3, "nameFirst": "Alon", "nameLast": "Robinson" },
    { "id": 4, "nameFirst": "Mykia", "nameLast": "Smith" },
    { "id": 5, "nameFirst": "Steve", "nameLast": "Price" },
    { "id": 6, "nameFirst": "George", "nameLast": "Mauer" },
    { "id": 7, "nameFirst": "Ben", "nameLast": "Schenker" },
    { "id": 8, "nameFirst": "Jaelle", "nameLast": "Schuerman" },
    { "id": 9, "nameFirst": "Erika", "nameLast": "Fraboni" },
    { "id": 10, "nameFirst": "Alice", "nameLast": "Green" }
];

contactList.forEach(function(contact) {
    myContacts.addContact(contact);
});



console.log("Number of contacts:", myContacts.length()); // Output: 10

//find contact by full name
let foundContact = myContacts.findContact("John Fraboni");
console.log("Found contact:", foundContact); // Output: { id: 2, nameFirst: "John", nameLast: "Fraboni" }

//remove contact
myContacts.removeContact(foundContact);

//print all contacts
console.log("All contact names:");
console.log(myContacts.printAllContactNames());
/*
Output:
Max Gaudin
Alon Robinson
Mykia Smith
Steve Price
George Mauer
Ben Schenker
Jaelle Schuerman
Erika Fraboni
Alice Green
*/

// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}