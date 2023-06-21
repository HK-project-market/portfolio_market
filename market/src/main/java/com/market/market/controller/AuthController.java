package com.market.market.controller;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.market.market.aop.annotation.ValidAspect;
import com.market.market.dto.auth.SignupDto;
import com.market.market.security.jwt.JwtTokenProvider;
import com.market.market.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController{
	private final AuthenticationService authenticationService;
	private final JwtTokenProvider jwtTokenProvider;
	
	@ValidAspect
	@PostMapping("/signup")
	public ResponseEntity<?> signup(@Valid @RequestBody SignupDto signupDto, BindingResult bindingResult) {
		
		authenticationService.checkDuplicatedEmail(signupDto.getUsername());
		authenticationService.checkDuplicatedPhone(signupDto.getPhone());
		authenticationService.signup(signupDto);
		return ResponseEntity.ok().body(true);
	}
	
	@GetMapping("/authenticate")
	public ResponseEntity<?> authenticate(@RequestHeader(value="Authorization") String accessToken) {
		System.out.println(accessToken);
		return ResponseEntity.ok().body(authenticationService.authenticate(accessToken));
	}
}
