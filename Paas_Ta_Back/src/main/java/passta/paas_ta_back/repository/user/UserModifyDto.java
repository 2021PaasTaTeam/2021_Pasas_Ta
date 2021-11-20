package passta.paas_ta_back.repository.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserModifyDto {
    private String name;
    private String password;
    private String address;
}
