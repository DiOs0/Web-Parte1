package com.programacion.web;




import com.programacion.web.repositorios.UserRepository;
import jakarta.enterprise.inject.se.SeContainerInitializer;
import jakarta.ws.rs.SeBootstrap;
import jakarta.ws.rs.core.Application;

import java.net.URI;

public class RestPostMain {

    public static void main(String[] args) throws Exception {

//        var cdiContainer= SeContainerInitializer.newInstance()
//                .initialize();
//
//        var repo= cdiContainer.select(UserRepository.class).get();
//        repo.findAll()
//                .forEach(System.out::println);




        SeBootstrap.Configuration conf = SeBootstrap.Configuration.builder()
                //Aqui se tiene que poner una ip dinamica y la forma es esta
                .host("0.0.0.0")
                .port(8080)
                .protocol("http")
                .build();

        SeBootstrap.start(MyApplication.class, conf)
                .thenAccept(instance -> {
                    System.out.println(instance);
                    URI uri = instance.configuration().baseUri();
                    System.out.println("Servidor Iniciado " + uri);
                });
        Thread.currentThread().join();

    }
}

