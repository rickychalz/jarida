import {Schema, model} from "mongoose";


const PostCategoriesSchema = new Schema({
        name: {type: String, required:true},
        
},
{
    timestamps: true
}
);

UserSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await hash(this.password, 10);
        return next()
    }
    return next()
});

UserSchema.methods.generateJWT = async function(){
    return await sign({id: this._id}, process.env.JWT_SECRET, {expiresIn: "30d"})
};

UserSchema.methods.comparePassword  = async function (enteredPassword){
    return await compare(enteredPassword, this.password);
};

const PostCategories = model("PostCategories", PostCategoriesSchema);

export default PostCategories;