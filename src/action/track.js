import axios from 'axios';
import config from '../config';

let configUrl = config.apiUrl;
// Функция для добавления нового трека
export const addTrack = async (track, status, date, weight, toFilial) => {
  try {
    console.log(toFilial)
    const response = await axios.post(`${configUrl}/api/track/addTrack`, {
      track,
      status,
      date,
      weight,
      toFilial // Если selectedFilial нет, передаем null
    });
    
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      const { message, errors } = error.response.data;
      console.log('Validation errors:', errors);
      alert(message);
    } else {
      console.error('Error:', error.message);
    }
  }

  
};

// Функция для отправки запроса на обновление треков на сервер
export const excelTracks = async (tracks, status, date, toFilial) => {
  try {
      // Отправляем POST запрос на сервер для обновления треков
      const response = await axios.post(`${configUrl}/api/track/addExcelTrack`, {
          tracks,
          status,
          date,
          toFilial // Если selectedFilial нет, передаем null
      });
      
      // Возвращаем данные ответа от сервера
      return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      const { message, errors } = error.response.data;
      console.log('Validation errors:', errors);
      alert(message);
    } else {
      console.error('Error:', error.message);
    }
  }
};
