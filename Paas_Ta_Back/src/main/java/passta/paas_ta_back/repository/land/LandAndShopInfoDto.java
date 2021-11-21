package passta.paas_ta_back.repository.land;

import lombok.Data;
import passta.paas_ta_back.domain.Land;
import passta.paas_ta_back.domain.LandLocations;
import passta.paas_ta_back.domain.Seat;
import passta.paas_ta_back.domain.UploadFile;

import java.util.List;

@Data
public class LandAndShopInfoDto {
    private Long landId;
    private String landBuilding;
    private String landSeat;
    private String landLocationInfo;
    private Long shopId;
    private String shopName;
    private String shopBusinessType;
    private String shopImageFileName;

    public LandAndShopInfoDto(Land land) {
        this.landId = land.getId();
        this.landBuilding = land.getBuilding();
        this.landSeat = land.getSeat().toString();
        this.landLocationInfo = land.getLandLocations().toString();
        if(land.getShop() != null){
            this.shopId = land.getShop().getId();
            this.shopName = land.getShop().getName();
            this.shopBusinessType = land.getShop().getBusinessType();
            this.shopImageFileName = land.getShop().getImage().getStoreFileName();
        }
    }
}
