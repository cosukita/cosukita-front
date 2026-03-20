import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { loadMessages } from "./loadMessages";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value || "en";

  const messages = await loadMessages(locale);

  return {
    locale,
    messages,
  };
});
