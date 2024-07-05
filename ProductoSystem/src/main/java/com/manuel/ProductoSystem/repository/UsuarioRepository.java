package com.manuel.ProductoSystem.repository;

import com.manuel.ProductoSystem.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Usuario findByUsuarioAndPassword(String usuario, String password);
}
