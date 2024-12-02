import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  balance: number;
}

interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface AppState {
  user: User | null;
  messages: ChatMessage[];
  sessionTokens: number;
  isTyping: boolean;
  setUser: (user: User | null) => void;
  addMessage: (message: ChatMessage) => void;
  updateSessionTokens: (tokens: number) => void;
  setIsTyping: (isTyping: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
  user: null,
  messages: [],
  sessionTokens: 0,
  isTyping: false,
  setUser: (user) => set({ user }),
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  updateSessionTokens: (tokens) =>
    set((state) => ({ sessionTokens: state.sessionTokens + tokens })),
  setIsTyping: (isTyping) => set({ isTyping }),
}));