export const useExample = () => {
  const config = useRuntimeConfig();

  console.log(config);

  return { config };
};
