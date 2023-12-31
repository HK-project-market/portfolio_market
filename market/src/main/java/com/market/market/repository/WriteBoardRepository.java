package com.market.market.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface WriteBoardRepository {

	public int insertBoard(Map<String, Object> map);
	public List<String> getNationWide();
	public List<String> getNationWideDetail(String nationWide);
	public List<String> getAddress(int nationWideDetailId);
	public List<String> getCategory();
	public int updateProfileImg(List<String> productImgFileName);
}
