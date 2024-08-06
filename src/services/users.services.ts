import axios from 'axios';

const getRandomInt = (min: any, max: any) => Math.floor(Math.random() * (max - min + 1)) + min;

export const fetchUsers = async () => {
  try {
    const response = await axios.get('https://api.escuelajs.co/api/v1/users');
    const data = response.data;
    
    data.forEach((element: any) => {
      element.chart = getRandomInt(1, 100);
      element.fee = getRandomInt(1, 100);
      element.level = element.chart - getRandomInt(1, 10);
      element.friends = getRandomInt(1, 500);
    });

    data.sort((a: any, b: any) => b.level - a.level);

    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
