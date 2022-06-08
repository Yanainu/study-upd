export default {
    //геттер для доступа к массиву тренеров
    coaches(state) {
        return state.coaches;
    },
    //для определения есть ли вообще тренера в списке
    //чтоб если их нет - не рендерить список, а просто ошибку
    hasCoaches(state) {
        return state.coaches && state.coaches.length > 0;
        //венет тру либо фолс
    },
    //является ли пользователь тренером(тру фолс) проверка по id
    isCoach(_, getters, _2, rootGetters) {
        //список коучей
        const coaches = getters.coaches;
        //смотрим на этот список и проверяем есть ли там чел
        //с айди, которое мы проверяем
        //берем из корневого index этот айди
        const userId = rootGetters.userId;
        //some возвращает элемент если он соответствует критерию
        return coaches.some(coach => coach.id === userId)
        //если будет хоть одно совпадение - вернется тру
    },
    //надо ли заново грузить список с сервера, проверяем lastFetch
    //true - надо обновить, false - не надо
    shouldUpdate(state) {
        const lastFetch = state.lastFetch;
        //если еще ни одного fetch не было - канешн true
        if (!lastFetch) {
            return true;
        }
        //сравниваем время фетча и время текущее
        //вот это текущее, когда мы используем этот геттер
        const currentTimeStamp = new Date().getTime();
        //смотрим разницу и больше ли это чем минута. если больше - true
        return (currentTimeStamp - lastFetch / 1000 > 60)

    }
};