package com.market.market.entity;

import java.util.List;

import com.market.market.security.PrincipalUser;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {
	private int userId;
	private String username;
	private String password;
	private String name;
	private String phone;
	private String temperature;
	private String profileImg;
	
	private List<Authority> authorities;
	
	public PrincipalUser toPrincipal() {
		return PrincipalUser.builder()
				.userId(userId)
				.username(username)
				.password(password)
				.name(name)
				.phone(phone)
				.temperature(temperature)
				.authorities(authorities)
				.profileImg(profileImg)
				.build();
	}
	
}
