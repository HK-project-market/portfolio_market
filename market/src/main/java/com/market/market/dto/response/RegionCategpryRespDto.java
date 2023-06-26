package com.market.market.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RegionCategpryRespDto {

	private int regionCategoryId;
	private String regionNationwide;
	private String regionCityCounty;
	private String regionDongmyeonEup;
}
