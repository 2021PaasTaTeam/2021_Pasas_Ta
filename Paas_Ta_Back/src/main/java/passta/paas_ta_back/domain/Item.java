package passta.paas_ta_back.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Item {

    @Id
    @GeneratedValue
    @Column(name = "item_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "shop_id", nullable = false)
    private Shop shop;

    @Column(name = "item_name")
    private String name;

    // 상품 내용
    @Column(name = "item_content")
    private String content;

    @Embedded
    @Column(name = "item_image")
    private UploadFile image;

    // 상품 등록 날짜
    @Column(name = "item_registration_date")
    private LocalDateTime registration_date;

    // 상품 수정 날짜
    @Column(name = "item_modification_date")
    private LocalDateTime modification_date;

    // 상품 가격
    @Column(name = "item_price")
    private Integer price;

    // 상품 재고 수
    @Column(name = "item_stockQuantity")
    private Integer stockQuantity;

    public void setShopInItem(Shop shop) {
        this.shop = shop;
        shop.getItems().add(this);
    }

    public static Item createItem(Shop shop,
                                  String name,
                                  String content,
                                  UploadFile uploadFile,
                                  int price,
                                  int stockQuantity){
        Item item = new Item();
        item.setShopInItem(shop);
        item.name = name;
        item.content = content;
        item.image = uploadFile;
        item.registration_date = LocalDateTime.now();
        item.modification_date = LocalDateTime.now();
        item.price = price;
        item.stockQuantity = stockQuantity;
        return item;
    }

}
