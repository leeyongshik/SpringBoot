package user.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import user.bean.UserDTO;
import user.service.UserService;

@RestController
@CrossOrigin
@RequestMapping(path = "user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping(path = "/getList")
	public List<UserDTO> getList(){
		return userService.getList();
	}
	
	@GetMapping(path = "/write")
	public void write(@ModelAttribute UserDTO userDTO) {
		//DB
		userService.write(userDTO);
	}
	
	@GetMapping(path = "/checkId")
	public boolean checkId(@RequestParam String id) {
		boolean exist = userService.isExistId(id);
		String result = (exist+"");
		System.out.println(result);
		return exist;
	}
	
	@GetMapping(path = "/getUser")
	public Optional<UserDTO> getUser(@RequestParam String id) {
		System.out.println(userService.getUser(id));
		return userService.getUser(id);
	}
	
	@PutMapping(path = "/update")
	public void update(@ModelAttribute UserDTO userDTO) {
		//DB
		userService.update(userDTO);
	}
	
	@DeleteMapping(path = "/delete")
	public void delete(String id) {
		userService.delete(id);
	}
	
	@PostMapping(path = "/search")
	public List<UserDTO> search(@RequestParam Map<String, String> map) { // searchOption, keyword
		System.out.println(map);
		return userService.search(map);
	}
	
	
}
