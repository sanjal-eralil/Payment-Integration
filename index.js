



document.getElementById("message").onclick = function() {myFunction()};

function myFunction() {
  alert("The link for payment has been sent to your upi platform");
}


const submit= document.getElementsByClassName('form-contact')[0];


var id=Math.floor(Math.random() * 1000000000);


submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('connected');
    
    const fname=document.getElementById('fname').value;
    const email=document.getElementById('email').value;
    const amount=document.getElementById('phone').value;


    var body= "Thank you "+fname +" for donating "+ amount +"rupees to the organisation. This will go to the upliftment of the underprivilaged.Your transaction id is  " + id ;

   
    //Email code here
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sanjaleralil2@gmail.com",
        Password : "4C4270E34C731EBDE35797BEC3DC631AC23A",
        To : email,
        From : "sanjaleralil2@gmail.com",
        Subject : "Payment Confirmation",
        Body : body
    }).then(
      message => alert("Thank you for the contribution. The confirmation mail has been sent to the registered mail")
    );
    




/*
   Email.send({
        SecureToken : "05eb5c14-ae32-4f7d-9b57-608c7eea6e97",
        To : 'sanjaleralil2@gmail.com',
        From : "sanjalerail2@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    */
    /*
var fname=$('#fname').value();
var email=$('#email').value();
*/


/*
if(fname===''||lname===''||email===""||phone===""||submit===""){
  alert("please fill all the details");
}*/

})