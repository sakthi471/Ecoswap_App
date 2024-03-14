import User from "@/models/userModel";

import connectDB from "@/utils/datababseConnection";
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import credentialsProvider from "next-auth/providers/credentials"

import bcrypt from 'bcryptjs'
import { authConfig } from "./auth.config";


const login=async(credentials)=>{
      
    try {
        await connectDB()   
        const user=await User.findOne({username:credentials.username})
        
        if(!user){
            throw new Error("Wrong credentials")
        }

    const  isPasswordCorrect= await bcrypt.compare(credentials.password,user.password)
      if(!isPasswordCorrect){
        throw new Error("Wrong password")
      }

       return user;
    } catch (error) {   
        console.log(error);
    }
}



export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [GitHub(
        { clientId: process.env.GITHUB_ID, 
        clientSecret: process.env.GITHUB_SECRET }),
         credentialsProvider({
              async authorize(credentials){
                    try {
                          const user =await login(credentials)
                          return user;
                    } catch (error) {
                        return null
                    }
              }
         })
          ],
    callbacks:{
        async signIn({user,account,profile}){
            try {
                if(account.provider=='github'){
                    await connectDB()  
                    const user= await User.findOne({email:profile.email})
                    
                    if(!user){
                        const newUser={
                            username:profile.login,
                            email:profile.email,
                            img:profile.avatar_url,
                        }
                         await User.create(newUser)

                    
                        console.log(newUser);

                    }
                    

                }

            } catch (error) {
                console.log(error);
                return false
            }
            return true;
        },

       ...authConfig.callbacks, 
    }    
})