document.addEventListener('DOMContentLoaded', function() {
  const AIButton = document.querySelector('.lessons__AI');
  const AIWindow = document.querySelector('.AI');
  const closeAiWindow = document.querySelector('.AIclose');
  const closeAi = document.querySelector('.AIclose');

  AIButton.addEventListener('click', (event) => {
    if (event.target === AIButton || AIButton.contains(event.target)) {
      AIWindow.style.opacity = '1';
      AIWindow.style.pointerEvents  = 'all';
    }
    if (event.target === AIButton || AIButton.contains(event.target)) {
      closeAiWindow.style.opacity = '1';
      closeAiWindow.style.pointerEvents  = 'all';
    }
  });

  closeAi.addEventListener('click', (event) => {
    event.preventDefault();

    AIWindow.style.opacity = '0';
    AIWindow.style.pointerEvents  = 'none';
    closeAiWindow.style.opacity = '0';
    closeAiWindow.style.pointerEvents  = 'none';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const AItyping = document.querySelector('.AI__typing__textarea');
  const sendAiBtn = document.querySelector('.AI__sendIcon');
  const chatBox = document.querySelector('.AI__chatBox');

  const createChatLi = (message, className) => {
      const chatLi = document.createElement('li');
      chatLi.classList.add('AI__incomeText', className);
      chatLi.innerHTML = `<p class="AI__text">${message}</p>`;
      return chatLi;
  };

  const getAIResponse = async (userMessage) => {
      try {
          const response = await fetch(API_URL, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${API_KEY}`
              },
              body: JSON.stringify({
                  model: "gpt-3.5-turbo",
                  messages: [{ role: "user", content: userMessage }],
                  max_tokens: 150
              })
          });

          if (!response.ok) {
              throw new Error(`Network response was not ok: ${response.status} - ${response.statusText}`);
          }

          const data = await response.json();
          if (!data.choices || data.choices.length === 0) {
              throw new Error('No choices returned from API');
          }

          const aiMessage = data.choices[0].message.content;
          return aiMessage;
      } catch (error) {
          console.error('Error fetching AI response:', error);
          return `Виникла помилка при отриманні відповіді від AI: ${error.message}`;
      }
  };

  const handleAI = async () => {
      const userMessage = AItyping.value.trim();
      if (!userMessage) {
          return;
      }

      const newChatLi = createChatLi(userMessage, 'AI__incomeText-outcome');
      chatBox.appendChild(newChatLi);

      AItyping.value = '';

      const thinkingChatLi = createChatLi("Думаю...", 'AI__incomeText-income');
      chatBox.appendChild(thinkingChatLi);

      const aiMessage = await getAIResponse(userMessage);

      chatBox.removeChild(thinkingChatLi);

      const aiChatLi = createChatLi(aiMessage, 'AI__incomeText-income');
      chatBox.appendChild(aiChatLi);
  };

  sendAiBtn.addEventListener('click', handleAI);
});

