package passta.paas_ta_back.controller.user.dto;

import lombok.Data;
import passta.paas_ta_back.domain.Shop;
import passta.paas_ta_back.domain.User;
import passta.paas_ta_back.domain.UserType;
import passta.paas_ta_back.repository.land.LandAndShopInfoDto;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class UserSessionDto {
    private Long id;
    private String name;
    private String email;
    private String address;
    private UserType type;
    private List<LandAndShopInfoDto> landAndShopInfos;

    public UserSessionDto(User user, List<LandAndShopInfoDto> lands){
        this.id = user.getId();
        this.name = user.getName();
        this.email = user.getEmail();
        this.address = user.getAddress();
        this.type = user.getType();
        this.landAndShopInfos = lands;

    }
}
