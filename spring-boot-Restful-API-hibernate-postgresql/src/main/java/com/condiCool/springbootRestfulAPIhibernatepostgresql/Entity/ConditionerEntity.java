package com.condiCool.springbootRestfulAPIhibernatepostgresql.Entity;

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
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    @Column(name = "name", nullable = false)
    private String name;

    public ConditionerEntity() {

    }

    public ConditionerEntity(String name) {
        this.name = name;
    }


    public Integer getConditionerId() {
        return id;
    }
    public void setId(Integer conditionerId) {
        this.id = conditionerId;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }


    @Override
    public String toString() {
        return "Conditioner [conditionerId=" + id + ", name=" + name + "]";
    }
}
