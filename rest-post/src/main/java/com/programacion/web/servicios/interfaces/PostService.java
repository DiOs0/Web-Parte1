package com.programacion.web.servicios.interfaces;

import com.programacion.web.db.Post;

import java.util.List;
import java.util.Optional;

public interface PostService {

    List<Post> findAll();
    Optional<Post> findById(Integer id);
    Post save(Post post);
    void remove(Post post);
}
