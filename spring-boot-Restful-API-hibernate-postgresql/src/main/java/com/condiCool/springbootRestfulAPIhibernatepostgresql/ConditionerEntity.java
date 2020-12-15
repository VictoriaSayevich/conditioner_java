package com.condiCool.springbootRestfulAPIhibernatepostgresql;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "conditioner")
public class ConditionerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer conditionerId;

    @Column(name = "name", nullable = false)
    private String name;

    public ConditionerEntity() {

    }

    public ConditionerEntity(String name) {
        this.name = name;
    }


    public Integer getConditionerId() {
        return conditionerId;
    }
    public void setId(Integer conditionerId) {
        this.conditionerId = conditionerId;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }


    @Override
    public String toString() {
        return "Conditioner [conditionerId=" + conditionerId + ", name=" + name + "]";
    }
}
