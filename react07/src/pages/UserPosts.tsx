import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Typography, Table, TableBody, TableCell, TableRow, Button, Paper, TableContainer, TableHead } from "@mui/material";
import axios from "axios";
import type { Post } from "../models/Post.ts";

function UserPosts() {
    const { id } = useParams<{ id: string }>();
    const [posts, setPosts] = useState<Post[]>([]);

    const fetchPosts = () => {
        axios.get<Post[]>(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => alert(error));
    };

    useEffect(() => {
        fetchPosts();
    }, [id]);

    if (!posts) return null;

    return (
        <>
            <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
                Posts de el id: {id}
            </Typography>

            <TableContainer component={Paper} variant="outlined" sx={{ mt: 3 }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ bgcolor: "#f5f5f5" }}>
                            <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Título</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Contenido</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {posts.map((post) => (
                            <TableRow key={post.id}>
                                <TableCell>{post.id}</TableCell>
                                <TableCell sx={{ fontWeight: "medium" }}>{post.title}</TableCell>
                                <TableCell>{post.body}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Button variant="contained" color="primary" component={Link} to="/users" sx={{ mt: 4, mb: 5 }} >
                Volver a la lista
            </Button>
        </>
    );
}

export default UserPosts;