package bitcamp.java93.control.json;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SchduleControl {
  
  @Scheduled(cron="*/2 * * * * *")
  public void Hello() {
    System.out.println("Hello, World!");
  }
}
