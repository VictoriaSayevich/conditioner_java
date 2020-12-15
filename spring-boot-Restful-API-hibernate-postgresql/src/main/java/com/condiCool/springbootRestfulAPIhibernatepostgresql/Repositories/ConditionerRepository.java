package com.condiCool.springbootRestfulAPIhibernatepostgresql.Repositories;
import com.condiCool.springbootRestfulAPIhibernatepostgresql.Entity.ConditionerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConditionerRepository extends JpaRepository<ConditionerEntity, Integer> {

}