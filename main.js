var interestElement = document.getElementById("interest");
var monthlyPaymentElement = document.getElementById('monthly-payment');

var sixMonths = 6;
var twelveMonths = 12;
var twentyFourMonths = 24;


function calculatePaidMonthly() {
    var interestRate1 = 10;
    var interestRate2 = 12;
    var interestRate3 = 14;

    var amountElement = document.getElementById('amount');
    var tenorElement = document.getElementById('tenor');
    var amount= Number(amountElement.value); 
    var tenor = Number(tenorElement.value);

    var interestRate = 10;
    if (tenor == sixMonths) {
        interestElement.value = interestRate1 + "%";
        interestRate = interestRate1;
    } else if (tenor == sixMonths) {
        interestElement.value = interestRate2 + "%";
        interestRate = interestRate1;

    } else {
        interestElement.value = interestRate3 + "%";
        interestRate = interestRate1;
    }

    var monthlyPaymentAmount = (amount / tenor) * (interestRate / 100)  +   (amount / tenor);
    monthlyPaymentElement.value = monthlyPaymentAmount;
    
}


function advide() {
    alert("Nhân viên của chúng tôi sẽ sớm liên hệ với bạn")
}

function apply() { 
    var amountElement = document.getElementById('amount');
    var amount = amountElement.value; 
    if(!amount || amount <= 0)  { 
        alert("Vui lòng nhập số tiền muốn vay")
        return; 
    }
    alert("Hồ sơ của bạn đã được gửi, vui lòng đợi phê duyệt")
}