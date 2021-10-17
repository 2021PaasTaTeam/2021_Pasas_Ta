package passta.paas_ta_back.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue
    @Column(name = "user_id")
    private Long id;

    @Column(name = "user_name", nullable = false)
    private String name;

    @Column(name = "user_email", nullable = false)
    private String email;

    @Column(name = "user_password",nullable = false)
    private String password;

    @Column(name = "user_address", nullable = true)
    private String address;

    // consumer = 소비자, seller = 판매자, manager = 관리자
    @Column(name = "user_type")
    @Enumerated(EnumType.STRING)
    private UserType type;

    @OneToMany(mappedBy = "user")
    private List<Shop> shops = new ArrayList<>();

    public User(String name, String email, String password, String address, UserType type) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.address = address;
        this.type = type;
    }

    public void changeUserType(UserType userType){
        this.type = userType;
    }

}
