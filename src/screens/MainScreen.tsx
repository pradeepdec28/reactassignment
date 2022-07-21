import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { PostManager } from "../manager/PostManager"
import { UserManager } from "../manager/UserManager"
import { User } from "../model/user-model"
import Posts from "./Posts"
import Users from "./Users"


const MainScreen = () => {
  const [loading , setloading] = useState(false)
  const [ user, setUser] = useState<User>()
  const loadUsers = async() => {
    try {
      setloading(true);
      await UserManager.getAll();
      setloading(false);
    }
    catch(error) {
      console.log(error)
    }
  
  }
  const loadPosts = async() => {
    try {
      setloading(true);
      await PostManager.getAll();
      setloading(false);
    }
    catch(error) {
      console.log(error)
    }
    }

    useEffect (() => {
      loadUsers();
      loadPosts()
    }, [])

    const getUserDetail = async(user: User) => {
      setUser(user)
      await PostManager.getAll(user);
    }

  return (
   <>
     <Grid container  direction="row" spacing={4}>
        <Grid item md={4} xs={12}> <Users loading={loading} getUser={getUserDetail} /></Grid>
        <Grid item md={8} xs={12}> <Posts user={user} loading={loading} /></Grid>
     </Grid>
     </>
  )
}

export default MainScreen