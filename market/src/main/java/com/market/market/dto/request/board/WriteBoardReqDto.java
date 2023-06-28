package com.market.market.dto.request.board;

import lombok.Data;

@Data
public class WriteBoardReqDto {

	private String title;
	private String content;
	private String price;
	private int nationWideDetailId;
	private int categoryId;
}
