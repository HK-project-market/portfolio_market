package com.market.market.entity;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Board {

	private int boardId;
	private String title;
	private String content;
	private Date date;
	private String price;
	private String address;
	
	
	private User user;
	private Category category;
}
