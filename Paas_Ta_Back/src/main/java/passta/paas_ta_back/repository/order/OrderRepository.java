package passta.paas_ta_back.repository.order;

import org.springframework.data.jpa.repository.JpaRepository;
import passta.paas_ta_back.domain.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
