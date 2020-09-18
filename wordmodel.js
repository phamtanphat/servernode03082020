const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://phat:8hruEURPKx8NeN6C@cluster0.yzty5.mongodb.net/database03082020?retryWrites=true&w=majority',
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });

const Word = mongoose.model('Word',
    { 
        en : {type : String ,  unique: true , require : true  },
        vn : {type : String ,  unique: true , require : true  },
        isMemorized : {type : Boolean ,  default : false , require : true  }
    }
);

// SELECT
// Word.find()
// .then(words => console.log(words))
// .catch(error => console.log(error))

//INSERT
// const word = new Word({en : 'One' , vn : 'Mot'})
// word.save()
// .then(word => console.log(word))
// .catch(error => console.log(error))

//UPDATE
// Word.findByIdAndUpdate('5f64c2161262680769abb08b'  , {isMemorized : false} , {new : true})
// .then(word => console.log(word))
// .catch(error => console.log(error))

//DELETE
Word.findByIdAndDelete('5f64c2161262680769abb08b')
.then(word => console.log(word))
.catch(error => console.log(error))
