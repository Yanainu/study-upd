export default {
    addRequest(state, payload) {
        //тут payload это реквест из формы ConactCoach
        state.requests.push(payload)
    },
    setRequests(state, payload) {
        state.requests = payload;
        //payload будет массивом с реквестами с сервера
    }
}