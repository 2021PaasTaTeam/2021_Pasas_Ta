package passta.paas_ta_back.repository.shop;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegisterDto {
    private String registrationNum;
    private String email;
    private String name;
    private String phone;
    private String address;
    private String region;
    private String businessType;
    private MultipartFile image;
}
