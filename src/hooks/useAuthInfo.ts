const useAuthInfo = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');

  return {
    userInfo,
  };
};

export default useAuthInfo;
