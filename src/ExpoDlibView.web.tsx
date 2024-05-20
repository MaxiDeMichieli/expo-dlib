import * as React from 'react';

import { ExpoDlibViewProps } from './ExpoDlib.types';

export default function ExpoDlibView(props: ExpoDlibViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
