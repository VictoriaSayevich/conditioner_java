package com.condiCool.springbootRestfulAPIhibernatepostgresql.Entity;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class UserEntity {
    private Integer userId;
    private String login;

    @Column(name = "password", nullable = false)
    private String password;


    public UserEntity() {

    }

    public UserEntity(Integer id, String name, String login, String password) {
        this.name = name;
        this.id = id;
        this.login = login;
        this.password = password;
    }

    public Integer getUserId() {
        return id;
    }

    public void setUserId(Integer userId) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
