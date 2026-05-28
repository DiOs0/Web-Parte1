import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Typography, Table, TableBody, TableCell, TableRow, Button,Paper, TableContainer } from "@mui/material";
import axios from "axios";
import type { User } from "../models/User.ts";

function UserDetail() {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<User>();
    const [loading, setLoading] = useState(false);

    const fetchUser = () => {
        setLoading(true);
        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => alert(error))
            .finally(() => setLoading(false));
    };

    useEffect(() => {

        fetchUser();

    },[]);

    if (!user) return null;

    return (
        <>
        <Container sx={{ mt: 5 }}>
            <Typography variant="h4" gutterBottom>
                Detalles de {user.name}
            </Typography>

            <TableContainer component={Paper} variant="outlined" sx={{ mt: 3 }}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold", width: "30%" }}>ID</TableCell>
                            <TableCell>{user.id}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>Username</TableCell>
                            <TableCell>{user.username}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                            <TableCell>{user.name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
                            <TableCell>{user.email}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>Teléfono</TableCell>
                            <TableCell>{user.phone}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>Sitio Web</TableCell>
                            <TableCell>{user.website}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell colSpan={2} sx={{ bgcolor: "#f5f5f5", fontWeight: "bold" }}>Dirección</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>Calle y Suite</TableCell>
                            <TableCell>{user.address.street}, {user.address.suite}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>Ciudad</TableCell>
                            <TableCell>{user.address.city}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>Código Postal</TableCell>
                            <TableCell>{user.address.zipcode}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>Geolocalización</TableCell>
                            <TableCell>Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell colSpan={2} sx={{ bgcolor: "#f5f5f5", fontWeight: "bold" }}>Empresa</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>Nombre</TableCell>
                            <TableCell>{user.company.name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>Slogan</TableCell>
                            <TableCell>{user.company.catchPhrase}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>BS</TableCell>
                            <TableCell>{user.company.bs}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Button variant="contained" color="primary" component={Link}  to="/users"  sx={{ mt: 4, mb: 5 }} >
                Volver a la lista de Usuarios
            </Button>
        </Container>
        </>
    );
}

export default UserDetail;