package passta.paas_ta_back.controller.order.dto;

import lombok.Data;
import passta.paas_ta_back.domain.Order;
import passta.paas_ta_back.domain.OrderStatus;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class OrderInfoDto {
    private Long orderId;
    private Long userId;
    private List<OrderItemsInfoDto> orderItemsInfoDtos;
    private LocalDateTime orderDate;
    private OrderStatus orderStatus;

    public OrderInfoDto(Order order) {
        this.orderId = order.getId();
        this.userId = order.getUser().getId();
        this.orderItemsInfoDtos = order.getOrderItems().stream().map(OrderItemsInfoDto::new).collect(Collectors.toList());
        this.orderDate = order.getOrderDate();
        this.orderStatus = order.getStatus();
    }
}