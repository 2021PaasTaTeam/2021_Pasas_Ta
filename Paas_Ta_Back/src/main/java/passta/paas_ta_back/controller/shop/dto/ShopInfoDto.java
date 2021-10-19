package passta.paas_ta_back.controller.shop.dto;

import lombok.Data;
import passta.paas_ta_back.domain.Shop;

import java.sql.Blob;

@Data
public class ShopInfoDto {
    private Long id;
    private String email;
    private String name;
    private String phone;
    private Blob images;

    public ShopInfoDto(Shop shop) {
        this.id = shop.getId();
        this.email = shop.getUser().getEmail();
        this.name = shop.getName();
        this.phone = shop.getPhone();
        this.images = shop.getImages();
    }
}
