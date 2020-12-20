// define the dom/UI vars
const loan_form = document.querySelector('#loan-form');

const loan_amount = document.querySelector('#amount');

const interest_rate = document.querySelector('#interest');

const repayment_years = document.querySelector('#years');

const monthly_payment = document.querySelector('#monthly-payment');

const total_payment = document.querySelector('#total-payment');

const total_interest = document.querySelector('#total-interest');

const card = document.querySelector('.card'); // parent

const heading = document.querySelector('.heading'); // child

const loading = document.querySelector('#loading');

const results = document.querySelector('#results');

// event handlers
loan_form.addEventListener('submit', e => {
    e.preventDefault();

    // don't show results right away whenever the 'Calculate' button is clicked
    results.style.display = 'none';

    // instead, after the 'Calculate' button is clicked, show the loading image 1st for a few seconds
    loading.style.display = 'block';

    // 2 seconds after the 'Calculate' button is clicked, calculateResults() is called
    setTimeout(calculateResults, 2000);
});

function calculateResults() {
    const principal = parseFloat(loan_amount.value); // principal === loan_amount

    const calculated_interest = parseFloat(interest_rate.value) / 100 / 12;

    const calculated_payments = parseFloat(repayment_years.value) * 12;

    // compute monthly payment
    const x = Math.pow(1 + calculated_interest, calculated_payments);

    const monthly = (principal * x * calculated_interest) / (x - 1);

    // check if monthly is a finite number
    if (isFinite(monthly)) {
        monthly_payment.value = monthly.toFixed(2);

        total_payment.value = (monthly * calculated_payments).toFixed(2);

        total_interest.value = ((monthly * calculated_payments) - principal).toFixed(2);

        // at 1st, the loading img gets displayed for a few seconds, then it's hidden & the results are subsequently shown
        results.style.display = 'block';

        loading.style.display = 'none';
    } else {
        showError('Invalid Value');
    }
};

function showError(error_msg) {
    // if something's wrong, hide both the loading img & results
    results.style.display = 'none';

    loading.style.display = 'none';

    const error_element = document.createElement('div'); // create a new element

    error_element.className = 'alert alert-danger'; // Bootstrap classes

    // create a textNode & append it to error_element
    error_element.appendChild(document.createTextNode(error_msg));

    // display the error message above the heading
    card.insertBefore(error_element, heading);

    // clear error msg after a certain amount of time
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
};