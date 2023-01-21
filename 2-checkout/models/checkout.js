const db = require('../server/db.js')

module.exports = {
  insert: function (params) {
    let query = 'INSERT INTO responses (firstname, lastname,email,password,address_line1,address_line2,city,state,zipcode,phone_number,creditcard_number,expiry,cvv,billingzip,session_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
    let queryArgs = [params.firstname, params.lastname, params.email, params.password, params.address_line1, params.address_line2, params.city, params.state, params.zipcode, params.phone_number, params.creditcard_number, params.expiry, params.cvv, params.billingzip, params.session_id]
    // queryAsyc returns a promise, so no callback needed for 3rd param
    return db.queryAsync(query, queryArgs)
  },
}