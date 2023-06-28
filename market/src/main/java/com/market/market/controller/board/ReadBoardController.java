package com.market.market.controller.board;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.market.market.service.board.ReadBoardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/market")
@RequiredArgsConstructor
public class ReadBoardController {

	private final ReadBoardService readBoardService;
	
	@GetMapping("/board/{boardId}")
	public ResponseEntity<?> getBoard(@PathVariable int boardId) {
		
		return ResponseEntity.ok().body(readBoardService.getBoard(boardId));
	}
}
