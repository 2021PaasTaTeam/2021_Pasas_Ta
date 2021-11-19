package passta.paas_ta_back.repository.shop;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import passta.paas_ta_back.domain.Shop;

import java.util.List;

public interface ShopRepository extends JpaRepository<Shop, Long> {

    List<Shop> findByRegistrationNum(String registrationNum);

    @Query("select distinct s from Shop s join fetch s.user u where u.email = :email")
    List<Shop> findAllWithUser(String email);
}
