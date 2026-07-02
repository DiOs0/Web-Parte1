package com.programacion.web.servicios.interfaces;

import com.programacion.web.db.Todo;

import java.util.List;
import java.util.Optional;

public interface TodoService {

    List<Todo> findAll();
    Optional<Todo> findById(Integer id);
    Todo save(Todo todo);
    void remove(Todo todo);
}
