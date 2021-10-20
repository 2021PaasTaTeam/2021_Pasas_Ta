package passta.paas_ta_back.repository.shop;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Blob;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ShopModifyDto {
    private String name;
    private String phone;
    private String address;
    private MultipartFile image;
}
