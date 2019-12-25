// Initialize Firebase (5)
var firebaseConfig = {
    apiKey: "AIzaSyC-bKibAI2ConUse2fuYpY8MlQGehPHiMo",
    authDomain: "master-contact-form.firebaseapp.com",
    databaseURL: "https://master-contact-form.firebaseio.com",
    projectId: "master-contact-form",
    storageBucket: "master-contact-form.appspot.com",
    messagingSenderId: "1032796719111",
    appId: "1:1032796719111:web:2abfcc47ac33843a2482a2",
    measurementId: "G-585YZK80X8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages'); // This is how you initialize any firebase database. If you want to reference a specific collection, parse in the collection

// Listen for form submit
document.getElementById('contact-form').addEventListener('submit', submitForm); // Grab the form with id, Listen for a 'submit' event, create a function called 'submitForm' (1)

// Created a function called 'submitForm' which takes in an event = e, take e parameter and call the preventDefault method (2)
function submitForm(e) {
    e.preventDefault();

    // Get values (4) 
    var name = getInputVal('name'); // Variable = function(id)
    var email = getInputVal('email');
    var branchSelector = getInputVal('branch-selector');
    var message = getInputVal('message');

    // Save Message (7)
    saveMessage(name, email, branchSelector, message); // Calling function

    // Show alert (8)
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds (9)
    setTimeout(function() { // To call the function after 3000 milliseconds
        document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear form (10)
    document.getElementById('contact-form').reset(); // To reset all the values of all the elements in the form
}

// Function to get form values (3)
function getInputVal(id) {
    return document.getElementById(id).value; // Going to return any id the is parsed in
}

// Save message to Firebase (6)
function saveMessage(name, email, branchSelector, message) { // Create a function to save the message to firebase
    var newMessageRef = messagesRef.push(); 
    newMessageRef.set({ // Object with data, call set to store values of any type.
        name: name,
        email: email,
        branchSelector: branchSelector,
        message: message, // Sending an object to messages reference in firebase
    });
}