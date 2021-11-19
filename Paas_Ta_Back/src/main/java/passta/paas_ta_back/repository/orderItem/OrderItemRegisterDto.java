package passta.paas_ta_back.repository.orderItem;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderItemRegisterDto {
    Long itemId;
    int count;
}
