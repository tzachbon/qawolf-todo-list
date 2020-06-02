import { observer } from 'mobx-react-lite';
import React, { Fragment } from 'react';
import { Layout, Divider } from 'wix-style-react';
import ListItem from '../ListItem';
import useStores from '../store/context';

const List = () => {
  const {
    store: { list },
  } = useStores();

  return (
    <Layout gap={2} dataHook="todo-list" cols={1} alignItems="center">
      {list.map(item => (
        <Fragment key={item.id}>
          <Divider />
          <ListItem item={item} dataHook="todo-list-item" />
        </Fragment>
      ))}
    </Layout>
  );
};

export default observer(List);
