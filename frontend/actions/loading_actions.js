export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';


export const startLoading = () => ({
  type: START_LOADING
});

export const endLoading = () => ({
  type: END_LOADING
});