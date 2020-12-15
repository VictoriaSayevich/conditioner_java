package com.condiCool.springbootRestfulAPIhibernatepostgresql;

public interface UserController {
    User validateUser(String password) throws AuthException;

    User registerUser(String login, String password) throws AuthException;
}
