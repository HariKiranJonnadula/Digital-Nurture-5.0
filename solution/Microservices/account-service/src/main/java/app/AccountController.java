package app;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AccountController {

    @GetMapping("/accounts/{number}")
    public Map<String, Object> getAccountDetails(@PathVariable("number") String number) {
        Map<String, Object> details = new HashMap<>();
        details.put("accountNumber", number);
        details.put("accountHolder", "Hari Kiran");
        details.put("accountType", "Savings");
        details.put("balance", 45000.0);
        details.put("currency", "INR");
        return details;
    }
}
