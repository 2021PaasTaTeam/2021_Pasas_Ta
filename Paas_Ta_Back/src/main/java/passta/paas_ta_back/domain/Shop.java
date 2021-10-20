package passta.paas_ta_back.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Blob;
import java.util.List;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Shop {

    @Id
    @GeneratedValue
    @Column(name = "shop_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "shop_registration_number", nullable = false)
    private String registrationNum;

    @Column(name = "shop_name", nullable = false)
    private String name;

    @Column(name = "shop_phone", nullable = false)
    private String phone;

    @Column(name = "shop_address", nullable = false)
    private String address;

    @Column(name = "shop_business_type")
    private String businessType;

    @Column(name = "shop_image")
    private UploadFile images;

    @OneToMany(mappedBy = "shop", cascade = CascadeType.ALL)
    private List<Item> items;

    public void setUserInShop(User user) {
        this.user = user;
        user.getShops().add(this);
        user.changeUserType(UserType.SELLER); // 판매로 권한 변경
    }

    public static Shop createShop(User user,
                                  String registrationNum,
                                  String name,
                                  String phone,
                                  String address,
                                  String businessType,
                                  UploadFile images) {
        Shop shop = new Shop();
        shop.setUserInShop(user);
        shop.registrationNum = registrationNum;
        shop.businessType = businessType;
        shop.name = name;
        shop.phone = phone;
        shop.images = images;
        shop.address = address;
        return shop;
    }

    public Shop changeShopInfo(String name, String phone, String address){
        if (name != null){this.name = name;}
        if (phone != null){this.phone = phone;}
        if (address != null){this.address = address;}
        return this;
    }

}

