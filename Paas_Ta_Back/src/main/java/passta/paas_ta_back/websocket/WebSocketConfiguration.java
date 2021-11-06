package passta.paas_ta_back.websocket;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.client.WebSocketClient;
import org.springframework.web.socket.client.standard.StandardWebSocketClient;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
import org.springframework.web.socket.messaging.WebSocketStompClient;

import javax.websocket.ContainerProvider;
import javax.websocket.WebSocketContainer;

@Configuration
@EnableWebSocket
public class WebSocketConfiguration implements WebSocketConfigurer {

    public static final int MAX_TEXT_MESSAGE_SIZE = 2048000; // 2 Megabytes.
    public static final int BUFFER_SIZE = MAX_TEXT_MESSAGE_SIZE * 5;

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {

        registry.addHandler(new SocketHandler(), "/videochat").setAllowedOrigins("*");
        WebSocketContainer container = ContainerProvider.getWebSocketContainer();
        container.setDefaultMaxBinaryMessageBufferSize(BUFFER_SIZE);
        container.setDefaultMaxTextMessageBufferSize(BUFFER_SIZE);
        WebSocketClient transport = new StandardWebSocketClient(container);
        WebSocketStompClient stompClient = new WebSocketStompClient(transport);
    }




}
