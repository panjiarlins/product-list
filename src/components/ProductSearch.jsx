import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { IconContext } from 'react-icons';

const ProductSearch = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  return (
    <div className='flex gap-2 h-10'>
      <input
        type='text'
        placeholder='Search product'
        value={keyword}
        onChange={({ target }) => setKeyword(target.value)}
        onKeyDown={(event) => event.key === 'Enter' && onSearch(keyword)}
        className='w-full rounded-lg px-4 py-2 bg-white focus:outline-slate-500 active:outline-cyan-500'
      />
      <IconContext.Provider value={{ color: 'grey', size: '100%' }}>
        <BiSearch
          onClick={() => onSearch(keyword)}
          className='w-[10%] h-[100%] bg-white rounded-lg p-1 cursor-pointer hover:outline hover:outline-2 hover:outline-slate-500 active:outline-cyan-500'
        ></BiSearch>
      </IconContext.Provider>
    </div>
  );
};

export default ProductSearch;
