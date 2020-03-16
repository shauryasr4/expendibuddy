const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

        console.log(`MONGO CONNECTION SUCCESSFUL ${con.connection.host}`);

    } catch (err) {
        console.log(`MONGO CONNECTION FAILED ${err.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;