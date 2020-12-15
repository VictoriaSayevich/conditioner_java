package com.condiCool.springbootRestfulAPIhibernatepostgresql;

public class User {
    private Integer userId;
    private String login;
    private String password;
    private String name;


    public User(Integer userId, String name, String login, String password) {
        this.name = name;
        this.userId = userId;
        this.login = login;
        this.password = password;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
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
