import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import * as s from './WtireBoardLocationCategoryStyle'
/** @jsxImportSource @emotion/react */

const WriteBoardLocationCategory = ({ selectedCategories, setSelectedCategories, categoryDetailFlag, setCategoryDetailFlag }) => {
  const [categoryRefresh, setCategoryRefresh] = useState(true);

  const getRegionNationWide = useQuery(["getRegionNationWide"], async () => {
    const option = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    }

    const response = await axios.get("http://localhost:8080/market/region/nationwide", option)

    return response;
  }, {
    enabled: categoryRefresh,
    onSuccess: () => {
      if (categoryRefresh) {
        setCategoryRefresh(false)
      }
    }
  });

  const checkedHandleOnClick = (e) => {
    if (e.target) {
      const selectedValue = e.target.value;
      setSelectedCategories(selectedValue);
      setCategoryDetailFlag(true);
    }
  };

  return (
    <div css={s.categoryContainer}>
      {getRegionNationWide.isLoading ? "" : getRegionNationWide.data !== undefined ? getRegionNationWide.data.data.map(category => (
        <div css={s.categoryBox} key={category.regionCategoryId}>
          <button
            css={s.checkbox}
            onClick={checkedHandleOnClick}
            id={category.regionCategoryId}
            value={category.regionNationwide}
            // className={selectedValues ? "selected" : ""}
          >
            {category.regionNationwide}
          </button>
        </div>
      ))
        : ""}
    </div>
  );
};

export default WriteBoardLocationCategory;
