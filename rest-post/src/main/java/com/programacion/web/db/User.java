package com.programacion.web.db;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class User {

    @Id // Llave primaria
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Integer id;

    private String name;
}
