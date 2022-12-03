import React, { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

const AlertComponent = ({ alertConfig, setAlertConfig }) => {

  const closeAlert = () => {
    setAlertConfig({
      isOpened: false,
      isSuccess: true,
      message: '',
    });
  };

  useEffect(() => {
    setTimeout(() => {
      closeAlert();
    }, 5000);
  }, [alertConfig.isOpened]);

  return (
    <>
      {alertConfig.isOpened && (
        <Alert
          className="fade show mt-3"
          variant={alertConfig.isSuccess ? 'success' : 'danger'}
          onClose={() => closeAlert()}
          dismissible
        >
          {alertConfig.message}
        </Alert>
      )}
    </>
  );
};

export default AlertComponent;
