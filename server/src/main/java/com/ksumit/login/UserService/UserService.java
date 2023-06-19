package com.ksumit.login.UserService;

import com.ksumit.login.DataBaseImplement.UserInforamation;

public interface UserService {
    Boolean addDetail(UserInforamation Detail);
    Boolean getResult(String email,String Password);
}
