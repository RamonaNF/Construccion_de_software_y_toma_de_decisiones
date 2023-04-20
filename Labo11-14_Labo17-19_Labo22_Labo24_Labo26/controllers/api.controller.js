require('dotenv').config();
const passport = require('passport');

exports.getNASA = (request, response, next) => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=`+process.env.APOD_KEY, {
        method: 'GET',
        headers: {
            //'Content-Type': 'application/json',
        }
    }).then((result) => {
        //console.log(result);
        return result.json();
    }).then((data) => {
        //console.log(data);
        response.status(200).json({data});
    }).catch(err => {
        console.log(err);
    });
}

// Google
/*export*/ const google = passport.authenticate("google", {
    scope: ["profile"],
});

exports.getGoogle = (request, response, next) => {
    console.log('GOOGLE', request);
}