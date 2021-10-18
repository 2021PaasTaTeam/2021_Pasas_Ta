package passta.paas_ta_back.service.user;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import passta.paas_ta_back.domain.User;
import passta.paas_ta_back.repository.user.*;

import java.util.List;

@Slf4j
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

    // true = 가입 정보가 db에 없는 경우, false = 가입 정보가 있는 경우
    private boolean alreadyLoginInfo(JoinDto joinDto) {
        List<User> findByEmail = userRepository.findByEmail(joinDto.getEmail());
        return findByEmail.isEmpty();
    }

    // 유저 정보 수정 메소드
    @Transactional
    public User changeUserInfoById(Long id, ModifyDto modifyDto){
        User user = userRepository.findById(id).get();
        if (user == null){
            return null;
        }
        return user.changeUserInfo(modifyDto);
    }

    public List<User> users(){
        return userRepository.findAll();
    }

    public User findUserById(Long id){
        return userRepository.findById(id).orElse(null);
    }

    @Transactional
    public boolean deleteUserById(Long id, DeleteDto deleteDto) {
        if(deleteDto.getPassword() == null){
            return false;
        }
        User userById = findUserById(id);
        if (userById == null || !userById.getPassword().equals(deleteDto.getPassword())){
            return false;
        }
        userRepository.deleteById(id);
        return true;
    }
}
