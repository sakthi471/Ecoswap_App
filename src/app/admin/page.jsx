'use client'

import AlertConfirm from "@/utils/confirm";

const MyPage = () => {

    const handleClick = async () => {
        const result = await AlertConfirm('Are you absolutely sure?');
        console.log(result);
    };

    return (
        <button onClick={handleClick}>Click me</button>
    );
};

export default MyPage;
