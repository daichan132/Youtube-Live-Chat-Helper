import React, { useCallback, useRef } from 'react';

import { useShallow } from 'zustand/react/shallow';

import { Slider } from '../../../../../../shared/components/Slider';
import { useYTDLiveChatStore } from '../../../../../../stores';
import { useInitializedSlider } from '../../../../../hooks/useInitializedSlider';

export const BlurSlider = () => {
  const blurRef = useRef(useYTDLiveChatStore.getState().blur);
  const { updateYLCStyle } = useYTDLiveChatStore(
    useShallow((state) => ({ updateYLCStyle: state.updateYLCStyle })),
  );
  const updateBlur = useCallback(
    (value: number) => {
      updateYLCStyle({ blur: Math.round(value * 20) });
    },
    [updateYLCStyle],
  );
  const { value, ref } = useInitializedSlider<HTMLDivElement>({
    initialValue: blurRef.current / 20,
    onScrub(value) {
      updateBlur(value);
    },
  });

  return <Slider value={value} sliderRef={ref} />;
};
