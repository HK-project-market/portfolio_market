package com.market.market.dto.auth;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.market.market.entity.User;

import lombok.Data;

@Data
public class SignupDto {
	
	@Pattern(regexp ="^[0-9a-zA-Z]{5,16}$",
			message = "아이디는 영문자, 숫자를 포함하여 5 ~ 16자로 작성하세요.")
	@NotBlank(message = "ID를 입력하세요.")
	private String username;
	
	@Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,16}$", 
			message = "비밀번호는 영문자, 숫자, 특수문자를 포함하여 8 ~ 16자로 작성하세요.")
	@NotBlank(message = "비밀번호를 입력하세요.")
	private String password;
	
	@NotBlank(message = "비밀번호를 입력하세요.")
	private String checkPassword;
	
	@Pattern(regexp = "^[가-힣]{2,6}$",
			message = "이름은 한글로 2 ~ 6자로 작성하세요.")
	@NotBlank(message = "이름을 입력하세요.")
	private String name;
	
	@Pattern(regexp = "[0-9]{11}",
			message = "휴대폰 번호를 다시 확인해 주세요.")
	@NotBlank(message = "휴대폰 번호를 입력하세요.")
	private String phone;
	
	private String temperature;
	
	public User toEntity() {
		return User.builder()
				.username(username)
				.password(new BCryptPasswordEncoder().encode(password))
				.name(name)
				.phone(phone)
				.temperature(temperature)
				.build();
	}
}
