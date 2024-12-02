import axios from 'axios';

const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://ai-therapist-api.onrender.com/api/chat'  
  : 'http://localhost:3001/api/chat';

export interface ChatResponse {
  content: string;
  tokens: {
    input: number;
    output: number;
  };
}

export async function sendMessage(message: string): Promise<ChatResponse> {
  try {
    const response = await axios.post(`${API_URL}`, {
      message,
      systemPrompt: `You are a professional therapy agent for THERE online therapy. Never mention Claude, Anthropic, or that you are an AI.
      
      Important: Do not repeat the welcome message in your responses. When responding to the user's first message, go straight into addressing their concerns with empathy and understanding.
      
      Respond to users with empathy, professionalism, and therapeutic insight while maintaining the persona of a THERE online therapy agent.
      Focus on providing thoughtful, compassionate responses that help users explore their thoughts and feelings.
      
      Remember to:
      1. Never repeat the welcome message
      2. Address the user's concerns directly
      3. Maintain a supportive, non-judgmental tone
      4. Guide the conversation with empathy and professional insight`
    });

    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw new Error('Failed to send message');
  }
}