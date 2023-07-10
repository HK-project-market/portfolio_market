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
//		System.out.println(mainBoardService.getBoard());
		return ResponseEntity.ok().body(mainBoardService.getBoard(region));
//		return null;
	}
	
//	@GetMapping("/board/region")
//	public ResponseEntity<?> getRegionBoard(String region) {
//	
//		System.out.println(region);
//		return ResponseEntity.ok().body(mainBoardService.getRegionBoard(region));
//	}
}
