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


    @GetMapping("/order")
    public ResponseEntity<?> totalOrderByUserId(@RequestPart Long userId) {
        List<Order> orderByUserId = orderService.findOrderByUserId(userId);
        List<OrderInfoDto> orders = orderByUserId.stream().map(OrderInfoDto::new).collect(Collectors.toList());
        return new ResponseEntity(orders, HttpStatus.OK);
    }

    @PostMapping("/order")
    public ResponseEntity<?> registerOrder(Long userId, List<OrderItemRegisterDto> itemRegisters) {
        User userById = userService.findUserById(userId);
        if (itemRegisters.size() == 0 || userById == null) {
            return ResponseEntity.ok(null);
        }
        List<OrderItem> orderItems = new ArrayList<>();
        for (OrderItemRegisterDto item : itemRegisters) {
            Item itemById = itemService.findItemById(item.getItemId());
            if (itemById != null && item.getCount() > 0) {
                int itemPrices = itemById.getPrice() * item.getCount();
                orderItems.add(OrderItem.createOrderItem(itemById, itemPrices, item.getCount()));
            }
        }
        Long orders = orderService.createOrders(userId, orderItems);
        return new ResponseEntity(orders, HttpStatus.CREATED);
    }

    @PostMapping("/order/finish")
    public ResponseEntity<?> FinishOrder(Long orderId) {
        orderService.findOrderByUserId(orderId);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @GetMapping("/order/{id}")
    public ResponseEntity<?> findOrderOne(@PathVariable(name = "id") Long id) {
        return new ResponseEntity(HttpStatus.OK);
    }
}
