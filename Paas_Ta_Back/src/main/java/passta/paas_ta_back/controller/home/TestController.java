package passta.paas_ta_back.controller.home;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/art")
public class TestController {
    @GetMapping("/gallery")
    public String gallery(){
        return "template_download/gallery";
    }

    @GetMapping("/gallery2")
    public String gallery2(){
        return "redirect:/art/gallery";
    }
}
