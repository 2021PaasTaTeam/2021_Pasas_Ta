package passta.paas_ta_back.controller.home;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import passta.paas_ta_back.controller.home.dto.SessionDto;
import passta.paas_ta_back.domain.User;
import passta.paas_ta_back.web.session.SessionConst;

import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;

@Slf4j
@CrossOrigin
@RestController
@RequiredArgsConstructor
public class HomeController {

    @GetMapping
    public ResponseEntity<?> get(@SessionAttribute(name = SessionConst.LOGIN_USER, required = false)
                               User user, Model model, HttpServletRequest request){


        //세션 없으면 main.html
        if (user == null){
            return new ResponseEntity(null, HttpStatus.OK);
        }

        //세션 유지되면 로그인이 된 loginMain.html 으로 이동
        return new ResponseEntity(new SessionDto(user), HttpStatus.OK);
    }

}
