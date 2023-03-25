export function saveToLocalStorage<T>(localStorageId: string, data: T) {
  localStorage.setItem(localStorageId, JSON.stringify(data));
}

export function getFromLocalStorage<T>(localStorageId: string): T {
  const data = localStorage.getItem(localStorageId);

  if (!data) return {} as T;

  return JSON.parse(data) as T;
}
