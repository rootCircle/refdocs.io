package com.ksumit.login.DataBaseImplement;
import jakarta.persistence.*;

@Entity(name="detail")
@Table(name="detail")
public class UserInforamation {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long Id;

    @Column
    private String name;

    @Column(unique = true,nullable = false)
    private String email;

    @Column
    private String  password;

    public UserInforamation(){
        
    }

    public UserInforamation(String name,String email,String password){
        this.name=name;
        this.email=email;
        this.password=password;
    }

    
    public void setName(String name){
        this.name=name;
    }
    public String getName(){
        return this.name;
    }

    public void setEmail(String email){
        this.email=email;
    }
    public String getEmail(){
        return this.email;
    }

    public void SetPassword(String password){
        this.password=password;
    }

    public String getPassword(){
        return this.password;
    }
}
