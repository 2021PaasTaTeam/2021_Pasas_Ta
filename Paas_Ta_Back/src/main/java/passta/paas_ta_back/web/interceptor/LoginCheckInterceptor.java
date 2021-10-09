package passta.paas_ta_back.web.interceptor;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.servlet.HandlerInterceptor;
import passta.paas_ta_back.web.session.SessionConst;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Arrays;

@Slf4j
public class LoginCheckInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String requestURI = request.getRequestURI();
        HttpSession session = request.getSession(false);
        if (session == null || session.getAttribute(SessionConst.LOGIN_USER) == null){
            //로그인을 안하고 플랫폼 사용하다가 로그인 할때 쿼리 파라미터에 uri 보관 후, redirect
            String[] uriSplit = requestURI.replace("/", "/*").split("/");
            String[] path = Arrays.copyOfRange(uriSplit, 2, uriSplit.length);
            String redirectURL = String.join("",path).replace("*","/");
            response.sendRedirect("/art/member/login?redirectURL=" + redirectURL);
            log.info("interceptor_redirectURL={}",redirectURL);
            return false;
        }
        return true;
    }
}
