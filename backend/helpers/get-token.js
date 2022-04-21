const getToken = (req) => {

    const token = req.headers.token
    console.log(token)
    return token
}

module.exports = getToken