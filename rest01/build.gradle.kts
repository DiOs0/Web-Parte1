plugins {
    id("java")
}

group = "com.programacion.taller3"
version = "unspecified"

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.jboss.resteasy:resteasy-core:7.0.2.Final")
    implementation("org.jboss.resteasy:resteasy-undertow:7.0.2.Final")

}

tasks.test {
    useJUnitPlatform()
}