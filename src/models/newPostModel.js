import { Schema, model, models } from "mongoose";


const  postItemSchema=new Schema({
    title:{
        type:String,
        required:true,

    },
    description:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
        
    },
    location:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true,
    },
    promised:{
        type:Boolean,
        default:false,
        
    }

},{timestamps:true,toJSON:{virtuals:true},toObject:{virtuals:true}})


postItemSchema.virtual('timeAgo').get(function() {
    // Calculate the time difference between now and the createdAt timestamp
    const timeDifference = Date.now() - this.createdAt.getTime();

    if (timeDifference < 60000) {
        return 'just now';
    }
    // Convert milliseconds to seconds
    let seconds = Math.floor(timeDifference / 1000);


    // Define time units
    const intervals = [
        { unit: 'year', value: 31536000 },
        { unit: 'month', value: 2592000 },
        { unit: 'week', value: 604800 },
        { unit: 'day', value: 86400 },
        { unit: 'hour', value: 3600 },
        { unit: 'minute', value: 60 }
    ];

    // Calculate time ago
    let timeAgo = '';
    for (const { unit, value } of intervals) {
        const intervalCount = Math.floor(seconds / value);
        if (intervalCount > 0) {
            timeAgo = `${intervalCount} ${unit}${intervalCount === 1 ? '' : 's'} ago`;
            break; 
        }
    }

    return timeAgo.trim();
});



const postItem=models.postItem|| model("postItem", postItemSchema)

export default postItem