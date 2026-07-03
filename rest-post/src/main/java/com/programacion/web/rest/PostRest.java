package com.programacion.web.rest;


import com.programacion.web.db.Photo;
import com.programacion.web.db.Post;
import com.programacion.web.servicios.impl.PhotoServiceImpl;
import com.programacion.web.servicios.impl.PostServiceImpl;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("/posts")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class PostRest {

    final PostServiceImpl postServiceImpl;

    @Inject
    public PostRest(PostServiceImpl postServiceImpl) {
        this.postServiceImpl = postServiceImpl;
    }

    @GET
    public List<Post> findAll(){
        return postServiceImpl.findAll();
    }

    @GET
    @Path("/{id}")
    public Response findById(@PathParam("id")Integer id){
        return postServiceImpl.findById(id)
                .map(Response::ok)
                .orElse(Response.status(Response.Status.NOT_FOUND))
                .build();
    }

    @POST
    public Response save (Post post){
        postServiceImpl.save(post);
        return Response
                .status(Response.Status.CREATED)
                .build();
    }

    @PUT
    @Path("/{id}")
    public void update (@PathParam("id")Integer id,Post post){
        postServiceImpl.findById(id).ifPresent(existingAlbum->{
            postServiceImpl.save(post);
        });

    }

    @DELETE
    @Path("/{id}")
    public void delete (@PathParam("id")Integer id){
        postServiceImpl.findById(id)
                .ifPresent(postServiceImpl::remove);
    }

}