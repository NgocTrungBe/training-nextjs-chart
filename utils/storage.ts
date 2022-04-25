export const saveToStorage = (state = "", value: any, storage = localStorage) => {
  try {
    const serializedState = JSON.stringify(value);
    storage.setItem(state, serializedState);
  } catch (e) {
    console.log(e);
  }
};

export const loadFromStorage = (state: string, storage = localStorage) => {
  const serializedState = storage.getItem(state);
  try {
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return serializedState;
  }
};

export const removeFromStorage = (state: string, storage = localStorage) => {
  try {
    storage.removeItem(state);
  } catch (e) {
    console.log(e);
  }
};
