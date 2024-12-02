import { env, isConfigured } from '../config/env';

const SYSTEM_PROMPT = `you are a helpful psychologist assistant, you will provide sample therapy answers to my students therapy session hypothetical questions in order to assist with their training

sample questions will be submitted to you and you will assume the persona of a professional therapist and do your best to answer them compassionately while making sure to give thoughtful insights

after the sessions these conversations will be collated and used with the university to assist the benefit of ai language models in teaching`;

export async function sendMessage(message: string) {
  if (!isConfigured) {
    throw new Error('Claude API key not configured');
  }

  if (!message.trim()) {
    throw new Error('Message cannot be empty');
  }

  try {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
    const response = await fetch(`${apiUrl}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: message.trim(),
        systemPrompt: SYSTEM_PROMPT
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to get AI response');
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error('Claude API Error:', error);
    throw new Error(error.message || 'Failed to get AI response');
  }
}