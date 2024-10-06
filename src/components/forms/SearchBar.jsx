import React, { useState } from 'react';
import CheckboxInput from './CheckboxInput';
import SearchInput from './SearchInput';
import RangeInput from './RangeInput';

export default function SearchBar({ search, onSearchChanged,showOnlyStocked, onShowOnlyStockedChanged, maxPrice, setMaxPrice }) {


    return (
        <div className="flex flex-col gap-4 py-4 px-16">

            <SearchInput 
                placeholder="Rechercher..."
                value={search} 
                onChange={onSearchChanged} 
            />

            <CheckboxInput 
                label="Afficher uniquement les éléments en stock" 
                checked={showOnlyStocked} 
                onChange={onShowOnlyStockedChanged}
            />

            <RangeInput
                label="Prix maximum"
                value={maxPrice}
                onChange={setMaxPrice}
            />

        </div>
    );
}