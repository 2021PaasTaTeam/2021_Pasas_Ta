package passta.paas_ta_back.repository.user;

import org.springframework.data.jpa.repository.JpaRepository;
import passta.paas_ta_back.domain.User;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findByEmail(String email);
}
