package com.programacion.web.servicios.interfaces;

import com.programacion.web.db.Album;

import java.util.List;
import java.util.Optional;

public interface AlbumService {

    List<Album> findAll();
    Optional<Album> findById(Integer id);
    Album save(Album album);
    void remove(Album album);
}
