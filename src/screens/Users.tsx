
import { Box , List, ListItemButton, ListItemText, Skeleton, Typography } from '@mui/material';
import { useSnapshot } from 'valtio';
import { UsersState } from '../store/UserStore';
import React from 'react';
import { User } from '../model/user-model';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  listItem: {
    backgroundColor: '#ffe0b2',
  },
}));

interface userTypes {
  loading: boolean;
  getUser: (user: User) => void;
}
 

const Users = ({loading, getUser}: userTypes) => {
  const classes = useStyles();
  const { users } = useSnapshot(UsersState)
  const [selectedIndex, setSelectedIndex] = React.useState<number>();

  const userSelected = (user:User) => {
   if(user.id) {
    setSelectedIndex(user.id)
    getUser(user)
   }
   
  }


  return (
    <Box>
      <Typography variant="h5"> Users</Typography>
      <br />
      {loading ? 
      <> 
        {[0, 1, 2, 3, 4,5,6,7,8,9,10].map((list, index) => (
          <>
            <Box key={index} sx={{ mt: 2, mb: 3 }}>
              <Skeleton width={250} height={30} animation="wave" />
              <Skeleton width={250} />
              <Skeleton width={250} />
            </Box>
          </>
        ))}
          </> : <>
      <List className={classes.listItem} component="nav" aria-label="main mailbox folders">
          {users.map((user, i) => (
            <ListItemButton 
            key={i}
            selected={selectedIndex === user.id}
            onClick={() => userSelected(user)}
          >
            <ListItemText primary={user.name} secondary={user.email} />
          </ListItemButton>
          ))}
    </List>
    </>
}
    </Box>
  )
}

export default Users