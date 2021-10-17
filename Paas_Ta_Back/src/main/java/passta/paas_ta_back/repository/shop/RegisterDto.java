package passta.paas_ta_back.repository.shop;

import lombok.Data;

import java.sql.Blob;

@Data
public class RegisterDto {
    private String registrationNum;
    private String email;
    private String name;
    private String phone;
    private String address;
    private Blob images;

    public RegisterDto(String registrationNum, String email, String name, String phone, String address, Blob images) {
        this.registrationNum = registrationNum;
        this.email = email;
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.images = images;
    }
}
