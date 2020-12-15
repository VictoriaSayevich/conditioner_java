package com.condiCool.springbootRestfulAPIhibernatepostgresql;

public class User {
    private Integer userId;
    private String login;
    private String password;


    public User(Integer userId, String login, String password) {
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

    public String login() {
        return login;
    }

    public void setFirstName(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
