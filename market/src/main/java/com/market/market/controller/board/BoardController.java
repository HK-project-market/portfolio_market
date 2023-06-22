package com.market.market.controller.board;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.market.market.dto.request.board.BoardReqDto;
import com.market.market.service.BoardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/market")
@RequiredArgsConstructor
public class BoardController {

	private final BoardService boardService;
	
	@PostMapping("/write/board")
	public ResponseEntity<?> insertBoard(@RequestBody BoardReqDto boardReqDto) {
	
		return ResponseEntity.ok().body(boardService.insertBoard(boardReqDto));
	}
}
