




function dataForm(event) {


    event.preventDefault();

    let pName = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let Subject = document.getElementById('subject').value;
    let DOB = document.getElementById('dob').value;
    let Address = document.getElementById('address').value;
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

    else { pName }


    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;





    if (email == '') {

        alert('Can Not be Blank');
        return;
    }

    else if (regEx.test(email)) {

    }

    else {
        alert("Please Enter a Vlaid Email Address");
        return;
    }


    if (password == ' ') {

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


    else {

        gender
    }

    if (hobby.length == 0) {

        alert('Atleast one hobby Must be Selected');
        return;
    }


    else {

        hobby
    }
    if (Subject === "Subject..") {

        alert("Subject must be Choosen");
        return;
    }

    else { Subject}


    if(DOB==""){

        alert('Date and Time must be Selected');
        return;
    }
    else{
        DOB
    }

    if(Address==""){

        alert('Addrees must be Fillup');
        return;

    }
    else{
        Address
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
    output += "Subject:" + Subject + "\n";
    output += "DOB:" + DOB + "\n";
    output += "Address:" + Address + "\n";


    let newWindow = window.open("", '_blank');

    newWindow.document.write("<pre>" + output + "</pre>");














}



let regForm = document.getElementById("regForm");
regForm.addEventListener('submit', dataForm);


