import { useFormikContext } from 'formik';
import { useEffect } from 'react';

/**
 * Formik scroll to first error
 * */
const ScrollToErrorFormik: React.FC = () => {
  const formik = useFormikContext();
  const submitting = formik?.isSubmitting;

  useEffect(() => {
    const el = document.querySelector(
      '.Mui-error, [data-error]'
    ) as HTMLElement;
    if (!el) return;
    (el.parentElement ?? el)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }, [submitting]);

  return null;
};

export default ScrollToErrorFormik;
