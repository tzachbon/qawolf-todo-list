import { useTranslation } from '@wix/wix-i18n-config';
import { observer } from 'mobx-react-lite';
import React, { useCallback } from 'react';
import { Omit } from 'utility-types';
import {
  Button,
  ListItemSelect,
  ListItemSelectProps,
  Text,
  Tooltip,
} from 'wix-style-react';
import Delete from 'wix-ui-icons-common/Delete';
import { APP_CONSTANTS } from '../constants';
import useStores from '../store/context';
import { TodoItem } from '../store/store';

interface Props extends Omit<ListItemSelectProps, 'subtitle'> {
  item: TodoItem;
}

const { REMOVE, TOOLTIP } = APP_CONSTANTS.translationKeys.LIST.ITEM;

const ListItem: React.FC<Props> = props => {
  const { item } = props;
  const { startDate, endDate, completed, name } = item;
  const { store } = useStores();

  const { t } = useTranslation();

  const handleListItemClicked = useCallback(
    () => store.toggleItemCompleted(item),
    [item, store],
  );

  const handleListItemRemoved = useCallback(() => {
    store.remove(item.id);
  }, [item.id, store]);

  return (
    <Tooltip maxWidth={500} content={t(TOOLTIP, { startDate })}>
      <ListItemSelect
        {...props}
        onClick={handleListItemClicked}
        selected={completed}
        checkbox
        ellipsis
        highlighted={completed}
        title={
          <>
            <Text weight="bold">{name}</Text>
            {endDate && <Text>{` - ${endDate}`}</Text>}
          </>
        }
        suffix={
          completed ? (
            <Button
              size="small"
              onClick={handleListItemRemoved}
              prefixIcon={<Delete />}
            >
              {t(REMOVE)}
            </Button>
          ) : null
        }
      />
    </Tooltip>
  );
};

export default observer(ListItem);
