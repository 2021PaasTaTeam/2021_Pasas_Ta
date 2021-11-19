package passta.paas_ta_back;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;

@SpringBootApplication
public class PaasTaBackApplication {
    public static void main(String[] args) {
        SpringApplication.run(PaasTaBackApplication.class, args);
    }

}
