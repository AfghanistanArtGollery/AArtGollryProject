const mongoose=require('mongoose')


const connectToDB=async()=>{

    try{
        if(mongoose.connections[0].readyState){
            return true
        }else{
         

            mongoose.connect(process.env.MONGO_URL);

            console.log("Database connected successfully!!")
        

        }

    }catch(err){
        console.log('Databas not connet succsessfluuy!!',err)

    }

}
export default connectToDB