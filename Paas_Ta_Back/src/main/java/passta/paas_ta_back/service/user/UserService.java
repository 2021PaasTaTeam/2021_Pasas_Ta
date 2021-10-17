package passta.paas_ta_back.service.user;


import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import passta.paas_ta_back.domain.User;
import passta.paas_ta_back.repository.user.DeleteDto;
import passta.paas_ta_back.repository.user.JoinDto;
import passta.paas_ta_back.repository.user.LoginDto;
import passta.paas_ta_back.repository.user.UserRepository;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User login(LoginDto loginDto) {
        List<User> info = userRepository.findByEmail(loginDto.getEmail());
        if (info.isEmpty() || !info.get(0).getPassword().equals(loginDto.getPassword())) {
            return null;
        }
        return info.get(0);
    }

    @Transactional
    public User join(JoinDto joinDto) {
        boolean check = alreadyLoginInfo(joinDto);
        if (check) {
            User save_user = userRepository.save(
                    new User(joinDto.getName(),
                            joinDto.getEmail(),
                            joinDto.getPassword(),
                            joinDto.getAddress(),
                            joinDto.getType()));
            return save_user;
        }
        return null;
    }

    @Transactional
    public void delete(DeleteDto deleteDto) {
//        userRepository.deleteById();
    }

    // true = 가입 정보가 db에 없는 경우, false = 가입 정보가 있는 경우
    private boolean alreadyLoginInfo(JoinDto joinDto) {
        List<User> findByEmail = userRepository.findByEmail(joinDto.getEmail());
        return findByEmail.isEmpty();
    }
}
