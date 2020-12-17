package com.condiCool.springbootRestfulAPIhibernatepostgresql.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.condiCool.springbootRestfulAPIhibernatepostgresql.Entity.ConditionerEntity;
import com.condiCool.springbootRestfulAPIhibernatepostgresql.Repositories.ConditionerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/conditioner")
public class ConditionerController {

    @Autowired
    ConditionerRepository conditionerRepository;

    @GetMapping("/get-all-conditioner")
    public List<ConditionerEntity> getAllConditioner(){
        List<ConditionerEntity> allConditionerlist = conditionerRepository.findAll();
        return allConditionerlist;
    }

    @GetMapping("/get-conditioner/{id}")
    public ConditionerEntity getConditionerById(@PathVariable(value = "id") Integer conditionerId)

    {
        ConditionerEntity conditionerEntity = conditionerRepository.findById(conditionerId).get();
        return conditionerEntity;
    }

    @PostMapping("/create-conditioner")
    public ConditionerEntity createConditioner(@RequestBody ConditionerEntity conditioner) {

        ConditionerEntity savedConditioner = conditionerRepository.save(conditioner);

        return savedConditioner;
    }

    @PutMapping("/update-conditioner/{id}")
    public ResponseEntity<ConditionerEntity> updateConditioner(@PathVariable(value = "id") Integer conditionerId,
                                                         @RequestBody ConditionerEntity conditionerDetails) {
        ConditionerEntity conditioner = conditionerRepository.findById(conditionerId).get();

        conditioner.setBrend(conditionerDetails.getBrend());
        conditioner.setModel(conditionerDetails.getModel());
        conditioner.setType(conditionerDetails.getType());
        conditioner.setInside_block(conditionerDetails.getInside_block());
        conditioner.setOperating_mode(conditionerDetails.getOperating_mode());
        conditioner.setAir_filter(conditionerDetails.getAir_filter());
        conditioner.setInvertor(conditionerDetails.getInvertor());
        conditioner.setCooling_capacity(conditionerDetails.getCooling_capacity());
        conditioner.setRefrigerant_type(conditionerDetails.getRefrigerant_type());
        conditioner.setRemote_manage(conditionerDetails.getRemote_manage());
        conditioner.setCountry(conditionerDetails.getCountry());
        conditioner.setPrice(conditionerDetails.getPrice());

        final ConditionerEntity updatedConditioner = conditionerRepository.save(conditioner);
        return ResponseEntity.ok(updatedConditioner);
    }

    @DeleteMapping("/delete-conditioner/{id}")
    public Map<String, Boolean> deleteConditioner(@PathVariable(value = "id") Integer conditionerId)
    {
        ConditionerEntity conditioner = conditionerRepository.findById(conditionerId).get();

        conditionerRepository.delete(conditioner);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}