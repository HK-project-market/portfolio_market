package com.market.market.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.market.market.entity.NationWide;

@Mapper
public interface BoardRepository {

	public int insertBoard(Map<String, Object> map);
	public List<String> getNationWide();
	public List<String> getNationWideDetail(String nationWide);
	public List<String> getAddress(int nationWideDetailId);
}
