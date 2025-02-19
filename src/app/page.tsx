'use client';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import React, { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');

  return (
    <main className="flex h-full w-full items-center justify-center">
      <Autocomplete
        disablePortal
        options={['test', 'testing', 'test']}
        sx={{ width: 300, background: 'white', textColor: 'black' }}
        onInputChange={(e, val) => setQuery(val)}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </main>
  );
}
