package passta.paas_ta_back.repository.orderItem;

import org.springframework.data.jpa.repository.JpaRepository;
import passta.paas_ta_back.domain.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}
