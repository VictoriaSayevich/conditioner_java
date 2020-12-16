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

    @Column(name = "brend", nullable = false)
    private String brend;

    @Column(name = "model", nullable = true)
    private String model;

    @Column(name = "type", nullable = true)
    private String type;

    @Column(name = "inside_block", nullable = true)
    private String inside_block;

    @Column(name = "operating_mode", nullable = true)
    private String operating_mode;

    @Column(name = "air_filter", nullable = true)
    private Boolean air_filter;

    @Column(name = "invertor", nullable = true)
    private Boolean invertor;

    @Column(name = "cooling_capacity", nullable = true)
    private Integer cooling_capacity;

    @Column(name = "refrigerant_type", nullable = true)
    private String refrigerant_type;

    @Column(name = "remote_manage", nullable = true)
    private Boolean remote_manage;

    @Column(name = "country", nullable = true)
    private String country;

    @Column(name = "price", nullable = true)
    private Double price;

    public ConditionerEntity() {

    }

    public ConditionerEntity(String brend) {
        this.brend = brend;
    }


    public Integer getConditionerId() {
        return id;
    }
    public void setId(Integer conditionerId) {
        this.id = conditionerId;
    }

    public String getBrend() { return brend; }
    public void setBrend(String brend) {
        this.brend = brend;
    }

    public String getModel() { return model; }
    public void setModel(String model) {
        this.model = model;
    }

    public String getType() { return type; }
    public void setType(String type) {
        this.type = type;
    }

    public String getInside_block() { return inside_block; }
    public void setInside_block(String inside_block) {
        this.inside_block = inside_block;
    }

    public String getOperating_mode() { return operating_mode; }
    public void setOperating_mode(String operating_mode) {
        this.operating_mode = operating_mode;
    }

    public String getRefrigerant_type() { return refrigerant_type; }
    public void setRefrigerant_type(String refrigerant_type) {
        this.refrigerant_type = refrigerant_type;
    }

    public String getCountry() { return country; }
    public void setCountry(String country) {
        this.country = country;
    }

    public Boolean getAir_filter() { return air_filter; }
    public void setAir_filter(Boolean air_filter) {
        this.air_filter = air_filter;
    }

    public Boolean getInvertor() { return invertor; }
    public void setInvertor(Boolean invertor) {
        this.invertor = invertor;
    }

    public Boolean getRemote_manage() { return remote_manage; }
    public void setRemote_manage(Boolean remote_manage) {
        this.remote_manage = remote_manage;
    }

    public Double getPrice() { return price; }
    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getCooling_capacity() { return cooling_capacity; }
    public void setPrice(Integer cooling_capacity) {
        this.cooling_capacity = cooling_capacity;
    }

    @Override
    public String toString() {
        return "Conditioner [conditionerId=" + id + ", brend=" + brend + "]";
    }
}
