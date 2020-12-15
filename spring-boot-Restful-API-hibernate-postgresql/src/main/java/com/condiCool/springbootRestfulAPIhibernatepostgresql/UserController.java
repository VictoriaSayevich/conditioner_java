package com.condiCool.springbootRestfulAPIhibernatepostgresql;

public interface UserController {
    User validateUser(String login, String password) throws AuthException;

    User registerUser(String name, String login, String password) throws AuthException;
}
