package com.programacion.web.db;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "users")
@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private String username;
    private String email;

    @Column(name = "address_street")
    private String addressStreet;

    @Column(name = "address_suite")
    private String addressSuite;

    @Column(name = "address_city")
    private String addressCity;

    @Column(name = "address_zipcode")
    private String addressZipcode;

    @Column(name = "address_geo_lat")
    private BigDecimal addressGeoLat;

    @Column(name = "address_geo_lng")
    private BigDecimal addressGeoLng;

    private String phone;

    private String website;

    @Column(name = "company_name")
    private String companyName;

    @Column(name = "company_catch_phrase")
    private String companyCatchPhrase;

    @Column(name = "company_bs")
    private String companyBs;



}