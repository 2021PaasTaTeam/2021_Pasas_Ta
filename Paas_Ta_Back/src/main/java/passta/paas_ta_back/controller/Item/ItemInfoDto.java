package passta.paas_ta_back.controller.Item;

import lombok.Data;
import passta.paas_ta_back.domain.Item;
import passta.paas_ta_back.domain.ItemImages;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class ItemInfoDto {
    private Long itemId;
    private String name;
    private String content;
    private LocalDateTime registration_date;
    private LocalDateTime modification_date;
    private List<String> storeFileName;
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
        this.storeFileName = item.getItemImages().stream().map(ItemImages::getStoreFileName).collect(Collectors.toList());
    }
}
