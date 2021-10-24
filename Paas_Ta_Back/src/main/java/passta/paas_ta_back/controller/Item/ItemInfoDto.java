package passta.paas_ta_back.controller.Item;

import lombok.Data;
import passta.paas_ta_back.domain.Item;

import java.time.LocalDateTime;

@Data
public class ItemInfoDto {
    private Long itemId;
    private String name;
    private String content;
    private LocalDateTime registration_date;
    private LocalDateTime modification_date;
    private int price;
    private int stockQuantity;

    public ItemInfoDto(Item item) {
        this.itemId = item.getId();
        this.name = item.getName();
        this.content = item.getContent();
        this.registration_date = item.getRegistration_date();
        this.modification_date = item.getModification_date();
        this.price = item.getPrice();
        this.stockQuantity = item.getStockQuantity();
    }
}
