package com.programacion.web.servicios.interfaces;

import com.programacion.web.db.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    List<User> findAll();
    Optional<User> findById(Integer id);
    User save(User user);
    void remove(User user);

}
