package passta.paas_ta_back.controller.home;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttribute;

import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;

@Controller
@RequiredArgsConstructor
@RequestMapping("/art")
public class HomeController {

//    @GetMapping
//    public String home(@SessionAttribute(name = SessionConst.LOGIN_USER, required = false)
//            User user, Model model, HttpServletRequest request){
//
//
//        //세션 없으면 main.html
//        if (user == null){
//            return "main";
//        }
//
//        //세션 유지되면 로그인이 된 loginMain.html 으로 이동
//        LoginUser loginUser = new LoginUser(user.getId(), user.getEmail());
//        model.addAttribute("member",loginUser);
//        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss.sss");
//        model.addAttribute("creationTime", simpleDateFormat.format(request.getSession().getCreationTime()));
//        return "loginMain";
//    }

}
