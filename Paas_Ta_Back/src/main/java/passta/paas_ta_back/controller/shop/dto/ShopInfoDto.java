package passta.paas_ta_back.controller.shop.dto;

import lombok.Data;
import passta.paas_ta_back.domain.Shop;
import passta.paas_ta_back.domain.UploadFile;

import java.sql.Blob;

@Data
public class ShopInfoDto {
    private Long shopId;
    private String email;
    private String name;
    private String phone;
    private UploadFile image;
    private String userType = "SELLER";

    public ShopInfoDto(Shop shop) {
        this.shopId = shop.getId();
        this.email = shop.getUser().getEmail();
        this.name = shop.getName();
        this.phone = shop.getPhone();
        this.image = shop.getImage();
    }
}
