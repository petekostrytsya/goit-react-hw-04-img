import { useState } from 'react';
import { toast } from 'react-toastify';
import { Header, Form, Button, ButtonLabel, Input } from './Searchbar.styled';


export const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQueryChange = ({ currentTarget: { value } }) => {
    setSearchQuery(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    const trimSearchQuery = searchQuery.trim();

    if (trimSearchQuery === '') {
      toast.info('Please, enter search word!');
      return;
    }

    onSubmit(trimSearchQuery);
    setSearchQuery('');
  };

    return (
      <Header>
        <Form onSubmit={handleSubmit}>
            <Button type="submit">
                <ButtonLabel>Search</ButtonLabel>
            </Button>
                
            <Input
            className="input"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchQuery"
            value={searchQuery}
            onChange={handleQueryChange}
            />
        </Form>
      </Header>
    );
  }