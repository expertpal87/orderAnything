const config={
    default : {
        SECRET: 'mysecretkey',
        DATABASE: 'mongodb://localhost/Order_anything'
    }
}


exports.get = function get(env){
    return config.default
}