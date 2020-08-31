




function validationErrors(res, payload = {}) {
    return res.status(422).json({
        status: false,
        error: payload
    });
}


function success(res, msg = 'Operation successful') {
    return res.status(200).json({
        status: true,
        message: msg
    });
}


function withData(res, payload = {}) {
    return res.status(200).json({
        status: true,
        data: payload
    });
}


function error(res, msg = 'Error Occured', code = 400) {
    return res.status(code).json({
        status: false,
        message: msg
    });
}


module.exports.success = success
module.exports.withData = withData
module.exports.error = error
module.exports.validationErrors = validationErrors