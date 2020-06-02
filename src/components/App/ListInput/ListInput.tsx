import { withTranslation } from '@wix/wix-i18n-config';
import { observer, useLocalStore } from 'mobx-react-lite';
import React, { FormEventHandler, useCallback } from 'react';
import { Input, IconButton } from 'wix-style-react';
import { APP_CONSTANTS } from '../constants';
import Search from 'wix-ui-icons-common/Search';
import useStores from '../store/context';

const { PLACEHOLDER } = APP_CONSTANTS.translationKeys.INPUT;

const ListInput = ({ t }) => {
  const { store } = useStores();

  const state = useLocalStore(() => ({
    value: '',
  }));

  const onChange = useCallback(
    ({ target: { value } }) => (state.value = value),
    [state.value],
  );

  const onSubmit: FormEventHandler<any> = useCallback(
    event => {
      event.preventDefault();

      if (state.value) {
        store.generateItem(state.value);
      }
    },
    [state.value, store],
  );

  return (
    <form onSubmit={onSubmit} style={{ marginBottom: '1rem' }}>
      <Input
        dataHook="todo-input"
        value={state.value}
        onChange={onChange}
        suffix={
          <IconButton size="small" type="submit">
            <Search />
          </IconButton>
        }
        required
        placeholder={t(PLACEHOLDER)}
      />
    </form>
  );
};

export default withTranslation()(observer(ListInput));
