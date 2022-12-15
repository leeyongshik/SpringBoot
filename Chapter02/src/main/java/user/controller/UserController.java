package user.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import user.bean.UserDTO;
import user.service.UserService;

@Controller
@RequestMapping(value = "user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping(value = "/writeForm")
	public String writeFrom() {
		return "user/writeForm";
	}

	@PostMapping(value = "/write")
	@ResponseBody //리턴값이 없을때 xml로 가지 않고 돌아가도록 설정
	public void write(@ModelAttribute UserDTO userDTO) {
		//DB
		userService.write(userDTO);
	}
	
	@PostMapping(value = "/checkId")
	@ResponseBody
	public String checkId(@RequestParam String id) {
		System.out.println(id);
		boolean exise = userService.isExistId(id);
		String result = (exise+"");
		System.out.println(exise);
		return result;
	}
	
	@GetMapping(value = "/list")
	public String list() {
		return "user/list";
	}
	
	@PostMapping(value = "/getList")
	@ResponseBody // list를 JSON으로 변환
	public List<UserDTO> getUserList(){
		return userService.getList();
	}
	
	@GetMapping(value = "/updateForm")
	public String updateFrom() {
		return "user/updateForm";
	}
	
	@PostMapping(value = "/getUser")
	@ResponseBody
	public UserDTO getUser(@RequestParam String id) {
		
		return userService.getUser(id);
	}
	
	@PostMapping(value = "/update")
	@ResponseBody //리턴값이 없을때 xml로 가지 않고 돌아가도록 설정
	public void update(@ModelAttribute UserDTO userDTO) {
		//DB
		userService.update(userDTO);
	}
	
	@GetMapping(value = "/deleteForm")
	public String delete() {
		return "user/deleteForm";
	}
}
