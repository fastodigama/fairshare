window.onload = calculateProportion;

// Main function that runs when the window loads
function calculateProportion() {

    var totalIncome = 0.0; // Variable to store the total income

    // Get elements from the HTML
    var incomeContainer = document.getElementById("income-container");
    var expenseContainer = document.getElementById("expense-container");
    var expenseCardContainer = document.getElementById("expense-card-container");
    var btnReset = document.getElementById("reset");
    var leftSideBar = document.getElementById("left-sidebar");
    //clear the localstorage
    btnReset.onclick = function (){

        var resetConfirm = confirm("Are you sure you want to reset? this will delete all data")
        if (resetConfirm === true){
            localStorage.clear();
        location.reload();

        }
    
        
    }

    // Arrays to store member names and incomes
    var name = [];
    var income = [];
    // Strings to hold bills and name-income pairs for display
    var bills = "";
    var nameAndIncome = "";
    var memberProportion = []; // Array to store each member's proportion

    // Calculate total income from localStorage
    for (var i = 0; i < localStorage.length; i++) {
        // Retrieve income from localStorage and convert it to a number
        income[i] = parseFloat(localStorage.getItem(`member${i}Income`));
        // Add income to totalIncome if it's a valid number
        if (!isNaN(income[i])) {
            totalIncome += income[i];
        }
    }

    // Display member names and incomes, and calculate their income proportion
    for (var i = 0; i < localStorage.length; i++) {
        // Retrieve names and incomes from localStorage
        name[i] = localStorage.getItem(`member${i}Name`);
        income[i] = localStorage.getItem(`member${i}Income`);
        // Add names and incomes to display if they exist
        if (name[i] != null || income[i] != null) {
            nameAndIncome += `<div class=pair> <p>${name[i]}</p>  <p>${income[i]}</p></div>`;
            // Calculate the proportion of total income for each member
            memberProportion[i] = (income[i] / totalIncome * 100).toFixed(2);
        }
    }

    // Update the income container with the name and income data
    incomeContainer.innerHTML = nameAndIncome;

    // Display bills on the right sidebar
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i); // Get the key name
        var value = localStorage.getItem(key); // Get the value associated with the key
        // Check if the key is a bill (not related to members)
        if (!key.includes("member") && !key.includes("Name") && !key.includes("Income")) {
            bills += `<div class=pair> <p> ${key} </p> <p>${value}</p></div>`;
        }
    }
    // Update the expense container with the bills data
    expenseContainer.innerHTML = bills;

    // Sort members by income proportion in descending order
    var members = [];
    for (var i = 0; i < name.length; i++) {
        if (name[i] && memberProportion[i]) {
            members.push({ name: name[i], proportion: memberProportion[i] });
        }
    }
    //source:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    members.sort(function (a, b) {
        return parseFloat(b.proportion) - parseFloat(a.proportion);
    });

    // Dynamically update the summary paragraph with the top two contributors
    if (members.length >= 2) {
        var highest = members[0]; // Member with the highest proportion
        var second = members[1]; // Member with the second highest proportion
        document.querySelectorAll(".summary-member-name")[0].innerText = highest.name;
        document.querySelectorAll(".summary-member-name")[1].innerText = second.name;
        document.querySelectorAll(".member-proportion")[0].innerText = `${highest.proportion}%`;
        document.querySelectorAll(".member-proportion")[1].innerText = `${second.proportion}%`;

        //generate member cards
        var memberCard = "";
        

        for(var i = 0 ; i < members.length ; i++){

            
            memberCard += `<div class="member-card-box">
                    <div class="member-card-cover">
                        <div class="profile-img">
                        </div>
                    </div>
                    <div class="card-content">
                        <p class="member-name">${ members[i].name}</p>
                        <p class="member-role">will pay ${members[i].proportion} % of bills</p>
                       <!-- <p class="member-level">top earner</p> -->
                    </div>
                </div>`;

                leftSideBar.innerHTML = memberCard;

        }

         
    };
    

    // Generate expense cards and display them in the container
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i); // Get the key name
        var value = parseFloat(localStorage.getItem(key)); // Get the corresponding value

        // Check if the key represents an expense
        if (!isNaN(value) && !key.includes("member") && !key.includes("Name") && !key.includes("Income")) {
            // Generate HTML for an expense card
            var expenseCard = `
            <div class="expense-card">
                <h4>${key}</h4>
                <div class="share-row">
                    <span>${members[0].name} Share:</span>
                    <span>${(value * members[0].proportion / 100).toFixed(2)}</span>
                </div>
                <div class="share-row">
                    <span>${members[1].name} Share:</span>
                    <span>${(value * members[1].proportion / 100).toFixed(2)}</span>
                </div>
            </div>
            `;
            // Add the expense card to the container
            expenseCardContainer.innerHTML += expenseCard;
        }
    }

    //weather logic
    var out_location = document.getElementById("location");
    var out_temp = document.getElementById("temperature");
    var out_conditions = document.getElementById("conditions");
    var out_windSpeed = document.getElementById("windspeed")
    var out_icon = document.getElementById("icon");
    var out_error = document.getElementById("error");
    var city = "Toronto";
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac41d318a4f21336682e06af57f62226&units=metric`;
           
        // XMLHttpRequest object to retrieve API data
        var xhr = new XMLHttpRequest();
        //open get request to the url and asynchronous
        xhr.open("GET", url,true);
        //SPECIFY that you would like your response formated as json
        xhr.responseType = "json";
        //tell xhr to not send any data
        xhr.send(null);

        xhr.onreadystatechange = function (){
            if (xhr.readyState === 4){
                if (xhr.status === 200){
                    //USe response property for resualts 
                    var DATA = xhr.response;
                    console.log(DATA);

                    //output the data to html

                    out_location.innerHTML = DATA.name;
                    out_temp.innerHTML = Math.round(DATA.main.temp) + "&deg;" + "C";
                    out_conditions.innerHTML = DATA.weather[0].description;
                    out_windSpeed.innerHTML = DATA.wind.speed + " kmph";
                    out_icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${DATA.weather[0].icon}.png" alt="${DATA.weather[0].description}">`;
                                    
                }else{
                    out_error.innerHTML ="Error getting data";
                    
                };
            };

        };


};