package com.manuel.ProductoSystem.dto;

public class UsuarioDTO {
    private String usuario;
    private String nombreCompleto;

    public UsuarioDTO() {}

    public UsuarioDTO(String usuario, String nombreCompleto) {
        this.usuario = usuario;
        this.nombreCompleto = nombreCompleto;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getNombreCompleto() {
        return nombreCompleto;
    }

    public void setNombreCompleto(String nombreCompleto) {
        this.nombreCompleto = nombreCompleto;
    }
}
