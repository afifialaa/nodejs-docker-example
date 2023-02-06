const mongoose = require('mongoose');


let Database = (() => {
    let connection
    let connectionString = 'mongodb://mongodb-database:27017/emp_mgmt_dev'

    connect(connectionString)

    async function connect(connString) {
        try {

            mongoose.connection.on('open', () => {
                console.log('[database] connection to database is established \x1b[0m');
            })
        
            mongoose.connection.on('error', () => {
                console.log('\x1b[41m [database] failed to connect to database \x1b[0m');
            })

            mongoose.connection.on('close', ()=>{
                console.log('\x1b[41m [database] connection to database is terminated \x1b[0m');
            })

            connection = mongoose.connect(connString, { useNewUrlParser: true, useUnifiedTopology: true});

        }catch(err){
            console.log(err)
        }
        
    }

    return {
        getConnectionString: function(){
            return connectionString
        },

        getInstance: function () {
            if (!connection) {
                connect();
            }
            return connection;
        }
    }
})()