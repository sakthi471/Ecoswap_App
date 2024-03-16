import User from "@/models/userModel";
import connectDB from "@/utils/datababseConnection";


export const GET = async (req) => {
    try {
        const _id = await req.nextUrl.searchParams.get('userid');
        await connectDB()
        const contacts = await User.findOne({ _id }, { contacts: 1 })
        const contactsId = contacts.contacts
        const contactsList = await User.find({ _id: { $in: contactsId } }, { username: 1 })
        return Response.json(contactsList, { status: 200 })
    } catch (error) {
        console.log(error.message);
    }

}

