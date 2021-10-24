package passta.paas_ta_back.controller.user;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import passta.paas_ta_back.controller.dto.DeleteCheckDto;
import passta.paas_ta_back.controller.shop.dto.ShopInfoDto;
import passta.paas_ta_back.controller.user.dto.UserInfoDto;
import passta.paas_ta_back.domain.Shop;
import passta.paas_ta_back.domain.User;
import passta.paas_ta_back.repository.user.*;
import passta.paas_ta_back.service.UserService;
import passta.paas_ta_back.web.session.SessionConst;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@CrossOrigin
@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> loginOk(@RequestBody LoginDto loginDto,
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
            log.info("session login info = ",userInfoSession);
            return new ResponseEntity(userInfoSession, HttpStatus.OK);
        } else {
            return new ResponseEntity(null, HttpStatus.OK);
        }
    }

    @PostMapping("/logout")
    public String logout(HttpServletRequest request){
        HttpSession session = request.getSession();
        if (session != null){
            session.invalidate(); // 세션 제거
        }
        return "red";
    }

    @GetMapping("/user")
    public ResponseEntity<?> totalUserView(){
        List<UserInfoDto> userInfoDtoList = userService.users().stream().map(UserInfoDto::new).collect(Collectors.toList());
        return new ResponseEntity(userInfoDtoList, HttpStatus.OK);
    }

    @PostMapping("/user")
    public ResponseEntity<?> registerUser(@RequestBody JoinDto joinDto) {
        User joinUser = userService.join(joinDto);
        if (joinUser == null) {
            return new ResponseEntity(null, HttpStatus.OK);
        }
        return new ResponseEntity(new UserInfoDto(joinUser), HttpStatus.CREATED);

    }

    @GetMapping("/user/{id}")
    public ResponseEntity<?> findUserOne(@PathVariable(name = "id") Long id){
        User userById = userService.findUserById(id);
        if (userById == null) {
            return new ResponseEntity(null, HttpStatus.OK);
        }
        return new ResponseEntity(new UserInfoDto(userById), HttpStatus.OK);
    }

    @PostMapping("/user/{id}")
    public ResponseEntity<?> modifyUser(@PathVariable(name = "id") Long id, @RequestBody UserModifyDto userModifyDto){
        User changeUser = userService.changeUserInfoById(id, userModifyDto);
        if (changeUser == null) {
            return new ResponseEntity(null, HttpStatus.OK);
        }
        return new ResponseEntity(new UserInfoDto(changeUser), HttpStatus.OK);
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable(name = "id") Long id, @RequestBody DeleteDto deleteDto){
        Boolean deleteCheck = userService.deleteUserById(id, deleteDto);
        System.out.println("delsds"+ deleteCheck);
        if (deleteCheck == false){
            return new ResponseEntity(null, HttpStatus.OK);
        }
        return new ResponseEntity(new DeleteCheckDto(deleteCheck),HttpStatus.OK);
    }

    @GetMapping("/user/{id}/shop")
    public ResponseEntity<?> myShopsList(@PathVariable(name = "id") Long id){
        List<Shop> shopByUserId = userService.findShopByUserId(id);
        if (shopByUserId == null){
            return ResponseEntity.ok(null);
        }
        List<ShopInfoDto> collect = shopByUserId.stream().map(ShopInfoDto::new).collect(Collectors.toList());
        return ResponseEntity.ok(collect);
    }
}
