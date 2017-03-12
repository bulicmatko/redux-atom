const noop = () => ({})

/**
 *  Create Redux Atom Factory
 */
export default ({
  actionTypesFactory = noop,
  selectorsFactory = noop,
  repositoryFactory = noop,
  actionCreatorsFactory = noop,
  initialStateFactory = noop,
  reducerFactory = noop
}) => ({
  namespace = '',
  data = undefined,
  rootUrl = '',
  rootSelector = state => state
}) => {
  const actionTypes = actionTypesFactory(namespace)
  const selectors = selectorsFactory(rootSelector)
  const repository = repositoryFactory(rootUrl)
  const actionCreators = actionCreatorsFactory(actionTypes, selectors, repository)
  const initialState = initialStateFactory(data)
  const reducer = reducerFactory(actionTypes, initialState)

  return {
    actionTypes,
    ...actionTypes,
    actionCreators,
    ...actionCreators,
    reducer,
    selectors,
    ...selectors
  }
}
