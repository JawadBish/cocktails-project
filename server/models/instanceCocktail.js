import mongoose from "mongoose";


const cocktailSchema = mongoose.Schema({
    id: String,
    name: String,
    recipe: String,
    ingredients: [String],
    creator: String,
    selectedFile: String,
    tags: [String],
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const InstanceCocktail = mongoose.model('InstanceCocktail', cocktailSchema);

export default InstanceCocktail;