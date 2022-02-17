import { injected } from './connectors';

export const connect = async (activate: Function) => {
  try {
    await activate(injected);
  } catch (error) {
    // TODO: handle error properly
    console.error('Error while calling activate()', error);
  }
};
