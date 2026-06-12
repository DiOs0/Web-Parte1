package com.programacion.web.rest;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;

import java.time.LocalDateTime;

@Path("/chao")
public class ChaoRest {

    @GET
    public String hola(){
        return "Hola mundo la hora es de cierre "+ LocalDateTime.now();
    }
}
