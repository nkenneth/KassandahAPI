const config = require("config");
const PAYSTACK_SECRET_KEY = config.get("PAYSTACK_SECRET_KEY");
const PAYSTACK_URL = config.get("PAYSTACK_URL");
const axios = require('axios');

async function createCustomer(customerObj) {
    let config = {
        method: 'post',
        url: PAYSTACK_URL + "/customer",
        headers: { 'Content-Type': 'application/json', 'Authorization': "Bearer " + PAYSTACK_SECRET_KEY },
        data: customerObj
    };

    //console.log(config)
    try {
        let response = await axios(config);
        return { statusCode: 200, message: "Success", data: response.data }
    } catch (Ex) {
        console.log("Error Calling createCustomer Api:", Ex)
        return { statusCode: 400, message: "Success", data: Ex }
    }
}

async function createCustomerFunction() {
    let customerObject = {
        email: "dhaliwalinderjot@gmail.com",
        "first_name": "Inderjot",
        "last_name": "Inderjot",
        "phone": "09872546106",
        "metadata": {
            "operatorId": "123123",
            "operatorNtmsCode": "123123123"
        }
    }
    let response = await createCustomer(customerObject);
    console.log("Create Customer Response: ", response);
    //console.log("Response: ", JSON.stringify(response))
}

async function updateCustomer(customerId, customerObj) {
    let config = {
        method: 'put',
        url: PAYSTACK_URL + "/customer/" + customerId,
        headers: { 'Content-Type': 'application/json', 'Authorization': "Bearer " + PAYSTACK_SECRET_KEY },
        data: customerObj
    };

    try {
        let response = await axios(config);
        return { statusCode: 200, message: "Success", data: response.data.data }
    } catch (Ex) {
        console.log("Error Calling updateCustomers Api:", Ex)
        return { statusCode: 400, message: "Success", data: Ex }
    }
}

async function updateCustomerFunction() {
    let customerObject = {
        "first_name": "Inderjot",
        "last_name": "Inder",
        "phone": "09872546101",
        "metadata": {
            "operatorId": "123123",
            "operatorNtmsCode": "123123123"
        }
    }
    let response = await updateCustomer("CUS_v3bppgq79dant79", customerObject);
    console.log("Update Customer Response: ", response);
}

async function getCustomer(customerId) {
    let config = {
        url: url = PAYSTACK_URL + "/customer/" + customerId,
        headers: { 'Content-Type': 'application/json', 'Authorization': "Bearer " + PAYSTACK_SECRET_KEY }
    };

    try {
        let response = await axios(config);
        return { statusCode: 200, message: "Success", data: response.data.data }
    } catch (Ex) {
        console.log("Error Calling getCustomer Api:", Ex)
        return { statusCode: 400, message: "Success", data: Ex }
    }
}

async function getCustomerFunction() {
    let response = await getCustomer("CUS_v3bppgq79dant79");
    console.log("Get Customer Response: ", response);
}

async function createInvoice(invoiceObj) {
    let config = {
        method: 'post',
        url: PAYSTACK_URL + "/paymentrequest",
        headers: { 'Content-Type': 'application/json', 'Authorization': "Bearer " + PAYSTACK_SECRET_KEY },
        data: invoiceObj
    };

    console.log(invoiceObj);

    try {
        let response = await axios(config);
        return { statusCode: 200, message: "Success", data: response.data.data }
    } catch (Ex) {
        console.log("Error Calling createInvoice Api:", Ex)
        return { statusCode: 400, message: "Success", data: Ex }
    }
}

async function createInvoiceFunction() {
    let invoiceObject = {
        "description": "1Brand New Invoice",
        "line_items": [
            { "name": "Test", "amount": 7000 }
        ],
        "tax": [
            { "name": "VAT", "amount": 1500 }
        ],
        "customer": "CUS_ymgbkfgcpg37rbs",
        "due_date": "2020-06-20"
    }
    let response = await createInvoice(invoiceObject);
    console.log("Create Invoice Response: ", response);
}

async function checkInvoice(invoiceId) {
    let config = {
        url: PAYSTACK_URL + "/paymentrequest/" + invoiceId,
        headers: { 'Content-Type': 'application/json', 'Authorization': "Bearer " + PAYSTACK_SECRET_KEY }
    };

    try {
        let response = await axios(config);
        return { statusCode: 200, message: "Success", data: response.data.data }
    } catch (Ex) {
        console.log("Error Calling checkInvoice Api:", Ex)
        return { statusCode: 400, message: "Success", data: Ex }
    }
}

async function checkInvoiceFunction() {
    let response = await checkInvoice("PRQ_pla03pkxyheldyj");
    console.log("Get Customer Response: ", response);
}

//createCustomerFunction();
//updateCustomerFunction();
//getCustomerFunction();
//createInvoiceFunction();
//checkInvoiceFunction();

module.exports.createCustomer = createCustomer;
module.exports.updateCustomer = updateCustomer;
module.exports.getCustomer = getCustomer;
module.exports.createInvoice = createInvoice;
module.exports.checkInvoice = checkInvoice;