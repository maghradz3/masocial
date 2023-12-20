"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return <div>Form client : user is signed in</div>;
  }

  return <div>Form client : user is not signed in</div>;
}
