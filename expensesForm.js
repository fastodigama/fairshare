window.onload = domReady;

function domReady() {
// alert("dom ready");


    var formHandle = document.forms.members_form

    //load the data from local storage if exist

    member1Name.value = localStorage.getItem("member1Name");
    member1Income.value = localStorage.getItem("member1Income");
    member2Name.value = localStorage.getItem("member2Name");
    member2Income.value = localStorage.getItem("member2Income");
    rent.value = localStorage.getItem("Rent");
    hydroBill.value = localStorage.getItem("Hydro Bill");
    waterBill.value = localStorage.getItem("Water Bill");
    gasBill.value = localStorage.getItem("Gas Bill");
    internetBill.value = localStorage.getItem("Internet Bill");
    groceriesBill.value = localStorage.getItem("Groceries Bill");
    carPayment.value = localStorage.getItem("Car Payment");
    insurance.value = localStorage.getItem("Insurance");
   



   

    

    function saveToLocalStorage(){

        //get the values from the form
        var member1Name = formHandle.member1Name.value;
        if (member1Name === "") {
            formHandle.member1Name.style.background = "red"; // Highlight invalid field
            formHandle.member1Name.focus(); // Focus on the invalid input
            return false;
        } else {
            formHandle.member1Name.style.background = ""; // Reset background if valid
        }

        var member1Income = formHandle.member1Income.value;
        if (member1Income === "" || isNaN(member1Income)) { // Check if empty or not a number
            formHandle.member1Income.style.background = "red";
            formHandle.member1Income.focus();
            return false;
        } else {
            formHandle.member1Income.style.background = ""; // Reset background if valid
        }

        var member2Name = formHandle.member2Name.value;
        if (member2Name === "") {
            formHandle.member2Name.style.background = "red";
            formHandle.member2Name.focus();
            return false;
        } else {
            formHandle.member2Name.style.background = ""; // Reset background if valid
        }

        var member2Income = formHandle.member2Income.value;
        if (member2Income === "" || isNaN(member2Income)) { // Check if empty or not a number
            formHandle.member2Income.style.background = "red";
            formHandle.member2Income.focus();
            return false;
        } else {
            formHandle.member2Income.style.background = ""; // Reset background if valid
        }

        var rent = formHandle.rent.value;
        if (rent === "" || isNaN(rent)) { // Check if empty or not a number
            formHandle.rent.style.background = "red";
            formHandle.rent.focus();
            return false;
        } else {
            formHandle.rent.style.background = ""; // Reset background if valid
        }

        var hydroBill = formHandle.hydroBill.value;
        if (hydroBill === "" || isNaN(hydroBill)) { // Check if empty or not a number
            formHandle.hydroBill.style.background = "red";
            formHandle.hydroBill.focus();
            return false;
        } else {
            formHandle.hydroBill.style.background = ""; // Reset background if valid
        }

        var waterBill = formHandle.waterBill.value;
        if (waterBill === "" || isNaN(waterBill)) { // Check if empty or not a number
            formHandle.waterBill.style.background = "red";
            formHandle.waterBill.focus();
            return false;
        } else {
            formHandle.waterBill.style.background = ""; // Reset background if valid
        }

        var gasBill = formHandle.gasBill.value;
        if (gasBill === "" || isNaN(gasBill)) { // Check if empty or not a number
            formHandle.gasBill.style.background = "red";
            formHandle.gasBill.focus();
            return false;
        } else {
            formHandle.gasBill.style.background = ""; // Reset background if valid
        }

        var internetBill = formHandle.internetBill.value;
        if (internetBill === "" || isNaN(internetBill)) { // Check if empty or not a number
            formHandle.internetBill.style.background = "red";
            formHandle.internetBill.focus();
            return false;
        } else {
            formHandle.internetBill.style.background = ""; // Reset background if valid
        }

        var groceriesBill = formHandle.groceriesBill.value;
        if (groceriesBill === "" || isNaN(groceriesBill)) { // Check if empty or not a number
            formHandle.groceriesBill.style.background = "red";
            formHandle.groceriesBill.focus();
            return false;
        } else {
            formHandle.groceriesBill.style.background = ""; // Reset background if valid
        }

        var carPayment = formHandle.carPayment.value;
        if (carPayment === "" || isNaN(carPayment)) { // Check if empty or not a number
            formHandle.carPayment.style.background = "red";
            formHandle.carPayment.focus();
            return false;
        } else {
            formHandle.carPayment.style.background = ""; // Reset background if valid
        }

        var insurance = formHandle.insurance.value;
        if (insurance === "" || isNaN(insurance)) { // Check if empty or not a number
            formHandle.insurance.style.background = "red";
            formHandle.insurance.focus();
            return false;
        } else {
            formHandle.insurance.style.background = ""; // Reset background if valid
        }

              

        //save to local storage
        localStorage.setItem("member1Name", member1Name);
        localStorage.setItem("member1Income", member1Income);
        localStorage.setItem("member2Name", member2Name);
        localStorage.setItem("member2Income", member2Income);
        localStorage.setItem("Rent", rent);
        localStorage.setItem("Hydro Bill", hydroBill);
        localStorage.setItem("Water Bill", waterBill);
        localStorage.setItem("Gas Bill", gasBill);
        localStorage.setItem("Internet Bill", internetBill);
        localStorage.setItem("Groceries Bill", groceriesBill);
        localStorage.setItem("Car Payment", carPayment);
        localStorage.setItem("Insurance", insurance);
        
        
    }
//save the data when save is clicked
formHandle.onsubmit =saveToLocalStorage;
console.log(localStorage);

//delete the local storage
formHandle.onreset = function(){
    localStorage.clear();
};
console.log(localStorage);


}