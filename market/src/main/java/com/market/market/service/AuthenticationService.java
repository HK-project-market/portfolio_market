package com.market.market.service;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.market.market.dto.auth.LoginReqDto;
import com.market.market.dto.auth.SignupDto;
import com.market.market.entity.Authority;
import com.market.market.entity.User;
import com.market.market.exception.CustomException;
import com.market.market.exception.ErrorMap;
import com.market.market.repository.UserRepository;
import com.market.market.security.PrincipalUser;
import com.market.market.security.jwt.JwtTokenProvider;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService implements UserDetailsService {
	private final UserRepository userRepository;
	private final AuthenticationManagerBuilder authenticationManagerBuilder;
	private final JwtTokenProvider jwtTokenProvider;
	
	public void checkDuplicatedUsername(String username) {
		if(userRepository.findUserByUsername(username) != null) {
			throw new CustomException("Duplicated Email", 
					ErrorMap.builder().put("username", "사용중인 이메일입니다.").build());
		}
	}
	
	public void checkDuplicatedPhone(String phone) {
		if(userRepository.findUserByPhone(phone) != null) {
			throw new CustomException("Duplicated Phone", 
					ErrorMap.builder().put("phone", "이미 가입된 번호입니다.").build());
		}
	}
	
	public void signup(SignupDto signupDto) {
		
		if(misMatchPassword(signupDto)) {
			throw new CustomException("error", 
					ErrorMap.builder().put("password", "비밀번호가 일치하지 않습니다.").build());
		}
		
		User userEntity = signupDto.toEntity();
		
		userRepository.saveUser(userEntity);
		
		userRepository.saveAuthority(Authority.builder()
				.userId(userEntity.getUserId())
				.roleId(2)
				.build());
	}
	
	public boolean misMatchPassword(SignupDto signupDto) {
		return !signupDto.getPassword().equals(signupDto.getCheckPassword());
	}
	
	public String signin(LoginReqDto loginReqDto) {
		UsernamePasswordAuthenticationToken authenticationToken =
				new UsernamePasswordAuthenticationToken(loginReqDto.getUsername(), loginReqDto.getPassword());

		Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
		
		return jwtTokenProvider.generateToken(authentication);
	}
	
	public PrincipalUser getUserInfo(String accessToken) {
		String username = jwtTokenProvider.getClaims(jwtTokenProvider.getToken(accessToken)).get("username").toString();
		User userEntity = userRepository.findUserByUsername(username);
		
		return userEntity.toPrincipal();
				
	}
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User userEntity = userRepository.findUserByUsername(username);
		
		return userEntity.toPrincipal();
	}
	
	public boolean authenticate(String accessToken) {
		return jwtTokenProvider.validateToken(jwtTokenProvider.getToken(accessToken));
	}

	public int userDelete(User user) {
		userRepository.userDelete(user);
		return userRepository.userDelete(user);
	}
}
