package user.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import user.bean.UserDTO;
import user.service.UserService;

@RestController
@CrossOrigin
@RequestMapping(value = "user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping(value = "/getList")
	public List<UserDTO> getUserList(){
		return userService.getList();
	}
	
	@PostMapping(value = "/write")
	public void write(@ModelAttribute UserDTO userDTO) {
		//DB
		userService.write(userDTO);
	}
	
	@GetMapping(value = "/checkId")
	public boolean checkId(@RequestParam String id) {
		boolean exise = userService.isExistId(id);
		String result = (exise+"");
		System.out.println(result);
		return exise;
	}
	
	@PostMapping(value = "/getUser")
	public Optional<UserDTO> getUser(@RequestParam String id) {
		
		return userService.getUser(id);
	}
	
	@GetMapping(value = "/delete")
	public void delete(String id) {
		userService.delete(id);
	}
	
	/*
	@GetMapping(value = "/writeForm")
	public String writeFrom() {
		return "user/writeForm";
	}

	@PostMapping(value = "/write")
	public void write(@ModelAttribute UserDTO userDTO) {
		//DB
		userService.write(userDTO);
	}
	
	@PostMapping(value = "/checkId")
	public String checkId(@RequestParam String id) {
		boolean exise = userService.isExistId(id);
		String result = (exise+"");
		return result;
	}
	
	@GetMapping(value = "/list")
	public String list() {
		return "user/list";
	}
	
	@PostMapping(value = "/getList")
	@CrossOrigin
	public List<UserDTO> getUserList(){
		return userService.getList();
	}
	
	@GetMapping(value = "/updateForm")
	public String updateFrom() {
		return "user/updateForm";
	}
	
	@PostMapping(value = "/getUser")
	public Optional<UserDTO> getUser(@RequestParam String id) {
		
		return userService.getUser(id);
	}
	
	@PostMapping(value = "/update")
	public void update(@ModelAttribute UserDTO userDTO) {
		//DB
		userService.update(userDTO);
	}
	
	@GetMapping(value = "/deleteForm")
	public String delete() {
		return "user/deleteForm";
	}
	
	@PostMapping(value = "/delete")
	public void delete(String id) {
		userService.delete(id);
	}
	
	@PostMapping(value = "/search")
	public List<UserDTO> search(@RequestParam Map<String, String> map) { // searchOption, keyword
		return userService.search(map);
	}
	*/
	
	
}
