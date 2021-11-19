package passta.paas_ta_back.service.mail;

import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import passta.paas_ta_back.service.mail.dto.MailDto;

@Service
@AllArgsConstructor
public class MailService {
//    private JavaMailSender mailSender;
//    private static final String FROM_ADDRESS = "joohyun8468@gmail.com";
//
//    public void mailSend(MailDto mailDto){
//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setTo(mailDto.getAddress());
//        message.setFrom(MailService.FROM_ADDRESS);
//        message.setSubject(mailDto.getTitle());
//        message.setText(mailDto.getMessage());
//        mailSender.send(message);
//    }
}
