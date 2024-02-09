package com.example.arc1.arch.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.arc1.arch.model.User;

public interface UserRepository extends JpaRepository<User,String>{

    Optional<User>findByEmail(String email);

}
