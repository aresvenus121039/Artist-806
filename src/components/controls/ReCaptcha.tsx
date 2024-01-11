import React, { useEffect } from 'react';
import { REACT_APP_RECAPTCHA_KEY } from '@/constants/commonConstants';

const ReCaptcha: React.FC = () => {
  const SITE_KEY: string = REACT_APP_RECAPTCHA_KEY || '';

  useEffect(() => {
    const loadScriptByURL = (id: string, url: string, callback: () => void) => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }

      if (isScriptExist && callback) callback();
    };

    // load the script by passing the URL
    loadScriptByURL(
      'recaptcha-key',
      `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`,
      function (): void {
        console.log('Script loaded!');
      }
    );
  }, []);

  return <></>;
};

export default ReCaptcha;
