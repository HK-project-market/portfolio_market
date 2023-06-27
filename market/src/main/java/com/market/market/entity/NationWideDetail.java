package com.market.market.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NationWideDetail {

	private int nationWideDetailId;
	private int nationWideId;
	private String nationWideDetailName;
}
