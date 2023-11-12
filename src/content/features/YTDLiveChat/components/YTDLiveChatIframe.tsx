import { useEffect, useRef, useState } from 'react';
import styles from '../styles/YTDLiveChatIframe.module.scss';
import '../styles/iframe.scss';

interface YTDLiveChatIframe {
  src: string;
}

export const YTDLiveChatIframe = ({ src }: YTDLiveChatIframe) => {
  const ref = useRef<HTMLIFrameElement>(null);
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(() => {
    if (ref.current) {
      ref.current.onload = () => {
        const body = ref.current?.contentDocument?.body;
        if (body) {
          body.classList.add('custom');
          setLoaded(true);
        }
      };
    }
  }, []);
  console.log(styles);

  return (
    <>
      <iframe
        frameBorder={0}
        style={{
          width: '100%',
          height: '100%',
          opacity: loaded ? 1 : 0,
        }}
        id="chatframe"
        className="style-scope ytd-live-chat-frame"
        src={src}
        ref={ref}
      />
      {!loaded && <div className={styles['skelton']} />}
    </>
  );
};
