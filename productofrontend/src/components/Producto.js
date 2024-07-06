import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';


export default function Producto() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [productos, setProductos] = useState([]);

    const handleClick = (e) => {
        e.preventDefault()
        const producto = { nombre, descripcion }
        console.log(producto)
        fetch("http://localhost:8080/producto/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(producto)
        }).then(() => {
            console.log("Nuevo Producto Registrado")
        })
    }

    useEffect(() => {
        fetch("http://localhost:8080/producto/getAll")
            .then(res => res.json())
            .then((result) => {
                setProductos(result);
            })
    }, [])

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: "blue" }}><u>Añadir Producto</u></h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"

                >

                    <TextField id="outlined-basic" label="Nombre Producto" variant="outlined" fullWidth
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} />
                    <TextField id="outlined-basic" label="Descripción" variant="outlined" fullWidth
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)} />
                    <Button variant="contained" color="error" onClick={handleClick}>
                        Registrar
                    </Button>
                </Box>
            </Paper>
            <h1>Productos</h1>
            <Paper elevation={3} style={paperStyle}>
                {productos.map(producto => (
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={producto.id}>
                        Id:{producto.id}<br />
                        Nombre:{producto.nombre}<br />
                        Descripcion:{producto.descripcion}
                    </Paper>
                ))}
            </Paper>
        </Container>
    );
}
