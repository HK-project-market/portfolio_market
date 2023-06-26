import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import * as s from './Style'
/** @jsxImportSource @emotion/react */

const LocationCategory = ({ selectedCategories, setSelectedCategories }) => {

    const [ categoryRefresh, setCategoryRefresh ] = useState(true);

    const getRegionNationWide = useQuery(["getRegionNationWide"], async() => {
        const option = {
            headers : {
                Authorization : `Bearer ${localStorage.getItem("accessToken")}`
            }
        }

        const response = await axios("http://localhost:8080/market/region/nationwide", option)
        
        return response;
    },{
        enabled: categoryRefresh,
        onSUccess: () => {
            if(categoryRefresh){
                setCategoryRefresh(false)
            }
        }
    })

    const checkedHandleOnClick = (e) => {
        if(e.target.checked){
            setSelectedCategories([...selectedCategories, e.target.value]);
        }else {
            setSelectedCategories([...selectedCategories.filter(id => id !== e.target.value)]);
        }
    }

    return (
        <div css={s.categoryContainer}>
            {getRegionNationWide.isLoading ? "" : getRegionNationWide.data !== undefined ? getRegionNationWide.data.data.map(category => (
                <div css={s.categoryBox} key={category.regionCategoryId}>
                    <input css={s.checkbox}  onChange={checkedHandleOnClick} type="checkbox" id={category.regionCategoryId} value={category.regionCategoryId}/>
                    <label htmlFor={category.regionCategoryId} >{category.regionNationwide}</label>
                </div>))
            : ""}
        </div>
    );
};

export default LocationCategory;