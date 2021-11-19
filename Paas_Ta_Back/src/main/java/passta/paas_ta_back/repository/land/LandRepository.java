package passta.paas_ta_back.repository.land;

import org.springframework.data.jpa.repository.JpaRepository;
import passta.paas_ta_back.domain.Item;
import passta.paas_ta_back.domain.Land;
import passta.paas_ta_back.domain.Seat;

import java.util.List;

public interface LandRepository extends JpaRepository<Land, Long> {

    Land findByIdAndSeat(Long id, Seat seat);
}
