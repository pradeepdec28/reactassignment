import { Box , Card, CardContent, List, ListItemButton, ListItemText, Skeleton, Typography } from '@mui/material';
import { useSnapshot } from 'valtio';
import { User } from '../model/user-model';
import { PostState } from '../store/PostStore';

const Posts = (props: {loading: boolean, user?: User}) => {
  const { posts } = useSnapshot(PostState)
  const { loading, user} = props;

  return (
    <Box>
      <Typography variant="h5"> User Details</Typography>
      <br />
      {user && 
      <Card variant="outlined" sx={{ width: '50%'}} >
          <CardContent> 
          {loading ? <> 
            <Skeleton width={200} height={26} animation="wave" />
            <Skeleton width={200} height={26} animation="wave"/>
            </> :
            <>
            <Typography> Name: <b>{user.name}</b></Typography>
          <Typography> Email: <b>{user.email}</b></Typography>
          </>
}
        </CardContent>
      </Card>
}
       <br />
      <Typography variant="h5"> Posts ({posts.length})</Typography>
       {loading ? <> 
      {[0, 1, 2, 3, 4].map((list, index) => (
        <>
          <Box key={index} sx={{ mt: 2, mb: 3 }}>
            <Skeleton width={650} height={26} animation="wave" />
            <Skeleton width={650} />
            <Skeleton width={650} />
            <Skeleton width={650} />
          </Box>
        </>
      ))}
        </> : <>
      <List component="nav" aria-label="main mailbox folders">
          {posts.map((post, i) => (
            <ListItemButton  key={i}>
            <ListItemText primary={post.title} secondary={post.body} />
          </ListItemButton>
          ))}
    </List>
    </>
    }
    </Box>
  )
}

export default Posts