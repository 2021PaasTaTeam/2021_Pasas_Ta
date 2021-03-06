package passta.paas_ta_back.domain;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
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

    // USER들 가게들
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Shop> shops = new ArrayList<>();

    // USER의 주문들(주문 LIST)
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Order> orders = new ArrayList<>();


    // USER 생성 메서드
    public static User createUser(String name, String email, String password, String address, UserType type) {
        User user = new User();
        user.name = name;
        user.email = email;
        user.password = password;
        user.address = address;
        user.type = type;
        return user;
    }

    // USER 권한 설정(판매자, 소비자, 관리자)
    public void changeUserType(UserType userType){
        this.type = userType;
    }

    // USER 정보 수정 메서드
    public User changeUserInfo(String name, String password, String address){
        if (name != null){this.name = name;}
        if (password != null){this.password = password;}
        if (address != null){this.address = address;}
        return this;
    }

}
