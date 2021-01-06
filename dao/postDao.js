module.exports = {
	get(connection) {
	return new Promise((resolve,reject) =>{
	connection.query('SELECT * FROM users', function (error, results, fields){
		if (error) return reject(error);
		resolve(results)
	})
})
},

	insert(connection, user) {
	return new Promise((resolve,reject) =>{
		console.log(user)
	connection.query('INSERT INTO users (firstname, lastname, pseudo, avatar) VALUES (?,?,?,?)', [user.firstname,user.lastname,user.pseudo,user.avatar], function (error, results, fields){
		if (error) return reject(error);
		resolve(results)
	})
})
},


	update(connection, id, user) {
	return new Promise((resolve,reject) =>{
	connection.query('UPDATE users SET firstname= ?, lastname = ?, pseudo = ?, avatar = ? WHERE id = ?', [user.firstname,user.lastname,user.pseudo,user.avatar,id], function (error, results, fields){
		if (error) return reject(error);
		resolve(results)
	})
})
},


	delete(connection, id, user) {
	return new Promise((resolve,reject) =>{
	connection.query('DELETE FROM users WHERE id = ?', [id], function (error, results, fields){
		if (error) return reject(error);
		resolve(results)
	})
})
}
}
