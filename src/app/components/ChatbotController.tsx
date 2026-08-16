'use client';

import React, { useState, useEffect, useRef } from 'react';
import Chatbot from './Chatbot';
import { ArrowUpIcon } from './Icons'; // Import the new icon

interface ChatMessage {
  id: string;
  text: string | undefined;
  sender: 'user' | 'ai';
}

interface VertexHistoryEntry {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export default function ChatbotController() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [chatError, setChatError] = useState<string | null>(null);
  const [isAIInitialized, setIsAIInitialized] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false); // State for Back to Top button visibility
  const chatMessagesEndRef = useRef<HTMLDivElement | null>(null);
  const historyRef = useRef<VertexHistoryEntry[]>([]);

  useEffect(() => {
    chatMessagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // Effect for Back to Top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Show button after scrolling 300px down
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleChat = () => {
    const opening = !isChatOpen;
    setIsChatOpen(opening);
    if (opening) {
      setIsAIInitialized(true);
      if (chatMessages.length === 0) {
        setChatMessages([{
          id: Date.now().toString(),
          text: "Hello! I'm Majestik Magik's AI Assistant. How can I help you today?",
          sender: 'ai',
        }]);
      }
    }
  };

  const handleChatInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatInput(e.target.value);
  };

  const handleSendChatMessage = async (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    const messageText = chatInput.trim();
    if (!messageText) return;

    setChatMessages(prev => [...prev, { id: Date.now().toString(), text: messageText, sender: 'user' }]);
    setChatInput('');
    setIsChatLoading(true);
    setChatError(null);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageText, history: historyRef.current }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error ?? 'Unknown error');

      historyRef.current = [
        ...historyRef.current,
        { role: 'user', parts: [{ text: messageText }] },
        { role: 'model', parts: [{ text: data.text }] },
      ];

      setChatMessages(prev => [...prev, { id: (Date.now() + 1).toString(), text: data.text, sender: 'ai' }]);
    } catch {
      setChatError("Sorry, I couldn't connect to the AI");
      setChatMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: "I'm having a little trouble connecting right now. Please try again in a moment.",
        sender: 'ai',
      }]);
    } finally {
      setIsChatLoading(false);
    }
  };

  return (
    <>
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-6 border-2 border-indigo-300/10 bg-indigo-400/10 hover:bg-indigo-500/30 text-indigo-400 p-4 rounded-full transform hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer z-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-[#07080e]
          ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        aria-label="Back to top"
        type="button"
      >
        <ArrowUpIcon className="w-6 h-6" />
      </button>

      {/* Chatbot Component */}

    <Chatbot
      isChatOpen={isChatOpen}
      handleToggleChat={handleToggleChat}
      chatMessages={chatMessages}
      chatInput={chatInput}
      handleChatInputChange={handleChatInputChange}
      handleSendChatMessage={handleSendChatMessage}
      isChatLoading={isChatLoading}
      chatError={chatError}
      isAIInitialized={isAIInitialized}
      chatMessagesEndRef={chatMessagesEndRef as React.RefObject<HTMLDivElement>}
    />
    </>
  );
}
