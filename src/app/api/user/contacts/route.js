import User from "@/models/userModel";
import connectDB from "@/utils/datababseConnection";
import { unstable_noStore as noStore } from 'next/cache';


export const GET = async (req, res) => {
    noStore();
    try {
        const _id = await req.nextUrl.searchParams.get('userid');
        console.log(_id);

        await connectDB()
        const contacts = await User.findOne({ _id }, { contacts: 1 })
        console.log(contacts);
        if (contacts) {
            const contactsId = contacts.contacts
            const contactsList = await User.find({ _id: { $in: contactsId } }, { username: 1 })
            return Response.json(contactsList,{status:200})
        } else {
            return Response.json([],{status:200})

        }
    } catch (error) {
        console.log(error);
        return Response.json({error:error.message});
    }
}