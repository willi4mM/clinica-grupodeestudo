const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL,{
    userNewUrlParser: true,
    useVreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})