package passta.paas_ta_back.repository.land;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import passta.paas_ta_back.domain.Item;
import passta.paas_ta_back.domain.Land;
import passta.paas_ta_back.domain.Seat;

import java.util.List;

public interface LandRepository extends JpaRepository<Land, Long> {

    Land findByIdAndSeat(Long id, Seat seat);

    @EntityGraph(attributePaths = {"shop"})
    List<Land> findAll();
}
