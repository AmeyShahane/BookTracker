const { Schema, default: mongoose } = require("mongoose");


const bookSchema = new Schema({
    username : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    duration : {
        type : Number,
        required : true
    },
    date : {
        type : Date,
        required : true
    }
},{
    timestamps : true,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;