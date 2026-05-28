import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Typography, Table, TableBody, TableCell, TableRow, Button, Paper, TableContainer, TableHead } from "@mui/material";
import axios from "axios";
import type {ToDo} from "../models/ToDo.ts";

function ToDos() {
    const { id } = useParams<{ id: string }>();
    const [todos, setTodos] = useState<ToDo[]>([]);

    const fetchToDos = () => {
        axios.get<ToDo[]>(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
            .then((response) => {
                setTodos(response.data);
            })
            .catch((error) => alert(error));
    };

    useEffect(() => {
        fetchToDos();
    }, [id]);

    if (!todos) return null;

    return (
        <>
            <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
                To do de el id: {id}
            </Typography>

            <TableContainer component={Paper} variant="outlined" sx={{ mt: 3 }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ bgcolor: "#f5f5f5" }}>
                            <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Título</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Completado</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todos.map((todo) => (
                            <TableRow key={todo.id}>
                                <TableCell>{todo.id}</TableCell>
                                <TableCell sx={{ fontWeight: "medium" }}>{todo.title}</TableCell>
                                <TableCell>{todo.completed ? "Completado" : "Pendiente"}</TableCell>
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

export default ToDos;