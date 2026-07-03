package com.programacion.web.cliente;

import com.programacion.web.cliente.dto.UserDto;
import jakarta.ws.rs.client.ClientBuilder;
import jakarta.ws.rs.client.Entity;
import jakarta.ws.rs.client.WebTarget;
import jakarta.ws.rs.core.GenericType;
import jakarta.ws.rs.core.MediaType;

import java.util.Arrays;
import java.util.List;

public class ClienteRestMain {

    public static final String USERS_URL="http://localhost:8080/api/users";

    public static void main(String[] args) {

        try(var client= ClientBuilder.newClient()){

            //-----GET
            //Un usuario
            UserDto user1= client.target(USERS_URL)
                    .path("/{id}")
                    .resolveTemplate("id",2)
                    .request(MediaType.APPLICATION_JSON)
                    .get(UserDto.class);

            System.out.println(user1);


            //All users
//            List<UserDto> users= client.target(USERS_URL)
//                    .request(MediaType.APPLICATION_JSON)
//                    .get(new GenericType<>(){});
//
//            System.out.println(users);

            //-----------


            //-----POST
            var newUser= new UserDto();


            newUser.setName("John Doe");
            newUser.setUsername("johndoe123");
            newUser.setEmail("john.doe@example.com");
            // Dirección
            newUser.setAddressStreet("Kulas Light");
            newUser.setAddressSuite("Apt. 556");
            newUser.setAddressCity("Gwenborough");
            newUser.setAddressZipcode("92998-3874");
            // Geolocalización (Usa java.math.BigDecimal)
            newUser.setAddressGeoLat(new java.math.BigDecimal("-37.3159"));
            newUser.setAddressGeoLng(new java.math.BigDecimal("81.1496"));
            // Contacto
            newUser.setPhone("1-770-736-8031 x56442");
            newUser.setWebsite("hildegard.org");
            // Compañía
            newUser.setCompanyName("Romaguera-Crona");
            newUser.setCompanyCatchPhrase("Multi-layered client-server neural-net");
            newUser.setCompanyBs("harness real-time e-markets");


            var response=client.target(USERS_URL)
                    .request(MediaType.APPLICATION_JSON)
                    .post(Entity.entity(newUser,MediaType.APPLICATION_JSON));

            System.out.println("Status+ "+response.getStatus());


            //------PUT

            String userId = "1";

            UserDto userToUpdate = client.target(USERS_URL)
                    .path(userId)
                    .request(MediaType.APPLICATION_JSON)
                    .get(UserDto.class);

            userToUpdate.setName("John Doe Actualizado");
            userToUpdate.setEmail("john.doe.new@example.com");

            var responsePut = client.target(USERS_URL)
                    .path(userId)
                    .request(MediaType.APPLICATION_JSON)
                    .put(Entity.entity(userToUpdate, MediaType.APPLICATION_JSON));

            System.out.println("Status PUT: " + responsePut.getStatus());


            //----------

            //------DELETE
            String userId2 = "19";
            var responseDelete = client.target(USERS_URL)
                    .path(userId2)
                    .request(MediaType.APPLICATION_JSON)
                    .delete();

            System.out.println("Status DELETE: " + responseDelete.getStatus());


            //----------

        }catch (Exception e) {
            e.printStackTrace();
        }
    }
}
