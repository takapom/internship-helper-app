// src/lib/gmail.ts

export const fetchRecentEmails = async (accessToken: string) => {
  const listRes = await fetch(
    'https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=5',
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const listJson = await listRes.json();
  if (!listJson.messages) return [];

  const emails = await Promise.all(
    listJson.messages.map(async (msg: { id: string }) => {
      const msgRes = await fetch(
        `https://gmail.googleapis.com/gmail/v1/users/me/messages/${msg.id}?format=metadata`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return msgRes.json();
    })
  );

  return emails;
};
