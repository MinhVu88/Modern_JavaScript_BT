const button1 = document.querySelector('#button1');

const customer_ui = document.querySelector('#customer');

const button2 = document.querySelector('#button2');

const customers_ui = document.querySelector('#customers');

button1.addEventListener('click', loadCustomer);

function loadCustomer() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function() {
    if(this.status === 200) {
      console.log(typeof this.responseText,' -> ',this.responseText);

      const customer = JSON.parse(this.responseText);

      console.log(typeof customer,' | Array?',Array.isArray(customer),' | ',customer);

      const output = `<ul>
                         <li>ID: ${customer.id}</li>
                         <li>Name: ${customer.name}</li>
                         <li>Company: ${customer.company}</li>
                         <li>Phone: ${customer.phone}</li>
                      </ul>`;
    
    customer_ui.innerHTML = output;                  
    }
  };

  xhr.send();
};

button2.addEventListener('click', loadCustomers);

function loadCustomers() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function() {
    if(this.status === 200) {
      console.log(typeof this.responseText,' -> ',this.responseText);

      const customers = JSON.parse(this.responseText);

      console.log(typeof customers,' | Array?',Array.isArray(customers),' | ',customers);

      let output = '';

      // += is used because the data in customers.json should be appended to output, so that it stays
      // if = were used, output's value would be overwritten after each iteration in the loop
      customers.forEach(function(customer) {
          output += `<ul>
                        <li>ID: ${customer.id}</li>
                        <li>Name: ${customer.name}</li>
                        <li>Company: ${customer.company}</li>
                        <li>Phone: ${customer.phone}</li>
                     </ul>`;
      });

      customers_ui.innerHTML = output;                  
    }
  };

  xhr.send();
};