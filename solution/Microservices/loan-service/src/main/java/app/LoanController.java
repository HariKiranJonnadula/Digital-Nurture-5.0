package app;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class LoanController {

    @GetMapping("/loans/{number}")
    public Map<String, Object> getLoanDetails(@PathVariable("number") String number) {
        Map<String, Object> details = new HashMap<>();
        details.put("loanNumber", number);
        details.put("holderName", "Hari Kiran");
        details.put("loanAmount", 500000.0);
        details.put("interestRate", 8.5);
        details.put("durationYears", 5);
        details.put("loanType", "Home Loan");
        return details;
    }
}
