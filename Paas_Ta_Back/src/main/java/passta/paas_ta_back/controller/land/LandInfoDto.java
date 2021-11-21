package passta.paas_ta_back.controller.land;

import lombok.Data;
import passta.paas_ta_back.controller.shop.dto.ShopInfoDto;
import passta.paas_ta_back.domain.Land;

@Data
public class LandInfoDto {
    private Long landId;
    private String buildingName;
    private String seat;
    private String landCoordinate;

    public LandInfoDto(Land land){
        this.landId = land.getId();
        this.buildingName = land.getBuilding();
        this.seat = land.getSeat().toString();
        this.landCoordinate = land.getLandLocations().toString();
    }
}
