const mongoose = require('mongoose')

main().catch(err=>console.log(err))

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose_ex1")

    const userSchema = new mongoose.Schema({
        name: String,
        email: String
    })

    userSchema.methods.hello=function(){
        return (`Hello én ${this.name} vagyok!`);
    }


    const User = mongoose.model('User', userSchema);

    // const user = new User({ name: 'sanyi', email: 'email@email.hu' });
    // await user.save();

    const users = await User.find()
    
    for( let u of users ) {
        console.log(u.hello());
    }

}