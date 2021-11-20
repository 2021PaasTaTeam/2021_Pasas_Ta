package passta.paas_ta_back.repository.item;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ItemRegisterDto {
    Long shopId;
    String itemName;
    String itemContent;
    int itemPrice;
    int itemStock;
    List<MultipartFile> itemImages;
}
