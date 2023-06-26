package com.market.market.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegionCategory {

	private int regionCategoryId;
	private String regionNationwide;
	private String regionCityCounty;
	private String regionDongmyeonEup;
}
