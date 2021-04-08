
global.config = require('./config')

const mongoose = require('mongoose');

const Task = require('./src/classes/Task.js');
const Seller = require('./src/models/Seller');

const Discord = require('./src/classes/Discord')

mongoose.connect(global.config.mongodb_uri, { useNewUrlParser: true, useUnifiedTopology: true });

console.log("start?")

try {
    Seller.deleteMany({}, (err) => {
        if (!err) {
            console.log("1?")
            Seller.insertMany(global.config.sites, (err) => {
    
                if(!err){
                    console.log("2?")
                    Seller.find({}, (err, tasksQuery) => {
                        for (let i = 0; i < tasksQuery.length; i++) {
                            setTimeout(() => {
                                new Task(tasksQuery[i]).start();
                            }, 4000 * i)      
                            console.log("no?")                      
                        }
                        console.log("yes?")
                        Discord.info('Monitor started, Time to start SNK-ING (0-0)\n\n');
                    });
                }
    
            })
        }
    });
}
catch(err) {
    console.log(err)
}