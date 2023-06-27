package com.market.market.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NationWide {

	private int nationWideId;
	private String nationWideName;

	private NationWideDetail nationWideDetail;
}
