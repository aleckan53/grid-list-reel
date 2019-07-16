import React from 'react';
import Search from '../Search/Search';
import Filter from '../Filter/Filter'
import List from '../List/List';

export default function ListView() {

  return (
    <section>
      <Search/>
      <Filter/>
      <List/>
    </section>
  );
};