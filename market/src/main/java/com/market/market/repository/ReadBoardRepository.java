package com.market.market.repository;

import org.apache.ibatis.annotations.Mapper;

import com.market.market.dto.response.ReadBoardRespDto;

@Mapper
public interface ReadBoardRepository {

	public ReadBoardRespDto getBoard(int boardId);
}
