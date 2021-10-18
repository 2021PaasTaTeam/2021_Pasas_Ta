package passta.paas_ta_back.controller.user.dto;

import lombok.Data;
import passta.paas_ta_back.domain.User;
import passta.paas_ta_back.domain.UserType;

@Data
public class UserInfoDto {
    private Long id;
    private String name;
    private String email;
    private String address;
    private UserType type;

    public UserInfoDto(User user) {
        this.id = user.getId();
        this.name = user.getName();
        this.email = user.getEmail();
        this.address = user.getAddress();
        this.type = user.getType();
    }
}
