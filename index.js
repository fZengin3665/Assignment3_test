const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const address = document.getElementById("address");
const city = document.getElementById("city");
const province = document.getElementById("province");
const postalCode = document.getElementById("postalCode");
const phoneNumber = document.getElementById("phoneNumber");
const email = document.getElementById("email");
const year = document.getElementById("year");
const make = document.getElementById("make");
const model = document.getElementById("model");
const accident = document.getElementById("accident");
const experience = document.getElementById("experience");
const yesNo = document.getElementById("yesNo");
const lsOutput = document.getElementById("lsOutput");
const btnInsert = document.getElementById("btnInsert");

let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let regEx = /[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/;
var regPhone = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;



btnInsert.onclick = function () {
    const fnameValue = fname.value;
    const lnameValue = lname.value;
    const addressValue = address.value;
    const cityValue = city.value;
    const provinceValue = province.value;
    const postalCodeValue = postalCode.value;
    const phoneNumberValue = phoneNumber.value;
    const emailValue = email.value;
    const yearValue = year.value;
    const makeValue = make.value;
    const modelValue = model.value;
    const accidentValue = accident.value;
    const experienceValue = experience.value;
    const yesNoValue = yesNo.value;

    if(!(emailValue.match(mailformat)))
    {
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
    }

    if(!(postalCodeValue.match(regEx)))
    {
        alert("You have entered an invalid postal code!");
        document.form1.text1.focus();
        return false;
    }

    if(!(phoneNumberValue.match(regPhone)))
    {
        alert("You have entered an invalid phone number!");
        document.form1.text1.focus();
        return false;
    }
   
    let accidentReport = "";
    let insurencePremium;

    if (accidentValue >= 3){
       accidentReport = "You are not eligible to get car insurance."
    }
    else {
        accidentReport = "You are eligible for insurance."
        if (experienceValue == 0){
            insurencePremium = 4000;
        }
        else if (experienceValue >= 1 && experienceValue <= 9){
            insurencePremium = 2500;
        }
        else if (experienceValue > 9){
            insurencePremium = 1000;
        }
    
        if(yesNoValue == "yes") {
             (insurencePremium * 24) / 100;
          }else if(yesNoValue == "no") {
              insurencePremium + 10;
          }
    }

    
// //    console.log(insurencePremium);
//       if (fnameValue && lnameValue && addressValue && cityValue && provinceValue && postalCodeValue &&
//         phoneNumberValue && emailValue && yearValue && makeValue && modelValue && accidentValue && 
//         experienceValue){
//           localStorage.setItem(fnameValue, lnameValue, addressValue, cityValue, provinceValue, postalCodeValue,
//             phoneNumberValue, emailValue, yearValue, makeValue, modelValue, accidentValue, 
//             experienceValue);
            
//             location.reload();
//         }


if (fnameValue && lnameValue && addressValue && cityValue && provinceValue && postalCodeValue &&
            phoneNumberValue && emailValue && yearValue && makeValue && modelValue && accidentValue && 
        experienceValue){
            lsOutput.innerHTML += `First Name: ${fnameValue} <br/> Last Name: ${lnameValue} <br/>
            Address: ${addressValue} <br/> City: ${cityValue} <br/>
            Province: ${provinceValue} <br/> Postal Code: ${postalCodeValue} <br/>
            Phone Number: ${phoneNumberValue} <br/> Email Address: ${emailValue} <br/>
            Year of the Car: ${yearValue} <br/> Make of the car: ${makeValue} <br/>
            Model of the car: ${modelValue} <br/> Insurance Eligibility: ${accidentReport} <br/>
            Insurance premium: ${insurencePremium}`;
        
        }
        else{
            alert("All field has to be filled.")
        }
}