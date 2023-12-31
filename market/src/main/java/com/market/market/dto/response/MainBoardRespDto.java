package com.market.market.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MainBoardRespDto {

	private int boardId;
	private String boardTitle;
	private String boardContent;
	private String boardDate;
	private String productPrice;
	private String boardAddress;
	private String username;
	private String temperature;
	private String profile_img;
	private String categoryName;
}
