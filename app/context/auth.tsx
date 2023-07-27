"use client";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

const PageWithAuth = (Component: NextPage) => {

  const AuthenticatedComponent = () => {
    const router = useRouter();

    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {

      const getUser = async () => {
        if (localStorage.getItem('token') == null) {
          router.push('/login');
        } else {
          setIsAuth(true)
        }
      };
      getUser();
    }, [router]);

    return !!isAuth ? <Component /> : null; // Render whatever you want while the authentication occurs
  };

  return AuthenticatedComponent;
};

export default PageWithAuth
