package com.programacion.web.rest;


import com.programacion.web.db.Album;
import com.programacion.web.servicios.impl.AlbumServiceImpl;
import com.programacion.web.servicios.interfaces.AlbumService;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("/albums")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AlbumRest {

    final AlbumServiceImpl albumServiceImpl;

    @Inject
    public AlbumRest(AlbumServiceImpl albumServiceImpl){
        this.albumServiceImpl=albumServiceImpl;
    }

    @GET
    public List<Album> findAll(){
        return albumServiceImpl.findAll();
    }

    @GET
    @Path("/{id}")
    public Response findById(@PathParam("id")Integer id){
        return albumServiceImpl.findById(id)
                .map(Response::ok)
                .orElse(Response.status(Response.Status.NOT_FOUND))
                .build();
    }

    @POST
    public Response save (Album album){
        albumServiceImpl.save(album);
        return Response
                .status(Response.Status.CREATED)
                .build();
    }

    @PUT
    @Path("/{id}")
    public void update (@PathParam("id")Integer id,Album album){
        albumServiceImpl.findById(id).ifPresent(existingAlbum->{
            albumServiceImpl.save(album);
        });

    }

    @DELETE
    @Path("/{id}")
    public void delete (@PathParam("id")Integer id){
        albumServiceImpl.findById(id)
                .ifPresent(albumServiceImpl::remove);
    }

}
