"use server"
import connectDB from "@/utils/datababseConnection"
import { auth, signIn, signOut } from "./auth"
import bcrypt from 'bcryptjs'
import postItem from "@/models/newPostModel"
import User from "@/models/userModel"



export const handleGithubLogin = async () => {
  "use server"
  await signIn("github")

}

export const handleGithubLogout = async () => {
  "use server"
  await signOut()

}


export const handleRegsiter = async (previousState, formDate) => {

  const { username, email, password, passwordReapt, img } = Object.fromEntries(formDate)
  if (password !== passwordReapt) {
    return { error: "password does not match" }
  }

  try {
    await connectDB()
    const user = await User.findOne({ username })
    if (user) {
      return { error: "user aleredy exsit" }
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)


    const newUser = {
      username,
      email,
      password: hashedPassword,
      img,
    }

    User.create(newUser)

    return { success: true }

  } catch (error) {
    console.log(error);
  }

}


export const handleLogin = async (previousState, formDate) => {
  "use server"
  try {
    const { username, password } = Object.fromEntries(formDate)
    await signIn("credentials", { username, password })

  } catch (error) {
    if (error.message == 'CredentialsSignin') {
      return { error: "invalid usernme& password" }
    }
    throw error;
  }

}