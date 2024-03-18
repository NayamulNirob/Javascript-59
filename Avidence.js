function formSubmit(event) {


    event.preventDefault();

    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    let remarks = document.getElementById("remarks").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let subject = document.querySelectorAll('input[name="subject"]:checked');
    let place = document.getElementById("place").value;


    


    let subjectValue=[];

    for(let index=0; index<subject.length; index++){

       subjectValue.push(subject[index].value);

    }




    let output="Name:" + name + "\n";
    output+="Contact:" + contact + "\n";
    output+="Remarks:" + remarks + "\n";
    output+="Gender:" + gender.value + "\n";
    output+="Subject:" + subjectValue + "\n";
    output+="Place:" + place+ "\n";




    let newWindow = window.open("", '_blank');

    newWindow.document.write("<pre>" + output + "</pre>");







}

let regForm = document.getElementById("avidence");
regForm.addEventListener('submit', formSubmit);