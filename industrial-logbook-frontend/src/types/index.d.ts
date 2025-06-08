// This file is intentionally left blank.
// You can add global type declarations here

// Example: declare module for importing SVGs
declare module "*.svg" {
  const content: string;
  export default content;
}

// Example: declare module for importing PNGs
declare module "*.png" {
  const value: string;
  export default value;
}
declare module 'react-dom/client';