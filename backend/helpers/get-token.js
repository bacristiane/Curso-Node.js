const getToken = (req) => {

const token = req.headers.token

return token
}

module.exports = getToken