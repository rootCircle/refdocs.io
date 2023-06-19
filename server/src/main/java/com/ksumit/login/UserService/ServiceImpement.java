package com.ksumit.login.UserService;

import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ksumit.login.DataBase.DataBase;
import com.ksumit.login.DataBaseImplement.UserInforamation;

@Service
public class ServiceImpement implements UserService{

    @Autowired
    private DataBase db;

    @Override
    public Boolean addDetail(UserInforamation Detail) {

        String Email = Detail.getEmail();
        // String Password = Detail.getPassword();
        
        String emailRegex ="^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
        Pattern pattern = Pattern.compile(emailRegex);
        System.out.println(Email);
        if(pattern.matcher(Email).matches()){
            this.db.save(Detail);
            return true;
        }
        return false;
    
        
    }

    @Override
    public Boolean getResult(String email, String Password) {
        
        String emailRegex ="^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
        Pattern pattern = Pattern.compile(emailRegex);
        if(pattern.matcher(email).matches()){
            UserInforamation x = this.db.getresult(email,Password);
            if(x!=null){
                return true;
            }
            return false;
         }
         else{
            return false;
         }
    }
}
