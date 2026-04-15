import type { ReactNode } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../routers/router";

export const Providers = ({children}: {children?: ReactNode}) => {

  return (
    <>
      {children}
      <RouterProvider router={router} />
    </>
  )
}