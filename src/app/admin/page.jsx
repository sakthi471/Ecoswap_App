import UserList from "@/components/UserList";

export const metadata = {
    title: 'Admin',
    description: 'Admin Page',
}



const MyPage = () => {


    return (
        <div className=" w-full">
            <UserList />
        </div>
    );
};

export default MyPage;
