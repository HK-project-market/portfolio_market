package com.market.market.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.market.market.dto.request.board.BoardReqDto;
import com.market.market.entity.NationWide;
import com.market.market.repository.BoardRepository;
import com.market.market.security.PrincipalUser;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BoardService {

	private final BoardRepository boardRepository;
	
	public int insertBoard(BoardReqDto boardReqDto) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		PrincipalUser principalUser = (PrincipalUser) authentication.getPrincipal();
		
		Map<String, Object> map = new HashMap<>();
		
		map.put("title", boardReqDto.getTitle());
		map.put("content", boardReqDto.getContent());
		map.put("price", boardReqDto.getPrice());
		map.put("addressId", boardReqDto.getNationWideDetailId());
		map.put("category", boardReqDto.getCategory());
		map.put("userId", principalUser.getUserId());

		boardRepository.insertBoard(map);
		
		return 1;
	}
	
	public List<String> getNationWide() {
//		System.out.println(boardRepository.getNationWide());
		return boardRepository.getNationWide();
//		return null;
	}

	public List<String> getNationWideDetail(String nationWide) {
//		System.out.println(boardRepository.getNationWideDetail(nationWide));
		return boardRepository.getNationWideDetail(nationWide);
//		return null;
	}
	
	public List<String> getAddress(int nationWideDetailId) {
		
		return boardRepository.getAddress(nationWideDetailId);
	}
}
