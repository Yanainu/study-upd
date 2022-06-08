export default {
    requests(state, _, _2, rootGetters) {
        //получаем айди для отбора через rootGetter
        const coachId = rootGetters.userId;//это в корневом index js
        //получаем список реквестов с этим айди
        return state.requests.filter(req => req.coachId === coachId);
    },
    hasRequests(_, getters) {
        //получим тру если есть хотя бы один реквест
        //через getters обращаемся к предыдущему геттеру
        //проверяем то что он вернул, а не все реквесты вообще
        return getters.requests && getters.requests.length > 0;
    }
}