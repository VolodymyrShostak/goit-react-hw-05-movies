import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import {
  WrapperSearchbar,
  SearchForm,
  SearchFormInput,
  SearchFormButton,
  SearchFormButtonLabel,
} from './styled.js';

export const Searchbar = () => {
  
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(() => searchParams.get('query') ?? '');

  const onChange = e => {
    const { value } = e.currentTarget;
    setSearch(value.trim());
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      toast.warning('Please, enter a keyword...');
      return;
    }
  
     setSearchParams({ query: search });
     setSearch('');
  };

  

  return (
    <>
      <WrapperSearchbar>
        <SearchForm onSubmit={onHandleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            value={search}
            name="search"
            onChange={onChange}
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search movies"
          />
          
        </SearchForm>
       
      </WrapperSearchbar>
    </>
  );
};

