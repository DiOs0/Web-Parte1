plugins {
    id("java")
    //id("application")
    id("io.freefair.lombok") version "9.5.0"
    id("com.gradleup.shadow") version "9.3.0"
}

group = "com.programacion.taller3"
version = "unspecified"

repositories {
    mavenCentral()
}


dependencies {
    //Componentes rest
    implementation("org.jboss.resteasy:resteasy-core:7.0.2.Final")
    //implementation("org.jboss.resteasy:resteasy-undertow:7.0.2.Final")
    implementation("org.jboss.resteasy:resteasy-json-binding-provider:7.0.2.Final")
    //Implementacion junto a CDI, CDI y rest al mismo tiempo
    implementation("org.jboss.resteasy:resteasy-undertow-cdi:7.0.2.Final")

    //Componentes de negocio CDI Weld
    //implementation("org.jboss.weld.se:weld-se-core:6.0.4.Final")

    //Componentes JPA
    implementation("org.hibernate.orm:hibernate-core:7.4.1.Final")
    implementation("org.postgresql:postgresql:42.7.11")
    implementation("org.apache.deltaspike.modules:deltaspike-data-module-api:2.0.1")
    implementation("org.apache.deltaspike.modules:deltaspike-data-module-impl:2.0.1")


    //Rest Client
    //implementation("org.jboss.resteasy:resteasy-client:7.0.2.Final")



}

//Borrar
tasks.withType<JavaCompile> {
    options.release.set(21)
}

sourceSets{
    main{
        output.setResourcesDir(
            file("${buildDir}/classes/java/main")

        )
    }
}

tasks.test {
    useJUnitPlatform()
}

//Borrar
tasks.jar {
    manifest {
        attributes["Main-Class"] = "com.programacion.web.RestPostMain"
    }
}

//Borrar
tasks.shadowJar {
    mergeServiceFiles()
}