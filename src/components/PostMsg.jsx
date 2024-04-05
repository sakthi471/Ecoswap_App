import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PostMsg = ({ itemID,postColor }) => {
    const [postMsg, setPostMsg] = useState(null);
    // console.log(itemID);

    useEffect(() => {
        const getPostDetails = async (id) => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/browse/${id}`);
                const data = await res.json();
                setPostMsg(data);
            } catch (error) {
                console.error('Error fetching post details:', error);
            }
        };

        getPostDetails(itemID);

      
    }, []);

    return (
       <>
        {
            postMsg && (
                <Link href={`/browse/${postMsg._id}`} >
                <div className={`w-full  flex items-start gap-5 border-b-2   rounded-md    h-[100px] cursor-pointer ${postColor} `}>
                    <div className='w-[200px] relative  h-[90px]'>
                        <Image src={postMsg.img} fill alt='test' className=' object-contain ' />
                    </div>
                    <div className='w-[80%] p-2 '>
                        <p className='font-semibold'> {postMsg.title} </p>
                        <p>{postMsg.description}</p>
                    </div>
                </div>
            </Link>
            )
        }
       </>
    );
};

export default PostMsg;
