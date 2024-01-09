import { querydata } from '@/component/ui/getcateory';
import React from 'react';

const page = async({searchParams}) => {
    const category = searchParams.category;
    const newcategoryies = await querydata(category)
    console.log(newcategoryies.data);
    
   
    return (
        <div>
            <h1>Dyanmic page : {category}</h1>
           
        </div>
    );
};

export default page;