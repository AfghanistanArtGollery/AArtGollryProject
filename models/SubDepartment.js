const   mongoose  = require("mongoose");
require('./Department')
const schema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    department:{
        type:mongoose.Types.ObjectId,
        ref:"Department",
        required:true
    }
})

const model = mongoose.models.SupDepartment||mongoose.model('SupDepartment',schema)
export default model