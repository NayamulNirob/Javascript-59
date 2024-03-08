




function dataForm(event) {


    event.preventDefault();

    let pName = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let subject = document.getElementById('subject').value;
    let dob= document.getElementById('dob').value;
    let address = document.getElementById('address').value;
    let hobby = document.querySelectorAll('input[name="hobby"]:checked');



    // start validation

    if (pName == '') {

        alert("Name Can Not Be Empty");
        return;
    }
    else if (pName.length <= 3) {

        alert("Name Can Not Be less then 4 Charectar");
        return;

    }




    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;





    if (email == '') {

        alert('Email Can Not be Blank');
        return;
    }

    else if (regEx.test(email)) {

    }

    else {
        alert("Please Enter a Vlaid Email address");
        return;
    }


    if (password == '') {

        alert('Can Not be Blank');
        return;
    }

    else if (password.length >= 8 && password.length <= 20) {


    }

    else {
        alert('password atleast 8 Charectar and maxmimam 20 charectar');
        return;
    }

    if (gender == null) {

        alert('Gender Must be Selected');
        return;
    }


  
    if (hobby.length == 0) {

        alert('Atleast one hobby Must be Selected');
        return;
    }


    if (subject === "Subject..") {

        alert("subject must be Choosen");
        return;
    }



    if(dob==""){

        alert('Date and Time must be Selected');
        return;
    }
 

    if(address==""){

        alert('Addrees must be Fillup');
        return;

    }
 



    // end validation

     let hobbyValue=[];

     for(let index=0; index<hobby.length; index++){

        hobbyValue.push(hobby[index].value);

     }

    // let hobbyValue = [];

    // hobby.forEach(

    //     function (hobby) {
    //         hobbyValue.push(hobby.value);

    //     }

    // );



    let output = "Name:" + pName + "\n";
    output += "email:" + email + "\n";
    output += "password:" + password + "\n";
    output += "Gender:" + gender.value + "\n";
    output += "Hobby:" + hobbyValue + "\n";
    output += "subject:" + subject + "\n";
    output += "dob:" + dob+ "\n";
    output += "address:" + address + "\n";


    let newWindow = window.open("", '_blank');

    newWindow.document.write("<pre>" + output + "</pre>");














}



let regForm = document.getElementById("regForm");
regForm.addEventListener('submit', dataForm);


