// Initialize Firebase
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
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var branchSelector = getInputVal('branch-selector');
    var message = getInputVal('message');

    // Save Message
    saveMessage(name, email, branchSelector, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear form
    document.getElementById('contact-form').reset();
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to Firebase
function saveMessage(name, email, branchSelector, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        branchSelector: branchSelector,
        message: message,
    });
}