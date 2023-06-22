package com.market.market.repository;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BoardRepository {

	public int insertBoard(Map<String, Object> map);
}
