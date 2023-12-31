package com.market.market.controller.board;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.market.market.aop.annotation.ValidAspect;
import com.market.market.dto.request.board.WriteBoardReqDto;
import com.market.market.service.board.WriteBoardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/market")
@RequiredArgsConstructor
public class WriteBoardController {

	private final WriteBoardService boardService;
	
	@ValidAspect
	@PostMapping("/write/board")
	public ResponseEntity<?> insertBoard(@Valid @RequestBody WriteBoardReqDto boardReqDto, BindingResult bindingResult) {

		return ResponseEntity.ok().body(boardService.insertBoard(boardReqDto));
	}
	
	@GetMapping("/region/nationwide")
	public ResponseEntity<?> getRegionNationWide() {
		
		return ResponseEntity.ok().body(boardService.getNationWide());
	}

	@GetMapping("/region/detail")
	public ResponseEntity<?> getRegionDetail(String nationWide) {
		
		return ResponseEntity.ok().body(boardService.getNationWideDetail(nationWide));
	}
	
	@GetMapping("/address")
	public ResponseEntity<?> getAddress(int nationWideDetailId){
		
		return ResponseEntity.ok().body(boardService.getAddress(nationWideDetailId));
	}
	
	@GetMapping("/category")
	public ResponseEntity<?> getCategory() {
		
		return ResponseEntity.ok().body(boardService.getCategory());
	}
	
	@PostMapping("/img/test")
	public ResponseEntity<?> updateProfile(@RequestParam("productImgFiles") List<MultipartFile> productImgFiles) {
//		System.out.println("controller: " + productImgFiles);
		
		return ResponseEntity.ok(boardService.updateProfileImg(productImgFiles));
//		return null;
	}
}
