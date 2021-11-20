package passta.paas_ta_back.controller.home.dto;

import lombok.Data;
import passta.paas_ta_back.domain.User;
import passta.paas_ta_back.domain.UserType;

@Data
public class SessionDto {
    private Long id;
    private String name;
    private String email;
    private String address;
    private UserType type;

    public SessionDto(User user) {
        this.id = user.getId();
        this.name = user.getName();
        this.email = user.getEmail();
        this.address = user.getAddress();
        this.type = user.getType();
    }
}
