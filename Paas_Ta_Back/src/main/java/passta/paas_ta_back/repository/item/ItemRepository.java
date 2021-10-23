package passta.paas_ta_back.repository.item;

import org.springframework.data.jpa.repository.JpaRepository;
import passta.paas_ta_back.domain.Item;

import java.util.List;

public interface ItemRepository extends JpaRepository<Item, Long> {
    List<Item> findByNameAndShop(String itemName, String registrationNum);
}
