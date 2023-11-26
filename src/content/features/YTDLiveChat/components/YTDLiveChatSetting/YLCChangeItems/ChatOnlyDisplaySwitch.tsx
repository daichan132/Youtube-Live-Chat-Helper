import React from 'react';
import { Switch } from '../../../../../components/Switch';
import { useShallow } from 'zustand/react/shallow';
import { useYTDLiveChatStore } from '../../../../../../stores';

export const ChatOnlyDisplaySwitch = () => {
  const { chatOnlyDisplay, setChatOnlyDisplay } = useYTDLiveChatStore(
    useShallow((state) => ({
      chatOnlyDisplay: state.chatOnlyDisplay,
      setChatOnlyDisplay: state.setChatOnlyDisplay,
    })),
  );
  return (
    <div
      style={{
        width: '150px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Switch
        checked={chatOnlyDisplay}
        id="chat-only-display-switch"
        onChange={(checked) => {
          setChatOnlyDisplay(checked);
        }}
      />
    </div>
  );
};
