export default {
    async contactCoach(context, payload) {
        //объект - с данными из формы ContactCoach, которые в payload
        const newRequest = {
            userEmail: payload.email,
            message: payload.message,
            //айди коуча будет создано в firebase
        }
        //отправляем данные на сервер, к ссылке добавляем requests/coachId это куда сохранять
        const response = await fetch(`https://coaches-project-a4246-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`, {
            method: 'POST',//мы ничего не перезаписываем, просто сохраняем
            body: JSON.stringify(newRequest) //newRequest выше
        });
        const responseData = await response.json();

        //мы хотим юзать id из firebase
        newRequest.id = responseData.name;//name  это id в firebase
        newRequest.coachId = payload.coachId;

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to send');
            throw error; 
        }
        //вызываем mutation addRequest и прокидываем туда этот объект
        context.commit('addRequest', newRequest)
        //и после этого должен добавиться новый реквест в 
        //список реквестов в индексе, как ток сделаем dispatch
    },
    //получение реквестов по текущему коучу
    async fetchRequests(context) {
        const coachId = context.rootGetters.userId;//в корневом index
        //для проверки авторизации
        const token = context.rootGetters.token;
        const response = await fetch(`https://coaches-project-a4246-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json?auth=${token}`);
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to get requests');
            throw error; 
        }

        //трансформируем полученные данные в массив как положено
        const requests = [];

        for (const key in responseData) {
            const request = {
                id: key,
                coachId: coachId,
                userEmail: responseData[key].userEmail,
                message: responseData[key].message,
            };
            requests.push(request);
        }
        //requests станет payload в мутейшоне setRequests
        context.commit('setRequests', requests);
    }
}