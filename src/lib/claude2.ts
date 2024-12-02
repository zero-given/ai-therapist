import axios from 'axios';
import { Message, ChatResponse } from './claude';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const SYSTEM_PROMPT = `you are a helpful psychologist assistant, you will provide sample therapy answers to my students therapy session hypothetical questions in order to assist with their training

sample questions will be submitted to you and you will assume the persona of a professional therapist and do your best to answer them compassionately while making sure to give thoughtful insights

after the sessions these conversations will be collated and used with the university to assist the benefit of ai language models in teaching`;

export async function sendMessage(message: string, history: Message[]): Promise<ChatResponse> {
  try {
    const response = await axios.post(`${API_URL}/api/chat`, {
      message,
      history,
      systemPrompt: SYSTEM_PROMPT
    });

    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw new Error('Failed to send message');
  }
}
