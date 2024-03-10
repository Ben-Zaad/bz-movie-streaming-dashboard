// Sidebar.tsx
import React, { useContext } from 'react';
import { CustomInput } from '../../../components/input/CustomInput';
import Toggle from '../../../components/buttons/Toggle';
import { MoviesContext } from '../../../customHooks/moviesContext/MoviesContext';
import Collapse from '../../../components/collapse/Collapse';
import { ErrorBar } from '../../../components/errors/ErrorBar';

const Searchbar: React.FC = () => {
  const {
    filterValue,
    searchError,
    releasedToggle,
    ratingToggle,
    setFilterValue,
    setReleasedToggle,
    setRatingToggle,
  } = useContext(MoviesContext);
  return (
    <div className='flex flex-col justify-end l:w-full bg-slate-100 '>
      <Collapse
        openTitle='Show Search Options'
        closeTitle='Hide Search Options'
      >
        {searchError && (
          <ErrorBar errorMessage={searchError} />
        )}
        <div className='flex flex-col p-4'>
          <div className='w-3/12'>
            <CustomInput
              placeholder='Type here to search'
              label='Search Movie By Name, Release Year or IMDB Rating :'
              value={filterValue}
              setValue={setFilterValue}
            />
          </div>
          <div className=''>
            <h3 className='font-medium'>Sort By:</h3>
            <div className='flex flex-row'>
              <Toggle
                defaultChecked={ratingToggle}
                title={'Rating'}
                onChange={setRatingToggle}
              />
              <Toggle
                defaultChecked={releasedToggle}
                title={'Release Date'}
                onChange={setReleasedToggle}
              />
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Searchbar;
