package passta.paas_ta_back.repository.shop;

import lombok.Data;
import passta.paas_ta_back.domain.Shop;

import java.sql.Blob;

@Data
public class ShopInfoDto {
    private String email;
    private String name;
    private String phone;
    private Blob images;

    public ShopInfoDto(Shop shop) {
        this.email = shop.getUser().getEmail();
        this.name = shop.getName();
        this.phone = shop.getPhone();
        this.images = shop.getImages();
    }
}
