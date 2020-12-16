package com.condiCool.springbootRestfulAPIhibernatepostgresql.Repositories;

import com.condiCool.springbootRestfulAPIhibernatepostgresql.Entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {

//    Integer create(String name, String login, String password);
//
//    UserEntity findByLoginAndPassword(String login, String password);
//
//    Integer getCountByLogin(String login);
//
//    UserEntity findById(Integer userId);

    @Query(value = "SELECT id, name, login, password FROM USERS WHERE login = ?1", nativeQuery = true)
    UserEntity findByLoginAndPassword(String login, String password);

    @Query(value = "SELECT COUNT(*) FROM USERS WHERE login = ?1", nativeQuery = true)
    Integer getCountByLogin(String login);

    @Query(value = "SELECT id, name, login, password FROM USERS WHERE id = ?1", nativeQuery = true)
    public UserEntity findUserById(Integer userId);

    @Query(value = "INSERT INTO USERS (id, name, login, password) VALUES (DEFAULT, ?1, ?2, ?3) returning USERS.id", nativeQuery = true)
    public Integer create(String name, String login, String password);
}
