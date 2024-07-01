package com.manuel.ProductoSystem.service;

import com.manuel.ProductoSystem.model.Producto;

import java.util.List;

public interface ProductoService {

    public Producto saveProducto(Producto producto);

    public List<Producto> getAllProductos();
}
