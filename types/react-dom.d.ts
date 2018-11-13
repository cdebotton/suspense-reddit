import ReactDOM from "react-dom";

declare module "react-dom" {
  export function createRoot(
    element: HTMLElement | null
  ): {
    render: (node: JSX.Element) => void;
  };
}
