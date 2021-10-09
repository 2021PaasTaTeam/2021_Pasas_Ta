package passta.paas_ta_back.controller.user;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import passta.paas_ta_back.domain.User;
import passta.paas_ta_back.repository.user.JoinDto;
import passta.paas_ta_back.repository.user.LoginDto;
import passta.paas_ta_back.repository.user.UserInfoDto;
import passta.paas_ta_back.repository.user.UserRepository;
import passta.paas_ta_back.service.user.UserService;
import passta.paas_ta_back.web.session.SessionConst;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.stream.Collectors;


@Slf4j
@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

//    @GetMapping("/login")
//    public String userLogin() {
//        return "login/login";
//    }

    @PostMapping("/login")
    public ResponseEntity<?> loginOk(@RequestBody LoginDto loginDto,
                                     HttpSession httpSession,
                                     HttpServletRequest request) {
        User loginUser = userService.login(loginDto);
        if (loginUser != null) {
            //로그인 성공 처리
            log.info("loginForm={}", loginDto);
            //세션이 있는 경우, 세션 변환, 아닐 시 신규 세션 생성
            UserInfoDto userInfoSession = new UserInfoDto(loginUser);
            HttpSession session = request.getSession();
            session.setAttribute(SessionConst.LOGIN_USER, userInfoSession);
            session.setMaxInactiveInterval(120);
            return new ResponseEntity(userInfoSession, HttpStatus.OK);
        } else {
            return new ResponseEntity(null, HttpStatus.OK);
        }
    }


    @PostMapping("/join")
    public ResponseEntity<?> joinOk(@RequestBody JoinDto joinDto) {
        User joinUser = userService.join(joinDto);
        if (joinUser == null) {
            return new ResponseEntity(null, HttpStatus.OK);
        }
        return new ResponseEntity(new UserInfoDto(joinUser), HttpStatus.CREATED);

    }

//    @PostMapping("/logout")
//    public String logout(HttpServletRequest request){
//        HttpSession session = request.getSession();
//        if (session != null){
//            session.invalidate(); // 세션 제거
//        }
//        return "redirect:/art";
//    }

}
