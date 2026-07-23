package com.programacion.web;

import com.programacion.web.config.CorsFilter;
import com.programacion.web.rest.*;
import jakarta.ws.rs.ApplicationPath;
import jakarta.ws.rs.core.Application;

import java.util.Set;

@ApplicationPath("/api")
public class MyApplication extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        return Set.of(
            //Meter las clases
                UserRest.class,
                AlbumRest.class,
                TodoRest.class,
                PhotoRest.class,
                PostRest.class,
                CommentRest.class,
                CorsFilter.class
        );
    }
}
