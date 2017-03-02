/**
 *  Create Redux Atom Factory
 */
export default ({
  actionTypesFactory = () => ({}),
  selectorsFactory = () => ({}),
  repositoryFactory = () => ({}),
  actionCreatorsFactory = () => ({}),
  initialStateFactory = () => ({}),
  reducerFactory = () => ({})
}) => ({
  namespace = '',
  rootUrl = '',
  rootSelector = state => state
}) => {
  const actionTypes = actionTypesFactory(namespace)
  const selectors = selectorsFactory(rootSelector)
  const repository = repositoryFactory(rootUrl)
  const actionCreators = actionCreatorsFactory(actionTypes, selectors, repository)
  const initialState = initialStateFactory()
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
