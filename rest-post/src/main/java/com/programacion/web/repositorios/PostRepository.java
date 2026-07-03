package com.programacion.web.repositorios;

import com.programacion.web.db.Post;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.apache.deltaspike.data.api.FullEntityRepository;
import org.apache.deltaspike.data.api.Repository;

@Repository
public interface PostRepository extends FullEntityRepository<Post, Integer> {

}
