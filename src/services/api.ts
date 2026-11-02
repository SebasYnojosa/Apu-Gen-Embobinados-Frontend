import axios from 'axios';

// Creamos una instancia de Axios con la URL base de nuestro Spring Boot
const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor opcional para manejar errores globalmente en el frontend
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Aquí capturamos el JSON limpio que arroja tu GlobalExceptionHandler de Java
        if (error.response && error.response.data) {
            console.error("Error del backend:", error.response.data.message);
        }
        return Promise.reject(error);
    }
);

export default api;