package passta.paas_ta_back.repository.order;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import passta.paas_ta_back.repository.orderItem.OrderItemRegisterDto;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderRegisterDto {
    @JsonProperty("items")
    private List<OrderItemRegisterDto> orderItemRegisterDtos;
}
