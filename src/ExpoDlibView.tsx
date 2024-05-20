import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoDlibViewProps } from './ExpoDlib.types';

const NativeView: React.ComponentType<ExpoDlibViewProps> =
  requireNativeViewManager('ExpoDlib');

export default function ExpoDlibView(props: ExpoDlibViewProps) {
  return <NativeView {...props} />;
}
