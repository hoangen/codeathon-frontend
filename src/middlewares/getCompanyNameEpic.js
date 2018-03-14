import { getCompanyName, getCompanyNameDone } from './../actions/actionCreator'
import CompanyNameService from './../services/companyNameService'
import { Observable } from 'rxjs'

const getCompanyNameEpic = (action$, store) =>
  action$.ofType(getCompanyName().type)
    .mergeMap(action => Observable.of(action))
    .debounceTime(500)
    .switchMap(action => new CompanyNameService(store.dispatch)
        .getCompanyName(action.payload, store.getState().getConfigurationsAPIResponse.configurations.limitedRecordSearchingCompany)
        .map(({data}) => getCompanyNameDone({data: data}))
    )

export default getCompanyNameEpic
