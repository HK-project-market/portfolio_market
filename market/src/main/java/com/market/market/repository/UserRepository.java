package com.market.market.repository;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.market.market.entity.Authority;
import com.market.market.entity.User;

@Mapper
public interface UserRepository {
	public User findUserByEmail(String username);
	public User findUserByPhone(String phone);
	public User findUserByNameAndPhone(Map<String, Object> map);
	public int saveUser(User user);
	public int saveAuthority(Authority authority);
	public int updateProvider(User user);
	public int updatePassword(User user);
	public int userDelete(User user);
	public int updateProfileImg(User user);
}
