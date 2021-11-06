package passta.paas_ta_back.controller.order.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import passta.paas_ta_back.domain.Order;
import passta.paas_ta_back.domain.OrderStatus;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class OrderInfoDto {
    private Long orderId;
    private String userName;
    @JsonProperty("orderItems")
    private List<OrderItemsInfoDto> orderItemsInfoDtos;
    private LocalDateTime orderDate;
    private OrderStatus orderStatus;

    public OrderInfoDto(Order order) {
        this.orderId = order.getId();
        this.userName = order.getUser().getName();
        this.orderItemsInfoDtos = order.getOrderItems().stream().map(OrderItemsInfoDto::new).collect(Collectors.toList());
        this.orderDate = order.getOrderDate();
        this.orderStatus = order.getStatus();
    }
}