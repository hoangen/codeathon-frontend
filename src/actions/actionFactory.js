export default class ActionFactory {
    /**
     * Create action for a generic payload
     * @param {string} actionType the pre-defined type of action
     * @param {object} payload action's payload
     */
  static create (actionType, payload, meta) {
    return {
      type: actionType,
      payload: payload,
      meta: meta
    }
  }

    /**
     * Create action without payload
     * @param {string} actionType the pre-defined type of action
     */
  static ofType (actionType) {
    return this.create(actionType)
  }
}
