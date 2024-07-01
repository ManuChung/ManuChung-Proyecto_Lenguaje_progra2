package com.manuel.ProductoSystem.controller;

import com.manuel.ProductoSystem.model.Producto;
import com.manuel.ProductoSystem.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/producto")
@CrossOrigin
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @PostMapping("/add")
    public String add(@RequestBody Producto producto){

        productoService.saveProducto(producto);
        return "Nuevo producto ha sido registrado";
    }

    @GetMapping("/getAll")
    public List<Producto> getAllProductos(){
        return productoService.getAllProductos();
    }
}
