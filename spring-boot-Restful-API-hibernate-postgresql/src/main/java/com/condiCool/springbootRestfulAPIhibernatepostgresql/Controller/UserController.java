package com.condiCool.springbootRestfulAPIhibernatepostgresql.Controller;

import com.condiCool.springbootRestfulAPIhibernatepostgresql.Entity.User;
import com.condiCool.springbootRestfulAPIhibernatepostgresql.Exceptions.AuthException;

public interface UserController {
    User validateUser(String login, String password) throws AuthException;

    User registerUser(String name, String login, String password) throws AuthException;
}
