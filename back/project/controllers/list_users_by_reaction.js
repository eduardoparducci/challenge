module.exports = async function(base, by_text, by_reaction) {
    try{
        let users = []
        let found_posts = await base.posts.find({
            title: new RegExp(by_text, 'g'),
            text: new RegExp(by_text, 'g')
        })
        for(let p = 0; p < found_posts.length; p++){
            let found_post = found_posts[p]
            let found_reactions = await base.reactions.find({post: found_post._id})
            found_reactions = found_reactions.filter((reaction) => {
                return reaction.reaction == by_reaction
            })
            for(let r = 0; r < found_reactions.length; r++){
                let found_reaction = found_reactions[r]
                let found_user = await base.users.findById(found_reaction.user)
                if(found_user && users.indexOf(found_user.username) === -1){
                    users.push(found_user.username)
                }
            }
        }
        return users.sort((user_a, user_b) => user_a.localeCompare(user_b))
    }catch(err){
        console.error(err)
    }
}