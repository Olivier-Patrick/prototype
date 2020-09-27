
export const mapStateToProps = (state) => {
  return {
    lang: state.langReducer.lang,
    admin: state.adminReducer.admin
  }
}
