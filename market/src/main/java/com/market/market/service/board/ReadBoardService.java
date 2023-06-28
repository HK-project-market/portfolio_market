package com.market.market.service.board;

import org.springframework.stereotype.Service;

import com.market.market.dto.response.ReadBoardRespDto;
import com.market.market.repository.ReadBoardRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReadBoardService {

	private final ReadBoardRepository readBoardRepository;
	
	public ReadBoardRespDto getBoard(int boardId) {
		
		System.out.println(readBoardRepository.getBoard(boardId));
		return readBoardRepository.getBoard(boardId);
//		return null;
	}
}
