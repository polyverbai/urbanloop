import { supabase } from "@/lib/supabase";

/* =====================================================
   FETCH DASHBOARD
===================================================== */

export async function fetchDashboard<T>(
  endpoint: string
): Promise<T> {

  const {
    data: { session },
    error,
  } =
    await supabase.auth.getSession();

  if (error || !session) {
    throw new Error(
      "Your login session has expired."
    );
  }

  const response =
    await fetch(endpoint, {

      method: "GET",

      headers: {
        Authorization:
          `Bearer ${session.access_token}`,
      },

    });

  const result =
    await response.json();

  if (
    !response.ok ||
    !result.success
  ) {
    throw new Error(
      result.message ??
      "Unable to load dashboard."
    );
  }

  return result as T;

}