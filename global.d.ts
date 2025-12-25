declare module '*.svg?url' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import type { FC, SVGProps } from 'react';
  const ReactComponent: FC<SVGProps<SVGSVGElement>> & { title?: string };
  export default ReactComponent;
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';

declare const __DEV__: boolean;
