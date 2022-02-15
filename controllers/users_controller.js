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