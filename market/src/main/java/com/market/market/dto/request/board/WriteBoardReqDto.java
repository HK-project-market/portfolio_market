package com.market.market.dto.request.board;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import lombok.Data;

@Data
public class WriteBoardReqDto {

	@NotBlank(message = "제목을 입력하세요.")
	private String title;
	@NotBlank(message = "내용을 입력하세요.")	
	private String content;
	@Pattern(regexp = "^[0-9]*$",
			message = "숫자만 입력 가능합니다.")
	@NotBlank(message = "가격을 입력하세요.")
	private String price;
	private int nationWideDetailId;
	@NotBlank(message = "카테고리를 선택하세요.")
	private String categoryId;
}
