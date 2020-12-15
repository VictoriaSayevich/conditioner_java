package com.condiCool.springbootRestfulAPIhibernatepostgresql.Repositories;

import com.condiCool.springbootRestfulAPIhibernatepostgresql.Entity.UserEntity;
import com.condiCool.springbootRestfulAPIhibernatepostgresql.Exceptions.AuthException;

public interface UserRepository {

    Integer create(String name, String login, String password) throws AuthException;

    UserEntity findByLoginAndPassword(String login, String password) throws AuthException;

    Integer getCountByLogin(String login);

    UserEntity findById(Integer userId);

}