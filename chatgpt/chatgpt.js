async function generateResponse(prompt) {
  
  // const apiKey = 'OPEN-AI-KEY'; in chatgpt_config.js
  const url = 'https://api.openai.com/v1/completions';

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'text-davinci-003', // or any other model that you want to use
      prompt: prompt,
      max_tokens: 1024, // You can set various options like temperature, frequency_penalty, presence_penalty
        temperature: 0.7,
    }),
  };
  console.log(url+"  "+options)
  const response = await fetch(url, options);
  const data = await response.json();

  return data.choices[0].text;
}
