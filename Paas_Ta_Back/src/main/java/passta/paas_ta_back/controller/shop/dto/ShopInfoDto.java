package passta.paas_ta_back.controller.shop.dto;

import lombok.Data;
import passta.paas_ta_back.domain.Shop;
import passta.paas_ta_back.domain.UploadFile;

import java.sql.Blob;

@Data
public class ShopInfoDto {
    private Long shopId;
    private Long landId;
    private String email;
    private String name;
    private String phone;
    private UploadFile image;
    private String bussinessType;
    private String region;
    private String address;
    private String userType = "SELLER";

    public ShopInfoDto(Shop shop) {
        this.shopId = shop.getId();
        this.landId = shop.getLand().getId();
        this.email = shop.getUser().getEmail();
        this.name = shop.getName();
        this.phone = shop.getPhone();
        this.image = shop.getImage();
        this.region = shop.getRegion();
        this.address = shop.getAddress();
        this.bussinessType = shop.getBusinessType();
    }
}
