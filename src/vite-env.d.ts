// Self-contained ambient declarations so type-checking does not depend on the
// "vite/client" type library resolving in every environment (some CI runners
// fail with TS2688). These cover the asset/style imports this project uses.
declare module '*.css';
declare module '*.scss';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.webp';
