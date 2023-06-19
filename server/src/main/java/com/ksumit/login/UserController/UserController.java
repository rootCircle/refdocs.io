package com.ksumit.login.UserController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ksumit.login.DataBaseImplement.UserInforamation;
import com.ksumit.login.ReturnApi.ReturnApi;
import com.ksumit.login.UserService.ServiceImpement;



@RestController

public class UserController {

    @Autowired
    private ServiceImpement service;

    private ReturnApi returnApi = new ReturnApi();

    @GetMapping("/{email}/{password}")
    public ResponseEntity<?> getResult(@PathVariable String email,@PathVariable String password){

        try{
            boolean flage = this.service.getResult(email, password);
            if(flage==true){
                returnApi.setMessage("welcome to our cources !");
            }
            else{
                throw new Exception("false");
            }
        }
        catch(Exception e){ 
            e.printStackTrace();
            returnApi.setMessage("Your email or password will be wrong! please try again!!");
        }
        return ResponseEntity.ok(returnApi);
    }

    @PostMapping("/")
    public ResponseEntity<?> addDetail(@RequestBody UserInforamation Detail){
        try{
            boolean flage1 = this.service.addDetail(Detail);
            if(flage1==true){
                returnApi.setMessage("Succesfully you are register!");
            }
            else{
                throw new Exception("false");
            }
        }
        catch(Exception e){
            e.printStackTrace();
            returnApi.setMessage("Your email will be invalid / your are already register!");
        }
        return ResponseEntity.ok(returnApi);
    }
}
