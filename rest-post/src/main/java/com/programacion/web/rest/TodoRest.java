package com.programacion.web.rest;


import com.programacion.web.db.Todo;
import com.programacion.web.servicios.impl.TodoServiceImpl;
import com.programacion.web.servicios.interfaces.TodoService;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("/todos")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TodoRest {

    final TodoServiceImpl todoServiceImpl;


    @Inject
    public TodoRest(TodoServiceImpl todoServiceImpl) {
        this.todoServiceImpl = todoServiceImpl;
    }

    @GET
    public List<Todo> findAll(){
        return todoServiceImpl.findAll();
    }

    @GET
    @Path("/{id}")
    public Response findById(@PathParam("id")Integer id){
        return todoServiceImpl.findById(id)
                .map(Response::ok)
                .orElse(Response.status(Response.Status.NOT_FOUND))
                .build();
    }

    @POST
    public Response save (Todo todo){
        todoServiceImpl.save(todo);
        return Response
                .status(Response.Status.CREATED)
                .build();
    }

    @PUT
    @Path("/{id}")
    public void update (@PathParam("id")Integer id,Todo todo){
        todoServiceImpl.findById(id).ifPresent(existingUser->{
            todoServiceImpl.save(todo);
        });

    }

    @DELETE
    @Path("/{id}")
    public void delete (@PathParam("id")Integer id){
        todoServiceImpl.findById(id).ifPresent(todoServiceImpl::remove);
    }
}
