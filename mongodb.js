const mongoose = require('mongoose');

const connect = async() => {

  mongoose.connect('mongodb://localhost:27017/TodoApp',).then(()=> {
            console.log("DB Connected !!!")
        })
        .catch(err => {
            console.log("DB Connection Failed. Error : ",err);
        })
}

module.exports = {connect}
