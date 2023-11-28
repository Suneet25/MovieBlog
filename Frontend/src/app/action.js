"use server";

import { cookies } from "next/headers";

async function create() {
  cookies().delete("sb-vhleaockfvrghnjscbzk-auth-token");
}

export { create };
