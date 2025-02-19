'use client';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
        try {
            const response = await fetch(`http://localhost:3001/search/suggestions?query=${query}`);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const data = await response.json();
            setSuggestions(data);
        } catch (error) {
          console.error("Error fetching suggestions:", error);
        }
    };
    if (query !== "") {
        fetchSuggestions();
    } else {
        setSuggestions([]);
    }
}, [query])

  return (
    <main className="flex h-full w-full items-center justify-center">
      <Autocomplete
        disablePortal
        options={suggestions}
        sx={{ width: 300, background: 'white', textColor: 'black' }}
        onInputChange={(e, val) => setQuery(val)}
        renderInput={(params) => <TextField {...params} label="Search" />}
      />
    </main>
  );
}
