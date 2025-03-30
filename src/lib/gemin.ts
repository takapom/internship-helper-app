export const classifyEmail = async (mailText: string): Promise<string> => {
    const prompt = `
  次のメール内容が「就活」「インターン」のどれに分類されるか答えてください。
  メール内容:
  ${mailText}
  返答はカテゴリ名だけでお願いします。
  `;
  
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  
    if (!apiKey) {
      throw new Error("Gemini APIキーが設定されていません。");
    }
  
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );
  
    const data = await response.json();
    const category = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    return category || '分類不可';
  };
  