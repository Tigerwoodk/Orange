import React, { useState } from 'react';
import Autocomplete from 'react-autocomplete';

const items = [
  { id: 1, label: 'Apple' },
  { id: 2, label: 'Banana' },
  { id: 3, label: 'Cherry' },
  { id: 4, label: 'Date' },
  { id: 5, label: 'Elderberry' },
];

const AutocompleteSearch: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <div className="max-w-md mx-auto">
      <Autocomplete
        items={items}
        shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
        getItemValue={item => item.label}
        renderItem={(item, highlighted) =>
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
            className="p-2"
          >
            {item.label}
          </div>
        }
        value={value}
        onChange={e => setValue(e.target.value)}
        onSelect={value => setValue(value)}
        inputProps={{
          className: 'w-full p-2 border rounded',
          placeholder: 'Search fruits...'
        }}
        wrapperStyle={{ display: 'block' }}
      />
    </div>
  );
};

export default AutocompleteSearch;