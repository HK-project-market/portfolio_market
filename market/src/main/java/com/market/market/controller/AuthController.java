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
import com.market.market.dto.auth.LoginReqDto;
import com.market.market.dto.auth.SignupDto;
import com.market.market.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController{
	private final AuthenticationService authenticationService;
	
	@ValidAspect
	@PostMapping("/signup")
	public ResponseEntity<?> signup(@Valid @RequestBody SignupDto signupDto, BindingResult bindingResult) {
		
		authenticationService.checkDuplicatedUsername(signupDto.getUsername());
		authenticationService.checkDuplicatedPhone(signupDto.getPhone());
		authenticationService.signup(signupDto);
		return ResponseEntity.ok().body(true);
	}
	
	@ValidAspect
	@PostMapping("/login")
	public ResponseEntity<?> login(@Valid @RequestBody LoginReqDto loginReqDto, BindingResult bindingResult) {
		return ResponseEntity.ok(authenticationService.signin(loginReqDto));
	}
	
	@GetMapping("/authenticate")
	public ResponseEntity<?> authenticate(@RequestHeader(value="Authorization") String accessToken) {
		
		return ResponseEntity.ok().body(authenticationService.authenticate(accessToken));
	}
	
	@GetMapping("/userInfo")
	public ResponseEntity<?> getUserInfo(@RequestHeader(value="Authorization") String accessToken) {
		return ResponseEntity.ok().body(authenticationService.getUserInfo(accessToken));
	}
	
}
