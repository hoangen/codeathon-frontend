import ActionType from './../actions/actionType'
import SessionService from './../services/session.service'
import { Observable } from 'rxjs/Observable'
import {getConfigurationsFailed, initCustomerSession} from "../actions/actionCreator";
import getConfigurations from "./getConfigurations";
//
// export const revokeCustomerSessionEpic = (action$, store) =>
//   action$.ofType(ActionType.REVOKE_CUSTOMER_SESSION)
//     .mergeMap(action => {
//       const {customerSubmitLoanResponse: {customerSession: {accessToken}}} = store.getState()
//       const sessionInfo = createSessionInfo(accessToken)
//       return new SessionService(store.dispatch).revokeCustomerSession(sessionInfo)
//         .map(okResp => revokeCustomerSessionSuccess(okResp))
//         .onErrorResumeNext(Observable.empty())
//     })
//
// const createSessionInfo = accessToken => ({
//   method: 'WEB',
//   sessionKey: accessToken
// })

const createRequestBody = accessToken => ({
    sessionKey: accessToken
})

const initCustomerSessionEpic = (action$, store) =>
    action$.ofType(initCustomerSession().type)
        .mergeMap(action => {
            console.log("initCustomerSessionEpic");
            const requestBody = createRequestBody("aaaa")
            return new SessionService(store.dispatch).initCustomerSession(requestBody)
                .map(okResp => (okResp))
                .onErrorResumeNext(Observable.empty())
        })


export default initCustomerSessionEpic
