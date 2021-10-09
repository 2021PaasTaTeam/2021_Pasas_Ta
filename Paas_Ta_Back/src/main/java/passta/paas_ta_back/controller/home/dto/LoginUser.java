package passta.paas_ta_back.controller.home.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class LoginUser {
    private Long id;
    private String emailNickName;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setEmailNickName(String emailNickName) {
        this.emailNickName = emailNickName;
    }

    public String getEmailNickName() {
        return emailNickName.split("@")[0];
    }
}
