package passta.paas_ta_back.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
@Data
@AllArgsConstructor
public class DeleteCheckDto{
    /**
     *삭제 확인 용 dto
     * true = 삭제 완료
     * false = 삭제 실패
     */
    private boolean deleteValid;
}