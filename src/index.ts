import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoDlib.web.ts
// and on native platforms to ExpoDlib.ts
import ExpoDlibModule from './ExpoDlibModule';
import ExpoDlibView from './ExpoDlibView';
import { ChangeEventPayload, ExpoDlibViewProps } from './ExpoDlib.types';

// Get the native constant value.
export const PI = ExpoDlibModule.PI;

export function hello(): string {
  return ExpoDlibModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoDlibModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoDlibModule ?? NativeModulesProxy.ExpoDlib);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoDlibView, ExpoDlibViewProps, ChangeEventPayload };
