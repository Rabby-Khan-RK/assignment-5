
    document.getElementById("donate-now").addEventListener('click', function (event){
        event.preventDefault();

        const addMoney = document.getElementById('input-donation-amount').value;
        const addMoneyNumber = parseFloat(addMoney);
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - addMoneyNumber;
        document.getElementById('account-balance').innerText = newBalance.toFixed(2);
        const netAmount = document.getElementById('total-amount').innerText;
        const netAmountNumber = parseFloat(netAmount);
        const updatedNetAmount = netAmountNumber + addMoneyNumber;
        document.getElementById('total-amount').innerText = updatedNetAmount.toFixed(2);

        const historyItem = document.createElement("div");
        historyItem.className = "bg-white p-3 rounded-md border-1 border-indigo-500";

        historyItem.innerHTML = `
        <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
        <p class="text-xs text-gray-500">${new Date().toLocaleTimeString()}</p>

        <p class="text-xs text-gray-500">addMoney: $${addMoneyNumber.toFixed(2)}</p>

        `;

        const historyContainer = document.getElementById("history-btn");

        historyContainer.insertBefore(historyItem, historyContainer.firstChild)
    })
    document.getElementById("donate-now-second").addEventListener('click', function (event){
        event.preventDefault();

        const addMoney = document.getElementById('input-donation-amount-second').value;
        const addMoneyNumber = parseFloat(addMoney);
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - addMoneyNumber;
        document.getElementById('account-balance').innerText = newBalance.toFixed(2);
        const netAmount = document.getElementById('total-amount-second').innerText;
        const netAmountNumber = parseFloat(netAmount);
        const updatedNetAmount = netAmountNumber + addMoneyNumber;
        document.getElementById('total-amount-second').innerText = updatedNetAmount.toFixed(2);
    })
    document.getElementById("donate-now-third").addEventListener('click', function (event){
        event.preventDefault();

        const addMoney = document.getElementById('input-donation-amount-third').value;
        const addMoneyNumber = parseFloat(addMoney);
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - addMoneyNumber;
        document.getElementById('account-balance').innerText = newBalance.toFixed(2);
        const netAmount = document.getElementById('total-amount-third').innerText;
        const netAmountNumber = parseFloat(netAmount);
        const updatedNetAmount = netAmountNumber + addMoneyNumber;
        document.getElementById('total-amount-third').innerText = updatedNetAmount.toFixed(2);        
    })

// donation and history btn start------

const historyBtn = document.getElementById("history-btn");
const donationBtn = document.getElementById("donation-btn");
historyBtn.addEventListener("click", function(){
    historyBtn.classList.add(
        'bg-lime-400',
    );
    donationBtn.classList.remove(
        'bg-lime-400'
    )
    document.getElementById("main-container").classList.add("hidden")
    document.getElementById("history-section").classList.remove("hidden");

    })

    // blog btn start

    const showFormBtn = document.getElementById('showFormBtn');
    const myForm = document.getElementById('myForm');
    const navBar = document.getElementById('navBar');
    const mainContainer = document.getElementById('main-container');
    const faqSection = document.getElementById('faqSection');

    showFormBtn.addEventListener('click', function(){
    myForm.style.display = 'block';
    showFormBtn.style.display = 'none';
    navBar.style.display = 'none';
    mainContainer.style.display = 'none';
    faqSection.style.display = 'block'
    });




    // live validation for input
    document.getElementById("input-donation-amount").addEventListener("input", function(){
        const inputValue = parseFloat(document.getElementById("input-donation-amount").value);
        console.log(inputValue);
        if (isNaN(inputValue) || inputValue <= 0) {
            document.getElementById("amountError").classList.remove("hidden");
            return;
        }
        
    })


    // showing modal

    const myModal = document.getElementById('myModal');
    const closeModal = document.getElementById('closeModal');

    closeModal.addEventListener('click', function(){
        myModal.style.display = 'none';
    });

    window.addEventListener('click', function(event){
        if (event.target === myModal) {
            myModal.style.display = 'none';
        }
    })