// services/api.ts

interface SpellResponse {
    // Define the structure of your API response here
    // This is just an example, adjust according to the actual response
    id: string;
    status: string;
    result: any;
  }
  
  export async function startSpell(): Promise<SpellResponse> {
    try {
      const response = await fetch('https://v2-api.respell.ai/spells/start', {
        method: 'POST',
        headers: {
          'x-api-key': 'clxf6ath80doehxs0zel76oji',
          'accept': 'application/json',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          spellId: 'clyd09ocg02hzaricp0mz3794',
          wait: true,
          inputs: {},
        }),
      });
  
      if (!response.ok) {
        throw new Error('API request failed');
      }
  
      const data: SpellResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Error starting spell:', error);
      throw error;
    }
  }