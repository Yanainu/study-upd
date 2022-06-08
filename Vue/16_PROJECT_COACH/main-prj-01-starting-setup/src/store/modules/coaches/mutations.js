export default {
    //добавление тренера из формы. state payload - стандартные аргументы
    //state отсылка на уже имеющиеся данные, payload - то что мы передаем новое
    registerCoach(state, payload) {
        //в список тренеров пушим нового тренера
        state.coaches.push(payload);
        //тут payload это formData из компонента CoachForm
        //а там имена ключей сокращенные, но мы это трансформируем уже в action
    },
    setCoaches(state, payload) {
        state.coaches = payload;
    },
    //изменяем lastFetch в index.js этого модуля
    setFetchTimestamp(state) {
        state.lastFetch = new Date().getTime();
    }
};