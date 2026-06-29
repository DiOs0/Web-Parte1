package com.programacion.web.servicios.impl;

import com.programacion.web.repositorios.AlbumRepository;
import com.programacion.web.repositorios.UserRepository;
import com.programacion.web.servicios.interfaces.AlbumService;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

@ApplicationScoped
public class AlbumServiceImpl implements AlbumService {
    final AlbumRepository albumRepository;

    @Inject
    public AlbumServiceImpl(AlbumRepository albumRepository){
        this.albumRepository= albumRepository;
    }
}
