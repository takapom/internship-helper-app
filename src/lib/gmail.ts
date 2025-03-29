// export const fetchRecentEmails = async (accessToken: string) => {
//   const listRes = await fetch(
//     'https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=5',
//     {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     }
//   );

//   const listJson = await listRes.json();
//   if (!listJson.messages) return [];

//   const emails = await Promise.all(
//     listJson.messages.map(async (msg: { id: string }) => {
//       const msgRes = await fetch(
//         `https://gmail.googleapis.com/gmail/v1/users/me/messages/${msg.id}?format=full`,
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );

//       const msgJson = await msgRes.json();
//       const headers = msgJson.payload.headers;

//       const body =
//         msgJson.payload?.parts?.[0]?.body?.data ||
//         msgJson.payload?.body?.data ||
//         "";

//       const decodedBody = body
//         ? Buffer.from(body, "base64").toString("utf-8")
//         : "";

//       return {
//         id: msg.id,
//         payload: msgJson.payload,
//         subject:
//           headers?.find((h: any) => h.name === "Subject")?.value || "",
//         from: headers?.find((h: any) => h.name === "From")?.value || "",
//         body: decodedBody,
//       };
//     })
//   );

//   return emails;
// };

export const fetchRecentEmails = async (accessToken: string) => {
  const listRes = await fetch(
    'https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=10',
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const listJson = await listRes.json();
  if (!listJson.messages) return [];

  const emails = [];

  for (const msg of listJson.messages) {
    const msgRes = await fetch(
      `https://gmail.googleapis.com/gmail/v1/users/me/messages/${msg.id}?format=full`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const msgJson = await msgRes.json();
    const headers = msgJson.payload.headers;

    const body =
      msgJson.payload?.parts?.[0]?.body?.data ||
      msgJson.payload?.body?.data ||
      "";

    const decodedBody = body
      ? Buffer.from(body, "base64").toString("utf-8")
      : "";

    emails.push({
      id: msg.id,
      payload: msgJson.payload,
      subject: headers?.find((h: any) => h.name === "Subject")?.value || "",
      from: headers?.find((h: any) => h.name === "From")?.value || "",
      body: decodedBody,
    });

    // 1通ごとに200ms待つ（リクエスト分散のため）
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  return emails;
};
