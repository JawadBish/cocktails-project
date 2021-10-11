import mongoose from "mongoose";


const cocktailSchema = mongoose.Schema({
    id: String,
    name: String,
    recipe: String,
    ingredients: [String],
    creator: String,
    tags: [String],
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const InstanceCocktail = mongoose.model('InstanceCocktail', cocktailSchema);

export default InstanceCocktail;