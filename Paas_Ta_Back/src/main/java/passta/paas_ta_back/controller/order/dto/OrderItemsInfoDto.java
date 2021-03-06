package passta.paas_ta_back.controller.order.dto;

import lombok.Data;
import passta.paas_ta_back.domain.OrderItem;

@Data
public class OrderItemsInfoDto {
    private String itemName;
    private int itemPrice;
    private int itemCount;
    public OrderItemsInfoDto(OrderItem orderItem) {
        this.itemName = orderItem.getItem().getName();
        this.itemPrice = orderItem.getOrderPrice();
        this.itemCount = orderItem.getCount();
    }
}
