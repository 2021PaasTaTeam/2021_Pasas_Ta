package passta.paas_ta_back.repository.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import passta.paas_ta_back.domain.UserType;

@Data
@AllArgsConstructor
public class JoinDto {
    private String name;
    private String email;
    private String password;
    private String address;
    private UserType type = UserType.CONSUMER;
}
