package com.market.market.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.market.market.dto.response.MainBoardRespDto;

@Mapper
public interface MainBoardRepository {

	public List<MainBoardRespDto> getBoard(String region);
}
