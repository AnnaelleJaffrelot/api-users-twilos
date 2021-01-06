const postDao = require("../dao/postDao")
module.exports={
	get(connection){
		return postDao.get(connection)
		
	},
	insert(connection, user){
	return postDao.insert(connection, JSON.parse(user))
},

update(connection, idUser, user){
	const updatedUser = {
		firtname: user.firtname,
		lastname: user.lastname,
		pseudo: user.pseudo,
		avatar: user.avatar,
	}
	return postDao.update(connection, idUser, updatedUser)
},
delete(connection, idUser){
	return postDao.delete(connection, idUser)
}
}