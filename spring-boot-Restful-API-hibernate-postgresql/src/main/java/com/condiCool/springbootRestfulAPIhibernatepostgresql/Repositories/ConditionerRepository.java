package com.condiCool.springbootRestfulAPIhibernatepostgresql.Repositories;
import com.condiCool.springbootRestfulAPIhibernatepostgresql.Entity.ConditionerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ConditionerRepository extends JpaRepository<ConditionerEntity, Integer> {

//    @Query(value = "INSERT INTO CONDITIONER " +
//            "(id, brend, model, type, inside_block, operating_mode, air_filter, invertor, cooling_capacity, refrigerant_type, remote_manage, country, price) " +
//            "VALUES (DEFAULT, ?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12) returning USERS.id", nativeQuery = true)
//    public Integer create(String brend, String model, String type, String inside_block, String operating_mode,
//                          Boolean air_filter, Boolean invertor, Integer cooling_capacity, String refrigerant_type,
//                          Boolean remote_manage, String country, Double price);
}