


var user ={
    createUser:function (request,response) {
        var userData=request.body;
        console.log("userData",userData);

        response.status(200);
        response.json({
            "name":userData.firstName,
            "lastName":userData.lastName
        });
        return;

        // response.end(JSON.stringify(userData));
    },

    getUser:function(request,response){
        var userData=request.query;

        console.log("userData.user",userData.user);
        console.log("userData.name",userData.name);
        response.status(200);
        response.json({
            "status":1,
            "user":userData.user,
            "name":userData.name
        
        })

    }
};



module.exports = user;