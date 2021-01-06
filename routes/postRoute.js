const postService = require("../services/postService")

const initPostRoute = function(server, connection){
	
	server.route({
        method: "GET",
        path: "/users",
        options: {
            cors: true,
            handler: (request, h) => {
                return postService.get(connection);}
        }, 

})


	server.route({
        options: {
            cors: true,
            handler: (request, h) => {
                return postService.insert(connection, request.payload)
                .catch(error => console.log(error));}
        }, 
    method: "POST",
    path: "/addUser",
})

	server.route({
    method: "PUT",
    path: "/user/{idUser}",
    handler: (request, h) => {
        return postService.update(connection, request.params.idUser, request.payload)
        .catch(error => console.log(error));;
    }
})

	server.route({
    method: "DELETE",
    path: "/user/{idUser}",
    handler: (request, h) => {
        return postService.delete(connection, request.params.idUser);
    }
})

}

module.exports = initPostRoute