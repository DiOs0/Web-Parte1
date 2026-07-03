package com.programacion.web.servicios.interfaces;

import com.programacion.web.db.Comment;

import java.util.List;
import java.util.Optional;

public interface CommentService {

    List<Comment> findAll();
    Optional<Comment> findById(Integer id);
    Comment save(Comment comment);
    void remove(Comment comment);
}
