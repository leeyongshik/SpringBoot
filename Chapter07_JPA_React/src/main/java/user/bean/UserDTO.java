package user.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter@Getter
@Table(name = "usertable")
public class UserDTO {
	
	@Column(name="name", length = 30, nullable = false)
	private String name;
	
	@Id
	@Column(name = "id", length = 30)
	private String id;
	
	@Column(name = "pwd", length = 30, nullable = false)
	private String pwd;
}
