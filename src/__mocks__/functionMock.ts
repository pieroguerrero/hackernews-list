export const intersectionObserverMosk = jest.fn().mockImplementation(() => ({
  observe: () => null,
  disconnect: () => null,
}));
