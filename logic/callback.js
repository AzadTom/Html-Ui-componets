
function getUser(id,callback){

    console.log("reading users from database!");

    setTimeout(()=>{


        callback({id:id,githubid:"@azadtom1245"});

    },5000);
}


getUser(20,(user)=>{

    console.log(user);
});



 