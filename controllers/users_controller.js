module.exports.profile = function(req,res) {
    return res.render('users',{
        title: "User Profile"
    });
}

//render sign up page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up',{
        title: "Codiel | Sign Up"
    });
}

//render sign in page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in',{
        title: "Codiel | Sign In"
    });
}

//get the sign up data
module.exports.create = function(req, res){
    //TODO later
}

//sign in and create a seesion
module.exports.createSession = function(req, res){
    //TODO later
}