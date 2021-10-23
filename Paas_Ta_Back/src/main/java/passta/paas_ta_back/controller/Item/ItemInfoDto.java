package passta.paas_ta_back.controller.Item;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ItemInfoDto {
    private String name;
    private String content;
    private LocalDateTime registration_date;
    private LocalDateTime modification_date;
    private int price;
    private int stockQuantity;
}
