import { observer } from 'mobx-react-lite';
import React, { memo } from 'react';
import { Layout, ListItemSelect, Text } from 'wix-style-react';
import useStores from '../store/context';
import { TodoItem } from '../store/store';

const onToggleCompleted = (item: TodoItem) => (
  event: React.MouseEvent<HTMLElement>,
) => {
  event.preventDefault();
  item.completed = !item.completed;
};

const List = () => {
  const {
    store: { list },
  } = useStores();

  return (
    <Layout
      dataHook="todo-list"
      cols={1}
      alignItems="center"
      justifyItems="center"
    >
      {list.map(item => (
        <ListItemSelect
          dataHook="todo-list-item"
          checkbox
          ellipsis
          subtitle={item.startDate}
          selected={item.completed}
          onClick={onToggleCompleted(item)}
          highlighted={item.completed}
          key={item.id}
          title={item.name}
        />
      ))}
    </Layout>
  );
};

export default observer(List);
