package com.market.market.controller.board;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.market.market.service.board.MainBoardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/main")
@RequiredArgsConstructor
public class MainBoardController {

	private final MainBoardService mainBoardService;
	
	@GetMapping("/board")
	public ResponseEntity<?> getBoard(String region) {
		return ResponseEntity.ok().body(mainBoardService.getBoard(region));
	}
	

}
