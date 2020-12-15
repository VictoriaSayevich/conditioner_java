package com.condiCool.springbootRestfulAPIhibernatepostgresql.Controller;

import com.condiCool.springbootRestfulAPIhibernatepostgresql.Entity.UserEntity;
import com.condiCool.springbootRestfulAPIhibernatepostgresql.Exceptions.AuthException;

public interface UserController {
    UserEntity validateUser(String login, String password) throws AuthException;

    UserEntity registerUser(String name, String login, String password) throws AuthException;
}
