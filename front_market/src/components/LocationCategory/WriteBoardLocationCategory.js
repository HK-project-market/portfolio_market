import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import * as s from './WtireBoardLocationCategoryStyle'
/** @jsxImportSource @emotion/react */

const WriteBoardLocationCategory = ({ setSelectedNationWideName, setNationWideDetailFlag }) => {
  const [categoryRefresh, setCategoryRefresh] = useState(true);

  const getNationWide = useQuery(["getRegionNationWide"], async () => {
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
      setSelectedNationWideName(selectedValue);
      setNationWideDetailFlag(true);
    }
  };

  return (
    <div css={s.categoryContainer}>
      {getNationWide.isLoading ? "" : getNationWide.data !== undefined ? getNationWide.data.data.map(nationWide => (
        <div css={s.categoryBox} key={nationWide.nationWideId}>
          <button
            css={s.checkbox}
            onClick={checkedHandleOnClick}
            id={nationWide.nationWideId}
            value={nationWide.nationWideName}
            name='nationWIdeName'
          >
            {nationWide.nationWideName}
          </button>
        </div>
      ))
        : ""}
    </div>
  );
};

export default WriteBoardLocationCategory;
