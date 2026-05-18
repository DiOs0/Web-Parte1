import {useState} from "react";
import {Button, Container, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import axios from "axios";

interface Post{
    id: number;
    title: string;
    body: string;
}

function Posts(){

    const [posts, setPosts] = useState<Post[]>([]);
    const[loading,setLoading] = useState(false);

    const fetchPosts = () => {
        setLoading(true);
        axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
            .then(response=>{
                setPosts(response.data);
            })
            .catch(error=>alert(error))
            .finally(()=>setLoading(false) );


    };

    return (
        <>
            <Container sx={{mt: 5}}>
                <Typography variant="h4" gutterBottom>
                    Posts
                </Typography>

                <Button variant="contained"
                        color="primary"
                        onClick={fetchPosts}
                        disabled={loading}
                >{loading ? "Cargando .....":"Cargar Posts"}
                </Button>

                <Table sx={{mt: 2}}>
                    <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Body</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        posts.map( (post)=> (
                            <TableRow key= {post.id}>
                                <TableCell>{post.id}</TableCell>
                                <TableCell>{post.title}</TableCell>
                                <TableCell>{post.body}</TableCell>
                            </TableRow>
                        ) )
                    }
                    </TableBody>
                </Table>

            </Container>


        </>
    )
}
export default Posts;