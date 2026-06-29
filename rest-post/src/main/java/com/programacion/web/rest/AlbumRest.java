package com.programacion.web.rest;


import com.programacion.web.db.Album;
import com.programacion.web.db.User;
import com.programacion.web.repositorios.AlbumRepository;
import com.programacion.web.repositorios.UserRepository;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("/albums")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AlbumRest {

    final AlbumRepository albumRepository;

    @Inject
    public AlbumRest(AlbumRepository albumRepository){
        this.albumRepository=albumRepository;
    }

    @GET
    public List<Album> findAll(){
        return albumRepository.findAll();
    }

    @GET
    @Path("/{id}")
    public Response findById(@PathParam("id")Integer id){
        return albumRepository.findOptionalBy(id)
                .map(Response::ok)
                .orElse(Response.status(Response.Status.NOT_FOUND))
                .build();
    }

    @POST
    public void save (Album album){
        //userRepository.save(user);
    }

    @PUT
    @PathParam("/{id}")
    public void update (@PathParam("id")Integer id,Album album){
        albumRepository.findOptionalBy(id).ifPresent(existingUser->{
            albumRepository.save(album);
        });

    }

    @DELETE
    @Path("/{id}")
    public void delete (@PathParam("id")Integer id){
        albumRepository.findOptionalBy(id).ifPresent(albumRepository::remove);


    }

}
