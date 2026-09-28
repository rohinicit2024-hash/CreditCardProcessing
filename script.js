// ===============================
// LOGIN
// ===============================

function login() {

    let username =
        document.getElementById("username").value.trim();

    let password =
        document.getElementById("password").value.trim();


    if (username === "" || password === "") {

        alert("Please enter username and password");

        return;
    }


    // Save username

    localStorage.setItem("username", username);


    alert("Login successful!");


    // Open Dashboard

    window.location.href = "dashboard.html";
}


// ===============================
// FORGOT USERNAME
// ===============================

function forgotUsername() {

    alert(
        "Please contact the administrator " +
        "to recover your username."
    );
}


// ===============================
// FORGOT PASSWORD
// ===============================

function forgotPassword() {

    alert(
        "Password reset instructions will be " +
        "sent to your registered email."
    );
}


// ===============================
// PROCESS PAYMENT
// ===============================

function processPayment() {

    let cardHolder =
        document.getElementById("cardHolder").value.trim();

    let cardNumber =
        document.getElementById("cardNumber").value.trim();

    let amount =
        document.getElementById("amount").value.trim();


    if (
        cardHolder === "" ||
        cardNumber === "" ||
        amount === ""
    ) {

        alert("Please enter all payment details");

        return;
    }


    // Get logged-in username

    let username =
        localStorage.getItem("username");


    // Get existing transactions

    let transactions =
        JSON.parse(localStorage.getItem("transactions")) || [];


    // Current date and time

    let currentDate =
        new Date();


    // Create transaction

    let transaction = {

        username: username,

        date:
            currentDate.toLocaleDateString("en-GB"),

        time:
            currentDate.toLocaleTimeString("en-IN"),

        transactionId:
            "TXN" +
            String(transactions.length + 1).padStart(3, "0"),

        cardHolder:
            cardHolder,

        amount:
            amount,

        status:
            "Successful"
    };


    // Save transaction

    transactions.push(transaction);


    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );


    // Success message

    alert(
        "Payment Processed Successfully!\n\n" +

        "Card Holder: " +
        cardHolder +

        "\nAmount: ₹" +
        amount +

        "\nStatus: Successful"
    );


    // Open Transaction History

    window.location.href = "transactions.html";
}


// ===============================
// LOGOUT
// ===============================

function logout() {

    localStorage.removeItem("username");

    alert("You have been logged out.");

    window.location.href = "index.html";
}


// ===============================
// BACK TO DASHBOARD
// ===============================

function goToDashboard() {

    window.location.href = "dashboard.html";
}