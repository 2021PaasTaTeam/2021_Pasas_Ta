package passta.paas_ta_back.domain;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Blob;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Shop {

    @Id
    @GeneratedValue
    @Column(name = "shop_id")
    private Long id;

    // 사업자 등록 번호
    @Column(name = "shop_registration_number", nullable = false)
    private String registrationNum;

    @Column(name = "shop_name", nullable = false)
    private String name;

    @Column(name = "shop_phone", nullable = false)
    private String phone;

    @Column(name = "shop_region")
    private String region;

    // SHOP 상세 주소
    @Column(name = "shop_address")
    private String address;

    // SHOP 업종
    @Column(name = "shop_business_type")
    private String businessType;

    // SHOP 사진
    @Column(name = "shop_image")
    private UploadFile image;

    // SHOP 주인
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // SHOP의 ITEMS
    @OneToMany(mappedBy = "shop", cascade = CascadeType.ALL)
    private List<Item> items = new ArrayList<>();

    // SHOP USER 주입 메서드
    public void setUserInShop(User user) {
        this.user = user;
        user.getShops().add(this);
        user.changeUserType(UserType.SELLER); // 판매로 권한 변경
    }

    // SHOP 생성 메서드
    public static Shop createShop(User user,
                                  String registrationNum,
                                  String name,
                                  String phone,
                                  String region,
                                  String address,
                                  String businessType,
                                  UploadFile image) {
        Shop shop = new Shop();
        shop.setUserInShop(user);
        shop.registrationNum = registrationNum;
        shop.businessType = businessType;
        shop.name = name;
        shop.phone = phone;
        shop.image = image;
        shop.address = address;
        shop.region = region;
        return shop;
    }

    // SHOP 정보 수정 메서드
    public Shop changeShopInfo(String name, String phone, String address) {
        if (name != null) {
            this.name = name;
        }
        if (phone != null) {
            this.phone = phone;
        }
        if (address != null) {
            this.address = address;
        }
        return this;
    }

}

