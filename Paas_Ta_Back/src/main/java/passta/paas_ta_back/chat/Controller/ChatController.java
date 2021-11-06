package passta.paas_ta_back.chat.Controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;
import passta.paas_ta_back.chat.Model.Message;

@RestController
public class ChatController {


    @MessageMapping("/chat")
    @SendTo("/topic/roomId")
    public Message boradCast(Message message){
        return message;
    }
}
