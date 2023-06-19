package com.ksumit.login.UserController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ksumit.login.DataBaseImplement.UserInforamation;
import com.ksumit.login.ReturnApi.ReturnApi;
import com.ksumit.login.UserService.ServiceImpement;



@RestController

public class UserController {

    @Autowired
    private ServiceImpement service;

    private ReturnApi returnApi = new ReturnApi();

    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity<?> getResult(@RequestBody UserInforamation Detail){

        try{
            boolean flag = this.service.getResult(Detail.getEmail(), Detail.getPassword());
            if(flag){
                returnApi.setMessage("Success");
            }
            else{
                throw new Exception("false");
            }
        }
        catch(Exception e){ 
            e.printStackTrace();
            returnApi.setMessage("Your email or password is wrong! Please try again!!");
        }
        return ResponseEntity.ok(returnApi);
    }

    @CrossOrigin
    @PostMapping("/")
    public ResponseEntity<?> addDetail(@RequestBody UserInforamation Detail){
        try{
            boolean flag = this.service.addDetail(Detail);
            if(flag){
                returnApi.setMessage("You are registered successfully!");
            }
            else{
                throw new Exception("false");
            }
        }
        catch(Exception e){
            e.printStackTrace();
            returnApi.setMessage("Your email is invalid / or are already register!");
        }
        return ResponseEntity.ok(returnApi);
    }
}
