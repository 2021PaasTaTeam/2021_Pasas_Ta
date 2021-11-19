package passta.paas_ta_back.domain;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue
    @Column(name = "orders_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<OrderItem> orderItems = new ArrayList<>();

    private LocalDateTime orderDate; //주문시간

    @Enumerated(EnumType.STRING)
    private OrderStatus status; //주문상태 [ORDER, CANCEL]

    public void setUser(User user) {
        this.user = user;
        user.getOrders().add(this);
    }

    public void addOrderItem(OrderItem orderItem) {
        orderItems.add(orderItem);
        orderItem.setOrder(this);
    }

    public static Order createOrder(User user, List<OrderItem> orderItems) {
        Order order = new Order();
        order.setUser(user);
        for (OrderItem orderItem : orderItems) {
            order.addOrderItem(orderItem);
        }
        order.orderDate = LocalDateTime.now();
        order.status = OrderStatus.ORDERING;
        return order;
    }




    /**
     * 비즈니스 로직
     * <p>
     * 주문취소
     */
    public void cancel() {
        this.status = OrderStatus.CANCEL;
        for (OrderItem orderitem : orderItems) {
            orderitem.cancel();
        }
    }

    /**
     * 주문을 완료
     */
    public void finishOrder(){
        this.status=OrderStatus.FINISH;
    }
    /**
     * 전체 주문 가격 조회
     */
    public int getTotalPrice() {
        int totalPrice = 0;
        for (OrderItem orderItem : orderItems) {
            totalPrice += orderItem.getTotalPrice();
        }
        return totalPrice;
    }


}
