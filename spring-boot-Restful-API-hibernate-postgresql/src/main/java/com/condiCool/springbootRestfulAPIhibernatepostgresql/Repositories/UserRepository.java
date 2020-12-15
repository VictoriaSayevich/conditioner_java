package com.condiCool.springbootRestfulAPIhibernatepostgresql.Repositories;

import com.condiCool.springbootRestfulAPIhibernatepostgresql.Entity.User;
import com.condiCool.springbootRestfulAPIhibernatepostgresql.Exceptions.AuthException;

public interface UserRepository {

    Integer create(String name, String login, String password) throws AuthException;

    User findByLoginAndPassword(String login, String password) throws AuthException;

    Integer getCountByLogin(String login);

    User findById(Integer userId);

}