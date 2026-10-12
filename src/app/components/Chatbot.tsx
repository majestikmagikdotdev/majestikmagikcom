'use client';

import React from 'react';
import Image from 'next/image';
import { XMarkIcon, MagicWandIcon } from './Icons'; // Assuming Icons.tsx exists and exports these

interface ChatMessage {
  id: string;
  text: string | undefined;
  sender: 'user' | 'ai';
}

interface ChatbotProps {
  isChatOpen: boolean;
  handleToggleChat: () => void;
  chatMessages: ChatMessage[];
  chatInput: string;
  handleChatInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSendChatMessage: (e?: React.FormEvent<HTMLFormElement>) => Promise<void>;
  isChatLoading: boolean;
  chatError: string | null;
  isAIInitialized: boolean;
  chatMessagesEndRef: React.RefObject<HTMLDivElement>;
}

const Chatbot: React.FC<ChatbotProps> = ({
  isChatOpen,
  handleToggleChat,
  chatMessages,
  chatInput,
  handleChatInputChange,
  handleSendChatMessage,
  isChatLoading,
  chatError,
  isAIInitialized,
  chatMessagesEndRef
}) => {
  return (
    <>
      {/* Floating Chat Trigger with Pulsing Aurora Ring */}
      <button
        onClick={handleToggleChat}
        className="fixed bottom-6 right-6 border-2 border-indigo-300/10 bg-indigo-400/10 hover:bg-indigo-500/30 text-indigo-400 p-3 rounded-full transform hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer z-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-[#181818]"
        aria-label={isChatOpen ? "Close chat" : "Open chat assistant"}
        type="button"
      >
        <div className="relative w-8 h-8 flex items-center justify-center">
          {isChatOpen ? (
            <XMarkIcon className="w-7 h-7 transform rotate-0 hover:rotate-90 transition-transform duration-300" />
          ) : (
            <Image 
              src="/img/headphones-with-microphone.svg" 
              alt="Support icon" 
              className="w-7 h-7" style={{ filter: 'invert(58%) sepia(60%) saturate(500%) hue-rotate(200deg) brightness(100%)' }} 
              loading="lazy"
              width={28}
              height={28} 
            />
          )}
        </div>
      </button>

      {/* Main Chat Assistant Dialog */}
      {isChatOpen && (
      <div
        className="fixed bottom-24 right-6 w-[340px] max-w-[calc(100vw-3rem)] h-[70vh] max-h-[550px] flex flex-col z-50 overflow-hidden rounded-xl border border-[#2a2a3a] shadow-[0_20px_60px_rgba(0,0,0,0.7)] transition-all duration-300 ease-out transform origin-bottom-right scale-100 opacity-100 translate-y-0"
        style={{ background: '#181818' }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="chat-assistant-heading"
      >
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#2a2a3a] bg-[#111120]">
          <h3 id="chat-assistant-heading" className="flex items-center text-sm font-bold tracking-wide text-[#f0f0f0] uppercase font-mono">
            <MagicWandIcon className="w-5 h-5 mr-2 text-indigo-400 animate-pulse" />
            Majestik Magik AI Assistant
          </h3>
          <button
            onClick={handleToggleChat}
            className="transition-colors text-[#a0a0b0] hover:text-[#f0f0f0] p-1 rounded-lg hover:bg-white/5"
            aria-label="Close chat window"
            type="button"
          >
            <XMarkIcon className="cursor-pointer w-5 h-5" />
          </button>
        </div>

        {/* Chat Feed */}
        <div className="flex-grow p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-[#2a2a3a]" id="chat-messages-container" aria-live="polite" style={{ background: '#181818' }}>
          {chatMessages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-2xl text-xs md:text-sm leading-relaxed tracking-wide shadow-sm
                    ${msg.sender === 'user'
                    ? 'bg-indigo-600 text-white rounded-br-none border border-indigo-500/30 font-mono'
                    : 'bg-[#111120] text-[#a0a0b0] rounded-bl-none border border-[#2a2a3a] font-mono'
                  }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          
          {/* Typings / Thinking Indicator */}
          {isChatLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] px-4 py-3 rounded-lg bg-[#111120] border border-[#2a2a3a] rounded-bl-none flex items-center space-x-1" aria-label="AI is typing">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:-0.3s]"></span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:-0.15s]"></span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce"></span>
              </div>
            </div>
          )}
          <div ref={chatMessagesEndRef} />
        </div>

        {/* Warning / Notification Panels */}
        {chatError && !isChatLoading && (
          <p className="px-4 py-2 text-[10px] text-center text-red-400 bg-red-950/20 border-t border-red-500/10" role="alert">
            {chatError}
          </p>
        )}
        {!isAIInitialized && !chatError && chatMessages.length > 0 && chatMessages[0].text && chatMessages[0].text.includes("unavailable") && (
          <p className="px-4 py-2 text-[10px] text-center text-yellow-400 bg-yellow-950/10 border-t border-yellow-500/10" role="status">
            Chatbot requires Gemini AI initialization.
          </p>
        )}

        {/* Privacy Notice */}
        <div className="px-4 py-2 text-[10px] text-center text-[#606070] bg-[#111120] border-t border-[#2a2a3a] font-mono">
          By utilizing chat, you consent to our{' '}
          <button
            onClick={() => window.open('/privacy-policy', '_blank')}
            className="underline transition-colors cursor-pointer hover:text-indigo-400 font-semibold"
            aria-label="View Privacy Policy"
            type="button"
          >
            Privacy Policy
          </button>
          .
        </div>

        {/* Input Form */}
        <form onSubmit={handleSendChatMessage} className="flex items-center p-3 space-x-2 border-t border-[#2a2a3a] bg-[#111120]">
          <input
            type="text"
            value={chatInput}
            onChange={handleChatInputChange}
            placeholder={isAIInitialized ? "Ask about Majestik Magik..." : "Chat unavailable..."}
            className="flex-grow px-3.5 py-2.5 text-xs font-mono transition-all duration-200 border rounded bg-[#0e0e1a] text-[#f0f0f0] border-[#2a2a3a] focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 placeholder-[#404050] outline-none"
            aria-label="Chat message input"
            disabled={isChatLoading || !isAIInitialized}
          />
          <button
            type="submit"
            disabled={isChatLoading || !chatInput.trim() || !isAIInitialized}
            className="cursor-pointer p-2.5 text-white transition-all duration-300 rounded-xl shadow-md bg-indigo-600 hover:bg-indigo-500 disabled:bg-[#1a1a2a] disabled:text-[#404050] disabled:cursor-not-allowed flex items-center justify-center border border-indigo-500/10"
            aria-label="Send chat message"
          >
            <Image 
              src="/img/paperplane.svg" 
              className="w-4 h-4 filter brightness-0 invert" 
              alt="Send message" 
              width={16} 
              height={16} 
            />
          </button>
        </form>
      </div>
      )}
    </>
  );
};

export default Chatbot;