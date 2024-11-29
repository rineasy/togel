import { API_BASE_URL } from '../config';

export const fetchLatestDraws = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/draws/latest`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching latest draws:', error);
    throw error;
  }
};

export const fetchDrawHistory = async (marketName) => {
  try {
    const response = await fetch(`${API_BASE_URL}/draws/history/${marketName}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching draw history:', error);
    throw error;
  }
};
