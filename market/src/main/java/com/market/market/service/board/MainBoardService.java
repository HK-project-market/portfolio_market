package com.market.market.service.board;

import java.util.List;

import org.springframework.stereotype.Service;

import com.market.market.dto.response.MainBoardRespDto;
import com.market.market.repository.MainBoardRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MainBoardService {

	private final MainBoardRepository mainBoardRepository;
	
	public List<MainBoardRespDto> getBoard(String region){
		
//		System.out.println(mainBoardRepository.getBoard());
		return mainBoardRepository.getBoard(region); 
//		return null;
	}
	
//	public List<MainBoardRespDto> getRegionBoard(String region){
//		
//		return mainBoardRepository.getRegionBoard(region);
//	}
}
