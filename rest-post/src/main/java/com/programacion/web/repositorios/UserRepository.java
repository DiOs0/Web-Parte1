package com.programacion.web.repositorios;

import com.programacion.web.db.User;
import jakarta.enterprise.context.ApplicationScoped;
import org.apache.deltaspike.data.api.FullEntityRepository;

@ApplicationScoped
public interface UserRepository extends FullEntityRepository<User,Integer> {
}
