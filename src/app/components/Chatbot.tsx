'use client';

import React from 'react';
import { XMarkIcon } from './Icons';

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
      {/* Floating Chat Trigger */}
      <button
        onClick={handleToggleChat}
        className="fixed bottom-6 right-6 bg-[#111120] border border-[#2a2a3a] hover:border-indigo-500/40 text-indigo-400 hover:text-indigo-300 p-3 rounded-full active:scale-95 transition-all duration-200 cursor-pointer z-50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
        aria-label={isChatOpen ? "Close chat" : "Open chat"}
        type="button"
      >
        {isChatOpen ? (
          <XMarkIcon className="w-5 h-5" />
        ) : (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
          </svg>
        )}
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
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#1e1e2e]">
          <div>
            <p id="chat-assistant-heading" className="text-sm font-semibold text-[#d4d4d8]">Got a question?</p>
            <p className="text-[11px] text-[#404050] mt-0.5">Usually replies in a few seconds.</p>
          </div>
          <button
            onClick={handleToggleChat}
            className="transition-colors text-[#404050] hover:text-[#a0a0b0] p-1 rounded-lg hover:bg-white/5"
            aria-label="Close chat"
            type="button"
          >
            <XMarkIcon className="cursor-pointer w-4 h-4" />
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
                className={`max-w-[85%] p-3 rounded-2xl text-xs md:text-sm leading-relaxed shadow-sm
                    ${msg.sender === 'user'
                    ? 'bg-indigo-600 text-white rounded-br-none border border-indigo-500/30 font-mono tracking-wide'
                    : 'bg-[#111120] text-[#a0a0b0] rounded-bl-none border border-[#1e1e2e]'
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
        <div className="px-4 py-2 text-[10px] text-center text-[#404050] border-t border-[#1e1e2e]">
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
            className="flex-grow px-3.5 py-2.5 text-xs font-mono transition-all duration-200 border rounded bg-[#0e0e1a] text-[#d4d4d8] border-[#2a2a3a] focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 placeholder-[#404050] outline-none"
            aria-label="Chat message input"
            disabled={isChatLoading || !isAIInitialized}
          />
          <button
            type="submit"
            disabled={isChatLoading || !chatInput.trim() || !isAIInitialized}
            className="cursor-pointer p-2.5 text-white transition-all duration-300 rounded-xl shadow-md bg-indigo-600 hover:bg-indigo-500 disabled:bg-[#1a1a2a] disabled:text-[#404050] disabled:cursor-not-allowed flex items-center justify-center border border-indigo-500/10"
            aria-label="Send chat message"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </button>
        </form>
      </div>
      )}
    </>
  );
};

export default Chatbot;