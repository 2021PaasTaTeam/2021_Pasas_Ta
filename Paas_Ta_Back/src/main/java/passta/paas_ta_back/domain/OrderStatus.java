package passta.paas_ta_back.domain;

public enum OrderStatus {
    //주문중(장바구니에 넣고 있는 중), 주문을 취소하고 다시 원상복구, 주문완료
    ORDERING, CANCEL, FINISH
}
