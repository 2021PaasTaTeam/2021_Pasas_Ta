package passta.paas_ta_back.controller.order;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import passta.paas_ta_back.controller.order.dto.OrderInfoDto;
import passta.paas_ta_back.domain.Item;
import passta.paas_ta_back.domain.Order;
import passta.paas_ta_back.domain.OrderItem;
import passta.paas_ta_back.domain.User;
import passta.paas_ta_back.repository.order.OrderRegisterDto;
import passta.paas_ta_back.repository.orderItem.OrderItemRegisterDto;
import passta.paas_ta_back.service.ItemService;
import passta.paas_ta_back.service.OrderService;
import passta.paas_ta_back.service.UserService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@CrossOrigin
@RestController
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;
    private final UserService userService;
    private final ItemService itemService;


    @GetMapping("/orders/{userId}")
    public ResponseEntity<?> totalOrderByUserId(@PathVariable(name = "userId") Long userId) {
        List<Order> orderByUserId = orderService.findFinishOrderByUserId(userId);
        List<OrderInfoDto> orders = orderByUserId.stream().map(OrderInfoDto::new).collect(Collectors.toList());
        return new ResponseEntity(orders, HttpStatus.OK);
    }

    @PostMapping("/order/{userId}/register")
    public ResponseEntity<?> registerOrder(@PathVariable(name = "userId") Long userId, @RequestBody OrderRegisterDto orderRegisterDto) {
        User userById = userService.findUserById(userId);
        log.info("orderRegisterDto={}",orderRegisterDto);
        if (orderRegisterDto.getOrderItemRegisterDtos().size() == 0 || userById == null) {
            return ResponseEntity.ok(null);
        }
        List<OrderItem> orderItems = new ArrayList<>();
        for (OrderItemRegisterDto item : orderRegisterDto.getOrderItemRegisterDtos()) {
            Item itemById = itemService.findItemById(item.getItemId());
            if (itemById != null && item.getCount() > 0) {
                int itemPrices = itemById.getPrice() * item.getCount();
                OrderItem orderItem = OrderItem.createOrderItem(itemById, itemPrices, item.getCount());
                if(orderItem == null){
                    return ResponseEntity.ok("Lack of Stock");
                }
                orderItems.add(orderItem);
            }
        }
        Order order = orderService.createOrders(userId, orderItems);
        return new ResponseEntity(new OrderInfoDto(order), HttpStatus.CREATED);
    }

    @PostMapping("/order/{orderId}/finish")
    public ResponseEntity<?> FinishOrder(@PathVariable(name = "orderId") Long orderId) {
        Order order = orderService.finishOrders(orderId);
        return new ResponseEntity(new OrderInfoDto(order), HttpStatus.CREATED);
    }

    @GetMapping("/order/{id}")
    public ResponseEntity<?> findOrderOne(@PathVariable(name = "id") Long id) {
        return new ResponseEntity(HttpStatus.OK);
    }
}
