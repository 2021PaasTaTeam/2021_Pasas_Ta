package passta.paas_ta_back.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import passta.paas_ta_back.domain.Order;
import passta.paas_ta_back.domain.OrderItem;
import passta.paas_ta_back.domain.OrderStatus;
import passta.paas_ta_back.domain.User;
import passta.paas_ta_back.repository.order.OrderRepository;
import passta.paas_ta_back.repository.user.UserRepository;

import java.util.List;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class OrderService {
    @Autowired
    OrderRepository orderRepository;

    @Autowired
    UserService userService;

    public List<Order> orders(){
        return orderRepository.findAll();
    }

    public List<Order> findOrderByUserId(Long userid){
        return orderRepository.findAllByUser(userid);
    }

    public List<Order> findFinishOrderByUserId(Long userid){
        return orderRepository.findAllByUserAndStatus(userid, OrderStatus.FINISH);
    }

//    @Transactional
//    public boolean deleteOrderById(Long id) {
//        Order orderById = findOrderById(id);
//        if (orderById == null){
//            return false;
//        }
//        orderRepository.deleteById(id);
//        return true;
//    }

    @Transactional
    public Order createOrders(Long userId, List<OrderItem> orderItems){
        User userById = userService.findUserById(userId);
        Order order = Order.createOrder(userById, orderItems);
        return order;
    }

    @Transactional
    public Order finishOrders(Long orderId){
        Order order = orderRepository.findById(orderId).get();
        order.finishOrder();
        return order;
    }


}
