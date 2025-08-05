import React, { useState } from 'react';
import axios from 'axios';

interface CalendarSyncProps {
  propertyId: number;
  airbnbId: string;
  onSyncComplete: (success: boolean) => void;
}

const CalendarSync: React.FC<CalendarSyncProps> = ({ propertyId, airbnbId, onSyncComplete }) => {
  const [syncing, setSyncing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleSync = async () => {
    setSyncing(true);
    setError(null);
    
    try {
      // In a real application, you would make an API call to your backend
      // which would then fetch the calendar data from Airbnb's API
      // For demo purposes, we'll simulate this with a timeout
      
      // Example of how you would sync with a real API:
      /*
      const response = await axios.post('/api/calendar/sync', {
        propertyId,
        airbnbId,
        platform: 'airbnb'
      });
      
      if (response.data.success) {
        onSyncComplete(true);
      } else {
        setError(response.data.message || 'Failed to sync calendar');
        onSyncComplete(false);
      }
      */
      
      // Simulate API call
      setTimeout(() => {
        setSyncing(false);
        onSyncComplete(true);
      }, 2000);
      
    } catch (err) {
      setSyncing(false);
      setError('Failed to sync calendar. Please try again.');
      onSyncComplete(false);
    }
  };
  
  return (
    <div>
      <button
        onClick={handleSync}
        disabled={syncing}
        className={`flex items-center text-beige-dark hover:text-black transition-colors ${syncing ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {syncing ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Syncing...
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v1h10V3a1 1 0 112 0v1h1a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zm11 14a1 1 0 100-2H5a1 1 0 100 2h10z" clipRule="evenodd" />
            </svg>
            Sync with Airbnb Calendar
          </>
        )}
      </button>
      
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

export default CalendarSync;
