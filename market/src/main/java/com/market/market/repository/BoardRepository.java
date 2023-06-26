package com.market.market.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.market.market.entity.RegionCategory;

@Mapper
public interface BoardRepository {

	public int insertBoard(Map<String, Object> map);
	public List<String> getRegionNationWide();
	public List<String> getRegionDetail(String nationWide);
}
