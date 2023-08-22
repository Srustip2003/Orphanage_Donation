const firebaseConfig = {
    apiKey: "AIzaSyBxtQxwufCtAqj7sAwT6tnEKjVSHYtSF7s",
    authDomain: "orphange-donation.firebaseapp.com",
    databaseURL: "https://orphange-donation-default-rtdb.firebaseio.com",
    projectId: "orphange-donation",
    storageBucket: "orphange-donation.appspot.com",
    messagingSenderId: "39743419100",
    appId: "1:39743419100:web:6d30b37ec5324d4f38fa19"
  };

  firebase.initializeApp(firebaseConfig);

var infodb = firebase.database().ref('aanath')

document.getElementById('registerform').addEventListener('submit', submitform);

function submitform(e){
    e.preventDefault();

    var fullname = getElementByVal('fname');
    var lastname = getElementByVal('lastname')
    var email = getElementByVal('email')
    var contact = getElementByVal('contact')
    var password = getElementByVal('password')
    saveMessages(fullname, lastname ,email, contact ,password);

    //window.location.replace("newindex (2).html");
}

const saveMessages = (fullname, lastname, email, contact, password) => {
    var newBusiness = infodb.push();

    newBusiness.set({
        fullname : fullname,
        lastname : lastname,
        email : email,
        contact : contact,
        password : password
    })
};

const getElementByVal = (id) => {
    return document.getElementById(id).value;
};

//reset the form
document.getElementById("form1").reset();