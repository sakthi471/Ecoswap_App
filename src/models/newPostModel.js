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
    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60
    };

    // Calculate time ago
    let timeAgo = '';
    for (const [unit, value] of Object.entries(intervals)) {
        const intervalCount = Math.floor(seconds / value);
        if (intervalCount > 0) {
            timeAgo += `${intervalCount} ${unit}${intervalCount === 1 ? '' : 's'} ago `;
            seconds -= intervalCount * value;
        }
    }

    // Return the formatted time ago string
    return timeAgo.trim();
});



const postItem=models.postItem|| model("postItem", postItemSchema)

export default postItem