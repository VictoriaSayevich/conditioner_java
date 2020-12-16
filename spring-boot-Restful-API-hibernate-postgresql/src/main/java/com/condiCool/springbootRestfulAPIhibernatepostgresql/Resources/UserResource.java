package com.condiCool.springbootRestfulAPIhibernatepostgresql.Resources;

import com.condiCool.springbootRestfulAPIhibernatepostgresql.Constants;
import com.condiCool.springbootRestfulAPIhibernatepostgresql.Entity.UserEntity;
import com.condiCool.springbootRestfulAPIhibernatepostgresql.Exceptions.AuthException;
import com.condiCool.springbootRestfulAPIhibernatepostgresql.Repositories.UserRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserResource {
    @Autowired
    UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> loginUser(@RequestBody Map<String, Object> userMap) {
        String login = (String) userMap.get("login");
        String password = (String) userMap.get("password");

        UserEntity userEntity = userRepository.findByLoginAndPassword(login, password);
        return ResponseEntity.ok(generateJWTToken(userEntity));
    }

    @PostMapping ("/register")
    public ResponseEntity<Map<String, String>> registerUser(@RequestBody Map<String, Object> userMap) {
        String name = (String) userMap.get("name");
        String login = (String) userMap.get("login");
        String password = (String) userMap.get("password");

        Integer count = userRepository.getCountByLogin(login);

        if(count > 0)
           throw new AuthException("Login already in use");
        Integer userId = userRepository.create(name, login, password);
        UserEntity userEntity = userRepository.findUserById(userId);

        return ResponseEntity.ok(generateJWTToken(userEntity));
    }

    private Map<String, String> generateJWTToken(UserEntity userEntity) {
        long timestamp = System.currentTimeMillis();
        String token = Jwts.builder().signWith(SignatureAlgorithm.HS256, Constants.API_SECRET_KEY)
                .setIssuedAt(new Date(timestamp))
                .setExpiration(new Date(timestamp + Constants.TOKEN_VALIDITY))
                .claim("id", userEntity.getUserId())
                .claim("login", userEntity.getLogin())
                .compact();
        Map<String, String> map = new HashMap<>();
        map.put("token", token);
        return map;
    }
}
