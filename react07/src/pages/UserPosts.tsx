import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Typography, Button, Box, Card, CardContent, TextField, CardActions } from "@mui/material";
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

    const handleGuardar = (post: Post) => {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post)
            .then(() => {
                alert("Post actualizado correctamente");
            })
            .catch((error) => alert(error));
    };

    const handleInputChange = (index: number, field: keyof Post, value: string) => {
        const updatedPosts = [...posts];
        updatedPosts[index] = { ...updatedPosts[index], [field]: value };
        setPosts(updatedPosts);
    };

    return (
        <>
            <Typography variant="h4" gutterBottom sx={{ mt: 5, textAlign: "center" }}>
                Posts de el id: {id}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3, maxWidth: 800, margin: "20px auto", px: 2 }}>
                {posts.map((post, index) => (
                    <Card key={post.id} variant="outlined" sx={{ borderRadius: 3 }}>
                        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                Post ID: {post.id}
                            </Typography>

                            <TextField
                                label="Título"
                                variant="outlined"
                                fullWidth
                                value={post.title}
                                onChange={(e) => handleInputChange(index, "title", e.target.value)}
                            />

                            <TextField
                                label="Contenido"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={3}
                                value={post.body}
                                onChange={(e) => handleInputChange(index, "body", e.target.value)}
                            />
                        </CardContent>
                        <CardActions sx={{ px: 2, pb: 2 }}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleGuardar(post)}
                            >
                                Guardar Post {post.id}
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
                <Button variant="contained" color="secondary" component={Link} to="/users" size="large">
                    Regresar a Usuarios
                </Button>
            </Box>
        </>
    );
}

export default UserPosts;