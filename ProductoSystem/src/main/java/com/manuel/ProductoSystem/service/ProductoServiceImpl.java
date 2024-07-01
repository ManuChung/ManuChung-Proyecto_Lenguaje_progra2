package com.manuel.ProductoSystem.service;

import com.manuel.ProductoSystem.model.Producto;
import com.manuel.ProductoSystem.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoServiceImpl implements ProductoService{

    @Autowired
    private ProductoRepository productoRepository;

    @Override
    public Producto saveProducto(Producto producto) {
        return productoRepository.save(producto);

    }

    @Override
    public List<Producto> getAllProductos() {
        return productoRepository.findAll();
    }
}
