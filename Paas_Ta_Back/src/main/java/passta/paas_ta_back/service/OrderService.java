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
import java.util.Optional;

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

    //주문 상태와 userId로 OrderStatus가 Finish인 Order찾음
    public List<Order> findFinishOrderByUserId(Long userid){
        return orderRepository.findAllByUserAndStatus(userid, OrderStatus.FINISH);
    }

    //주문 상태와 userId로 OrderStatus가 Finish인 Order찾음
    public List<Order> findOrderingOrderByUserId(Long userid){
        return orderRepository.findAllByUserAndStatus(userid, OrderStatus.ORDERING);
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
    public Order findOrderByOrderId(Long orderId){
        Order order = orderRepository.findById(orderId).get();
        if (order == null){
            return null;
        }
        return order;
    }



    @Transactional
    public Order createOrders(Long userId, List<OrderItem> orderItems){
        User userById = userService.findUserById(userId);
        if (userById == null){
            return null;
        }
        Order order = Order.createOrder(userById, orderItems);
        return order;
    }

    @Transactional
    public Order finishOrders(Long orderId){
        Order order = orderRepository.findById(orderId).get();
        if (order == null){
            return null;
        }
        order.finishOrder();
        return order;
    }

    @Transactional
    public boolean cancelOrders(Long orderId){
        Order order = orderRepository.findById(orderId).get();
        if (order == null){
            return false;
        }
        order.cancel();
        orderRepository.delete(order);
        return true;
    }


}
