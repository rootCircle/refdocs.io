package com.ksumit.login.ReturnApi;


public class ReturnApi {

    private String message="Something is Error!";

    // public ReturnApi(String message){
    //     this.message=message;
    // }

    public void setMessage(String message){
        this.message=message;
    }
    public String getMessage(){
        return this.message;
    }
}
