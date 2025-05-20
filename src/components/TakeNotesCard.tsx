'use client';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import Modal from './ui/Modal';

export default function TakeNotesCard() {
  // States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteContent, setNoteContent] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [isPlaybackModal, setIsPlaybackModal] = useState(false);
  
  // Refs
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  
  // Focus textarea when modal opens
  useEffect(() => {
    if (isModalOpen && textareaRef.current && !isPlaybackModal) {
      textareaRef.current.focus();
    }
  }, [isModalOpen, isPlaybackModal]);
  
  // Clean up audio URL when component unmounts
  useEffect(() => {
    return () => {
      if (audioURL) {
        URL.revokeObjectURL(audioURL);
      }
    };
  }, [audioURL]);
  
  // Handlers
  const openModal = () => {
    setIsModalOpen(true);
    setIsPlaybackModal(false);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    if (isPlaybackModal) {
      setIsPlaybackModal(false);
      setAudioURL(null);
    }
  };
  
  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteContent(e.target.value);
  };
  
  const handleSaveNote = () => {
    if (noteContent.trim()) {
      // Save note logic here (could store in localStorage or send to API)
      console.log('Saving note:', noteContent);
      // Optionally show a success message or toast notification
    }
    closeModal();
  };
  
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];
      
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };
      
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
        
        // Open playback modal after recording
        setIsModalOpen(true);
        setIsPlaybackModal(true);
        
        // Stop all tracks from the stream
        stream.getTracks().forEach(track => track.stop());
      };
      
      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Could not access microphone. Please check permissions.');
    }
  };
  
  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };
  
  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };
  
  const saveRecording = () => {
    // Here you could save the audio file, perhaps convert to text via API
    // For now, we'll just close the modal
    console.log('Saving audio recording');
    closeModal();
  };
  
  const discardRecording = () => {
    // Clean up and close
    if (audioURL) {
      URL.revokeObjectURL(audioURL);
      setAudioURL(null);
    }
    closeModal();
  };
  
  const transcribeAudio = () => {
    // This would connect to a speech-to-text API
    console.log('Transcribing audio to text...');
    // For demo, we'll just add a placeholder in the notes
    setNoteContent(prevContent => 
      prevContent + (prevContent ? '\n\n' : '') + '[Audio transcription would appear here]'
    );
    setIsPlaybackModal(false);
  };

  return (
    <>
      <div className='text-white max-w-[300px] p-2 fixed bottom-10 mx-auto right-0 left-0 
                      bg-white/5 backdrop-blur-md rounded-full border border-white/5 
                      flex gap-3 z-10 shadow-lg transition-all duration-300 hover:bg-white/10'>
        <button 
          className='w-full h-full bg-white/5 rounded-full cursor-pointer p-4 
                    transition-all duration-300 hover:bg-white/10'
          onClick={openModal}
          aria-label="Take notes"
        >
          <div className='flex gap-2 justify-center items-center'>
            <Image src="/note-add.svg" alt='Add note' width={20} height={20} priority />
            <span>Notes</span>
          </div>
        </button>
        
        <button 
          className={`w-full h-full rounded-full cursor-pointer p-4 
                    transition-all duration-300 ${isRecording ? 'bg-red-500/30' : 'bg-white/5 hover:bg-white/10'}`}
          onClick={toggleRecording}
          aria-label="Record audio"
        >
          <div className='flex gap-2 justify-center items-center'>
            <Image 
              src="/microphone-red.svg" 
              alt='Microphone' 
              width={25} 
              height={20} 
              className={isRecording ? 'animate-pulse' : ''}
              priority
            />
            <span>{isRecording ? 'Stop' : 'Record'}</span>
          </div>
        </button>
      </div>

      <Modal 
        open={isModalOpen} 
        onClose={closeModal} 
        closeOnBackdropClick={false}
      >
        {isPlaybackModal ? (
          <div className="bg-[#141414] rounded-3xl shadow-lg p-6 min-w-[300px] sm:w-[500px] w-full relative">
            <h3 className="text-white text-lg font-medium mb-4">Voice Recording</h3>
            
            {audioURL && (
              <div className="mb-6 flex flex-col items-center">
                <audio 
                  src={audioURL} 
                  controls 
                  className="w-full mb-4"
                  autoPlay
                />
                
                <div className="text-white/70 text-sm mb-4">
                  Listen to your recording and choose what to do with it
                </div>
              </div>
            )}
            
            <div className="flex flex-wrap justify-center gap-3">
              <button 
                onClick={discardRecording}
                className="text-white/70 hover:text-white px-4 py-2 rounded-full bg-white/10 
                         transition-colors duration-300 flex items-center gap-2"
                aria-label="Discard recording"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <span>Discard</span>
              </button>
              
              <button 
                onClick={transcribeAudio}
                className="text-white/90 hover:text-white px-4 py-2 rounded-full bg-blue-500/50 
                         hover:bg-blue-500/70 transition-colors duration-300 flex items-center gap-2"
                aria-label="Transcribe to text"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
                <span>Transcribe</span>
              </button>
              
              <button 
                onClick={saveRecording}
                className="text-black bg-white/85 hover:bg-white px-4 py-2 rounded-full 
                         transition-colors duration-300 flex items-center gap-2 font-medium"
                aria-label="Save recording"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Save Recording</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-[#141414] rounded-3xl shadow-lg p-4 min-w-[300px] sm:w-[500px] w-full relative">
            <textarea
              ref={textareaRef}
              value={noteContent}
              onChange={handleNoteChange}
              className="w-full h-64 bg-[#1E1E1E] text-white p-3 rounded-xl outline-none 
                        border border-white/10 focus:border-white/30 resize-none"
              placeholder="Write your notes here..."
            />
            
            <div className="flex justify-end gap-2 absolute bottom-2 right-2 ">
              <button 
                onClick={closeModal}
                className="text-white/70 hover:text-white px-2 py-2 rounded-full bg-white/10 
                         transition-colors duration-300 flex items-center gap-1 backdrop-blur-lg"
                aria-label="Cancel"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <button 
                onClick={handleSaveNote}
                className="text-black bg-white/85 hover:bg-white px-3 rounded-full 
                         transition-colors duration-300 flex items-center gap-1 font-medium backdrop-blur-lg"
                aria-label="Save note"
                disabled={!noteContent.trim()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}