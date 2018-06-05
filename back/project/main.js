var fs = require('fs')
// Import the mongoose module
const mongoose = require('mongoose')
// Base for mongoose models
const base = require('./models/base')

/**
 * Run the challenge with fabulous logs
 */
async function run(){
    console.log('\033[95m----- Initializating Database -----')
    // Set up default mongoose connection
    var db_string = 'mongodb://127.0.0.1/blog'
    mongoose.connect(db_string)

    // Drops database
    await mongoose.connection.dropDatabase()

    // Initializate models
    base.init(mongoose)
    
    console.log('\033[95m----- Inserting data to mongo -----')
    
    for(let m = 0; m < base.models.length; m++){
        model = base.models[m];
        let datas = fs.readFileSync(`./sample/in/${model}.json`, 'utf8')
        let obj = JSON.parse(datas).map((data) => {
            for(let key in data){
                // If id is found, "cast" it to ObjectId
                if(data[key]['$oid']){
                    data[key] = mongoose.Types.ObjectId(data[key]['$oid'])
                }
            }
            if(model == 'posts' && !data.user){
                console.log(data);
            }
            return data
        });

        await base[model].create(obj)
        console.log('\033[94m----- Inserted ' + model + ' -----')
    }
    

    console.log('\033[95m----- Starting Chalenge -----')
    const start = new Date()

    const list = require('./controllers/list_users_by_reaction')
    let users = null

    // Starting Tests and printg "OK" or "OH NO"
    let compareTest = function(users, file_number){
        if(JSON.stringify(users) == fs.readFileSync(`./sample/out/${file_number}.json`, 'utf8')){
            console.log('\033[92mOK')
        }else{
            console.log('\033[94mOH NO')
        }
    }

    console.log('\033[95m----- Test 1 -----')
    users = await list(base, 'ab', 'love')
    compareTest(users, 1)

    console.log('\033[95m----- Test 2 -----')
    users = await list(base, 'ac', 'hate')
    compareTest(users, 2)

    console.log('\033[95m----- Test 3 -----')
    users = await list(base, '', 'like')
    compareTest(users, 3)

    console.log('\033[95m----- Finishing Chalenge -----')
    const end = new Date()
    console.log('\033[94mTotal time [ms]: ' + (end - start))

    process.exit()
}

run()