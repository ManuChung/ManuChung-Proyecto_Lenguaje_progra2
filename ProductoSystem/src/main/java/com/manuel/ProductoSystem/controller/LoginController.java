package com.manuel.ProductoSystem.controller;

import com.manuel.ProductoSystem.model.Usuario;
import com.manuel.ProductoSystem.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Login")
@CrossOrigin(origins = "http://localhost:3306")
public class LoginController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping("/validate")
    public String validateUser(@RequestBody Usuario usuario) {
        Usuario existingUser = usuarioRepository.findByUsuarioAndPassword(usuario.getUsuario(), usuario.getPassword());
        if (existingUser != null) {
            return "Usuario válido";
        } else {
            return "Usuario no válido";
        }
    }
}
