module.exports = async function(base, by_text, by_reaction) {
    try{
        let users = []

	let found_posts = await base.posts.find({
            title: new RegExp(by_text, 'g'),
            text: new RegExp(by_text, 'g')
        })

	
        for(let p = 0; p < found_posts.length; p++){
            let found_post = found_posts[p]
            let found_usernames = await base.reactions.aggregate([
		{ $lookup: { from:"users", localField:"user", foreignField:"_id", as:"users_react" } }, // join reaction to users collections
		{ $match: { post: found_post._id , reaction: by_reaction } }, // filter by wanted post and wanted reaction
		{ $project: { "users_react.username":1 , "_id":0} }, //return only username attribute
		{ $match: { "users_react.username":{ "$exists":true , "$ne":null } } } // remove blank 'matches'
	    ])
	    
	    for(let p = 0 ; p < found_usernames.length ; p++){
		if(users.indexOf(found_usernames[p].users_react[0].username) === -1)
		    users.push(found_usernames[p].users_react[0].username)
	    }
        }
	// return users
        return users.sort((user_a, user_b) => user_a.localeCompare(user_b))
    }catch(err){
        console.error(err)
    }
}
