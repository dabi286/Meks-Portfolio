"use client";

import { useState } from 'react';
import Image from 'next/image';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

export default function CertificateModal({ isOpen, onClose, imageUrl, title }: CertificateModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative max-w-4xl w-full mx-4 bg-white rounded-lg overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="relative w-full h-[70vh]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            priority
          />
        </div>
      </div>
    </div>
  );
} 