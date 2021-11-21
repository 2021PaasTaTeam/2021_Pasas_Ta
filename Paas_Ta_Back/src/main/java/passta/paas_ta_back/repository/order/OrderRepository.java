package passta.paas_ta_back.repository.order;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import passta.paas_ta_back.domain.Order;
import passta.paas_ta_back.domain.OrderStatus;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    @Query("select distinct o from Order o join fetch o.user u where u.id = :id")
    List<Order> findAllByUser(Long id);
    @Query("select distinct o from Order o join fetch o.user u where o.status = :status and u.id = :userId")
    List<Order> findAllByUserAndStatus(Long userId, OrderStatus status);

}
