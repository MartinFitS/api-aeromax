import {Schema , model} from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"

const productSchema = new Schema({
    name:{
        type: String,
        required:true,
        trim:true
    },
    brand:{
        type: String,
        trim:true
    },
    img:{
        type: String,
        required:true,
        trim:true
    },
    type:{
        type: String,
        required:true,
        trim:true
    },
    class:{
        type: String,
        required:true,
        trim:true
    },
    product:{
        type: String,
        required:true,
        trim:true
    },
    description: {
        type: String,
        required:true,
    },
    price: {
        type: Number,
        required:true,
        trim:true
    },
},{
    versionKey:false,
    timestamps:true
})

productSchema.plugin(mongoosePaginate);
export default model("Products",productSchema);
