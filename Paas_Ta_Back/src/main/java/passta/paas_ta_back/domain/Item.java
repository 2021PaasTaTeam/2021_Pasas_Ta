package passta.paas_ta_back.domain;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import passta.paas_ta_back.exception.NotEnoughStockException;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Item {

    @Id
    @GeneratedValue
    @Column(name = "item_id")
    private Long id;

    //상품 이름
    @Column(name = "item_name")
    private String name;

    // 상품 내용
    @Column(name = "item_content")
    private String content;

    // 상품 등록 날짜
    @Column(name = "item_registration_date")
    private LocalDateTime registration_date;

    // 상품 수정 날짜
    @Column(name = "item_modification_date")
    private LocalDateTime modification_date;

    // 상품 가격
    @Column(name = "item_price")
    private int price;

    // 상품 재고 수
    @Column(name = "item_stockQuantity")
    private int stockQuantity;

    // ITEM 의 SHOP
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "shop_id", nullable = false)
    private Shop shop;

    // ITEM 이미지들
    @OneToMany(mappedBy = "item", cascade = CascadeType.ALL)
    private List<ItemImages> itemImages = new ArrayList<>();

    // ITEM SHOP 주입
    public void setShopInItem(Shop shop) {
        this.shop = shop;
        shop.getItems().add(this);
    }

    // ITEM 생성 메서드
    public static Item createItem(Shop shop,
                                  String name,
                                  String content,
                                  int price,
                                  int stockQuantity,
                                  List<UploadFile> itemImages){
        Item item = new Item();
        item.setShopInItem(shop);
        item.name = name;
        item.content = content;
        item.registration_date = LocalDateTime.now();
        item.modification_date = LocalDateTime.now();
        item.price = price;
        item.stockQuantity = stockQuantity;
        for (UploadFile itemImage : itemImages) {
            ItemImages.createItemImages(item,
                    itemImage.getUploadFileName(),
                    itemImage.getStoreFileName());
        }
        return item;
    }

    // ITEM 수정 메서드
    public Item changeItemInfo(String content, int price, int stockQuantity){
        if (content != null){this.content = content;}
        if (price > 0){this.price = price;}
        if (stockQuantity > 0){this.stockQuantity = stockQuantity;}
        this.modification_date = LocalDateTime.now();
        return this;
    }

    /**
     *비즈니스 로직
     * stock 증가
     * @param quantity
     */
    public void addStock(int quantity) {
        this.stockQuantity += quantity;
    }

    public void removeStock(int quantity) {
        int resultStock = this.stockQuantity - quantity;
        if (resultStock < 0) {
            throw new NotEnoughStockException("need more stock");
        }
        this.stockQuantity = resultStock;
    }

}
