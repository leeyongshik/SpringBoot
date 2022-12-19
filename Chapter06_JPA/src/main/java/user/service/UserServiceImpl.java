package user.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import user.bean.UserDTO;
import user.dao.UserDAO;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserDAO userDAO;

	@Override
	public void write(UserDTO userDTO) {
		//DB
		//id 컬럼이 primary key로 설정되어 있기 떄문에 똑같은 아이디가 없으면 insert가 수행되고,
		// 아이디가 있으면 update로 수행된다.
		userDAO.save(userDTO);
		
		
	}

	@Override
	public boolean isExistId(String id) {
		Optional<UserDTO> userDTO = userDAO.findById(id); 
		System.out.println(userDTO); //값이 없으면 Optional.empty 출력된다.
		
		if(userDTO.isPresent()) // 값이 없으면 false
			return true;
		else return false;
	}

	@Override
	public List<UserDTO> getList() {

		return userDAO.findAll();
		
	}

	@Override
	public Optional<UserDTO> getUser(String id) {
		//DB
		return userDAO.findById(id);
	}

	@Override
	public void update(UserDTO userDTO) {
		userDAO.save(userDTO);
		
	}

	@Override
	public void delete(String id) {
		
		//deleteById(id) 는 내부적으로 findById(id)를 수행하고 delete를 수행한다.
		//만약 아이디가 없으면 EmptyResultDataAccessException이 발생한다.
		
		//delete() 는 findById(id) 수행하지 않고, 바로 delete를 수행한다.
		userDAO.deleteById(id);
		
	}

}
