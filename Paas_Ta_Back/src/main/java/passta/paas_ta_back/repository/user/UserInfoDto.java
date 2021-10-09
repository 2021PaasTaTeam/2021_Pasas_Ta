package passta.paas_ta_back.repository.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import passta.paas_ta_back.domain.User;

@Data
public class UserInfoDto {
    private String name;
    private String email;

    public UserInfoDto(User user) {
        this.name = user.getName();
        this.email = user.getEmail();
    }
}
