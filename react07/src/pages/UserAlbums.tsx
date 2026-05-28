import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Typography, Table, TableBody, TableCell, TableRow, Button, Paper, TableContainer, TableHead } from "@mui/material";
import axios from "axios";
import type { Album } from "../models/Album.ts";

function UserAlbums() {
    const { id } = useParams<{ id: string }>();
    const [albums, setAlbums] = useState<Album[]>([]);

    const fetchPosts = () => {
        axios.get<Album[]>(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
            .then((response) => {
                setAlbums(response.data);
            })
            .catch((error) => alert(error));
    };

    useEffect(() => {
        fetchPosts();
    }, [id]);

    if (!albums) return null;

    return (
        <>
            <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
                Albums de el id: {id}
            </Typography>

            <TableContainer component={Paper} variant="outlined" sx={{ mt: 3 }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ bgcolor: "#f5f5f5" }}>
                            <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Título</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {albums.map((album) => (
                            <TableRow key={album.id}>
                                <TableCell>{album.id}</TableCell>
                                <TableCell sx={{ fontWeight: "medium" }}>{album.title}</TableCell>
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

export default UserAlbums;